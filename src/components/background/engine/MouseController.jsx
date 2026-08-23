import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MouseController() {
  const { mouse } = useThree();

  const position = useRef(new THREE.Vector2());

  useFrame(() => {
    position.current.lerp(mouse, 0.08);

    // Future:
    // shaders
    // glow
    // distortion
    // light beams
  });

  return null;
}