import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import useEngine from "./EngineStore";
import { CAMERA } from "../utils/constants";

export default function CameraSystem() {
  const { camera, mouse } = useThree();

  const target = useRef(new THREE.Vector3());
  const lookTarget = useRef(new THREE.Vector3());
  const smoothLook = useRef(new THREE.Vector3());

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    const { section, scrollProgress } = useEngine.getState();

    let x = mouse.x * CAMERA.MOUSE_STRENGTH_X;
    let y = mouse.y * CAMERA.MOUSE_STRENGTH_Y;
    let z = CAMERA.DEFAULT_Z;

    switch (section) {
      case "about":
        x += 0.8;
        y -= 0.3;
        z = 9.4;
        break;

      case "projects":
        x -= 0.7;
        y += 0.25;
        z = 8.8;
        break;

      case "contact":
        x = 0;
        y = 0;
        z = 8.2;
        break;

      default:
        break;
    }

    const p = scrollProgress;

    // Global scroll movement
    z -= p * 1.5;
    x += Math.sin(p * Math.PI * 2) * 0.8;
    y -= p * 0.75;

    // Idle floating
    x += Math.sin(time * 0.25) * 0.08;
    y += Math.cos(time * 0.22) * 0.06;

    // Cinematic push
    z += Math.sin(time * 0.15) * 0.08;

    target.current.set(x, y, z);

    camera.position.lerp(target.current, 0.05);

    lookTarget.current.set(
      mouse.x * 0.8,
      mouse.y * 0.45,
      -2
    );

    smoothLook.current.lerp(lookTarget.current, 0.06);

    camera.lookAt(smoothLook.current);

    // Cinematic banking
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      mouse.x * -0.035,
      0.05
    );
  });

  return null;
}