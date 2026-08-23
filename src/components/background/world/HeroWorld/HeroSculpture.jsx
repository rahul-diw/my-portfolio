import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import useEngine from "../../engine/EngineStore";

export default function HeroSculpture() {
  const group = useRef();
  const scrollProgress = useEngine((state) => state.scrollProgress);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    // Whole sculpture
    group.current.rotation.y =
      t * 0.12 + scrollProgress * 1.15;

    group.current.rotation.x =
      Math.sin(t * 0.35) * 0.05;

    group.current.rotation.z =
      Math.sin(t * 0.18) * 0.025;

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      3.8 + mouse.x * 0.55,
      0.04
    );

    group.current.position.y =
      0.6 + Math.sin(t * 0.75) * 0.14;

    group.current.position.z =
      -3 + scrollProgress * 2;
  });

  return (
    <group ref={group}>

      {/* Main Graphite Body */}

      <RoundedBox
        args={[2.8, 5.8, 0.32]}
        radius={0.18}
      >
        <meshPhysicalMaterial
          color="#343434"
          metalness={0.9}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </RoundedBox>

      {/* Floating Front Panel */}

      <RoundedBox
        args={[2.45, 5.2, 0.08]}
        position={[0.22, 0, 0.24]}
        rotation={[0, 0.13, 0]}
        radius={0.14}
      >
        <meshPhysicalMaterial
          color="#696969"
          metalness={0.55}
          roughness={0.08}
          transmission={0.18}
          transparent
          opacity={0.92}
        />
      </RoundedBox>

      {/* Rear Layer */}

      <RoundedBox
        args={[2.35, 5.0, 0.14]}
        position={[-0.24, 0, -0.24]}
        rotation={[0, -0.13, 0]}
        radius={0.14}
      >
        <meshPhysicalMaterial
          color="#232323"
          metalness={1}
          roughness={0.35}
        />
      </RoundedBox>

      {/* Top Floating Block */}

      <RoundedBox
        args={[0.75, 0.42, 0.18]}
        position={[0, 3.45, 0]}
        rotation={[0.2, 0.6, 0]}
        radius={0.08}
      >
        <meshPhysicalMaterial
          color="#8b8b8b"
          metalness={1}
          roughness={0.18}
        />
      </RoundedBox>

      {/* Bottom Floating Block */}

      <RoundedBox
        args={[0.75, 0.42, 0.18]}
        position={[0, -3.45, 0]}
        rotation={[-0.2, -0.6, 0]}
        radius={0.08}
      >
        <meshPhysicalMaterial
          color="#8b8b8b"
          metalness={1}
          roughness={0.18}
        />
      </RoundedBox>

      {/* Side Accent */}

      <RoundedBox
        args={[0.18, 4.4, 0.1]}
        position={[1.62, 0, 0.12]}
        rotation={[0, 0.25, 0]}
        radius={0.04}
      >
        <meshPhysicalMaterial
          color="#9d9d9d"
          emissive="#111111"
          metalness={1}
          roughness={0.12}
        />
      </RoundedBox>

      {/* Rear Accent */}

      <RoundedBox
        args={[0.18, 4.1, 0.1]}
        position={[-1.58, 0, -0.15]}
        rotation={[0, -0.25, 0]}
        radius={0.04}
      >
        <meshPhysicalMaterial
          color="#2d2d2d"
          metalness={1}
          roughness={0.4}
        />
      </RoundedBox>

    </group>
  );
}