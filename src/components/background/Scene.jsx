import Engine from "./engine/Engine";
import World from "./engine/World";
import Composer from "./postprocessing/Composer";

export default function Scene() {
  return (
    <>
      <Engine />
      <World />
      <Composer />
    </>
  );
}