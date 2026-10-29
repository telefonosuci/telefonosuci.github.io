// Ship phase: the sealed parcel slides off the table, then the score shows up.
// ponytail: the label step (print, peel, stick) goes here, before the parcel leaves.
const DISTANCE = 5;

export function createShipping({ cargo, tweens, done }) {
  return {
    enter() {
      tweens.to(0.9, (p) => { cargo.position.x = p * p * DISTANCE; }, (p) => p).then(done);
    },
  };
}
