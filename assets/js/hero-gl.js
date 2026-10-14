// Hero background: domain-warped fbm noise in WebGL1, tinted with the brand palette.
// No dependencies. Falls back to the CSS gradient under the canvas if WebGL is missing.
(function () {
  var canvas = document.getElementById('hero-gl');
  var gl = canvas && canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: false });
  if (!gl) return;

  var vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var fs = [
    'precision mediump float;',
    'uniform vec2 r; uniform float t; uniform vec2 m;',
    'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);',
    ' return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}',
    'void main(){',
    ' vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;',
    ' vec2 mo=(m-.5*r)/r.y;',
    ' float d=exp(-3.*length(uv-mo));',
    ' vec2 q=vec2(fbm(uv*1.6+t*.05),fbm(uv*1.6-t*.04+3.1));',
    ' vec2 w=uv*1.4+2.2*q+d*.6;',
    ' float f=fbm(w+t*.03);',
    ' vec3 bg=vec3(.043,.051,.102), ind=vec3(.30,.34,.85), acc=vec3(.99,.64,.07);',
    ' vec3 c=mix(bg,ind,smoothstep(.35,.85,f));',
    ' c=mix(c,acc,smoothstep(.62,.95,f*q.y*1.6)+d*.12);',
    ' c*=1.-.55*smoothstep(.2,1.3,length(uv*vec2(.7,1.)));',
    ' gl_FragColor=vec4(c,1.);',
    '}'
  ].join('\n');

  function sh(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  var prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  var aP = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(aP);
  gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

  var uR = gl.getUniformLocation(prog, 'r');
  var uT = gl.getUniformLocation(prog, 't');
  var uM = gl.getUniformLocation(prog, 'm');
  // ponytail: DPR capped at 1 — full-screen fbm is fill-rate bound; raise if it looks soft on retina.
  var scale = Math.min(window.devicePixelRatio || 1, 1);
  var mouse = [0, 0], target = [0, 0];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var visible = true, raf = 0, t0 = performance.now() - 20000; // start mid-animation

  function resize() {
    var w = canvas.clientWidth * scale, h = canvas.clientHeight * scale;
    canvas.width = w; canvas.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uR, w, h);
    mouse = [w * 0.7, h * 0.6];
    target = mouse.slice();
  }

  function frame(now) {
    mouse[0] += (target[0] - mouse[0]) * 0.05;
    mouse[1] += (target[1] - mouse[1]) * 0.05;
    gl.uniform1f(uT, (now - t0) / 1000);
    gl.uniform2f(uM, mouse[0], mouse[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!reduced && visible) raf = requestAnimationFrame(frame);
  }

  window.addEventListener('pointermove', function (e) {
    var b = canvas.getBoundingClientRect();
    target = [(e.clientX - b.left) * scale, (b.bottom - e.clientY) * scale];
  }, { passive: true });
  window.addEventListener('resize', function () { resize(); if (reduced) frame(performance.now()); });

  new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(frame);
  }).observe(canvas);

  resize(); // the observer fires on observe() and starts the loop
})();
