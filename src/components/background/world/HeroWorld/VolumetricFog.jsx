import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function VolumetricFog() {
  const fog = useRef(null);

  useFrame(({ clock }) => {
    if (!fog.current) return;

    fog.current.material.opacity =
      0.18 + Math.sin(clock.elapsedTime * 0.35) * 0.03;

    fog.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.05) * 0.02;
  });

  return (
    <mesh
      ref={fog}
      position={[0, 0.2, -8]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[70, 70]} />

      <meshBasicMaterial
        color="#1d1d1d"
        transparent
        opacity={0.18}
        depthWrite={false}
      />
    </mesh>
  );
}