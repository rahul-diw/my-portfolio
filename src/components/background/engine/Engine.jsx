import CameraSystem from "./CameraSystem";
import ScrollController from "./ScrollController";
import MouseController from "./MouseController";
import TransitionController from "./TransitionController";

export default function Engine() {
  return (
    <>
      <CameraSystem />

      <ScrollController />

      <MouseController />

      <TransitionController />
    </>
  );
}