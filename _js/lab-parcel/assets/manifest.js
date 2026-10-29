// glTF file per entity model id, relative to data-assets-base (/assets/models/). null = keep the greybox.
// Authoring: 1 unit = 50 cm, y up, origin at the bottom centre, same size as the greybox in entities/.
// Export as .glb without Draco/meshopt compression for now: no decoder is wired yet.
// ponytail: the parcel is not listed: it is articulated (4 flaps on hinges), its model will need one node
// per flap (flap-short-l, flap-short-r, flap-long-f, flap-long-b) and a mapping step in entities/box.js.
export const MANIFEST = {
  'tape-gun': null,
  tee: null,
  sweater: null,
  shoebox: null,
  gift: null,
};
