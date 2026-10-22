import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.2, 0]}
      receiveShadow
    >
      <planeGeometry args={[120, 120]} />

      <MeshReflectorMaterial
        resolution={1024}
        blur={[350, 120]}
        mixBlur={1}
        mixStrength={18}
        mirror={0.25}
        roughness={0.28}
        metalness={0.45}
        color="#111111"
        depthScale={1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
      />
    </mesh>
  );
}