import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Fog() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.z = clock.elapsedTime * 0.01;
  });

  return <group ref={ref}></group>;
}