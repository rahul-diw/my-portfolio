import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Atmosphere() {
  const group = useRef(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    group.current.rotation.z = Math.sin(t * 0.05) * 0.015;
    group.current.rotation.y = Math.sin(t * 0.03) * 0.02;
  });

  return <group ref={group} />;
}