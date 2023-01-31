import ReactRenderer from "./ReactRenderer";
import VanillaRenderer from "./ReactRenderer";

class Page {

  constructor({vComponents, rComponents}) {
    this._autoloadVanilla = vComponents;
    this._autoloadReact = rComponents;
  }

  load() {

    console.log("LOADING PAGE");

    if (this._autoloadVanilla){
      this._autoloadVanilla.forEach(el => {
        VanillaRenderer.render(el);
      });
    }


    if(this._autoloadReact){
      this._autoloadReact.forEach(el => {
        ReactRenderer.render(el);
      });
    }
  }
}

export default Page;
