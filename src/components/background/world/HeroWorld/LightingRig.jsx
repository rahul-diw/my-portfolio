import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import useEngine from "../../engine/EngineStore";

export default function LightingRig() {
  const accent = useRef();
  const main = useRef();
  const fill = useRef();
  const rim = useRef();

  const scrollProgress = useEngine((state) => state.scrollProgress);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Animated Accent Light
    if (accent.current) {
      accent.current.position.x =
        Math.sin(t * 0.35) * 4 + scrollProgress * 1.2;

      accent.current.position.z =
        5 + Math.cos(t * 0.25) * 2;

      accent.current.position.y =
        3 + Math.sin(t * 0.5) * 0.5;

      accent.current.intensity =
        0.7 - scrollProgress * 0.25;
    }

    // Main Light
    if (main.current) {
      main.current.position.x =
        5 - scrollProgress * 2;

      main.current.position.y =
        8 - scrollProgress * 1.2;

      main.current.intensity =
        1.25 - scrollProgress * 0.45;
    }

    // Fill Light
    if (fill.current) {
      fill.current.intensity =
        0.25 + scrollProgress * 0.25;
    }

    // Rim Light
    if (rim.current) {
      rim.current.intensity =
        1.3 - scrollProgress * 0.35;
    }
  });

  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.08} />

      {/* Main Light */}
      <directionalLight
        ref={main}
        position={[5, 8, 6]}
        intensity={1.25}
        color="#ffffff"
      />

      {/* Fill */}
      <directionalLight
        ref={fill}
        position={[-6, 3, 2]}
        intensity={0.25}
        color="#d8d8d8"
      />

      {/* Rim */}
      <pointLight
        ref={rim}
        position={[0, 4, -6]}
        intensity={1.3}
        distance={18}
        color="#ffffff"
      />

      {/* Moving Accent */}
      <pointLight
        ref={accent}
        position={[0, 3, 5]}
        intensity={0.7}
        distance={12}
        color="#f2f2f2"
      />

      {/* Hero Spotlight */}
      <spotLight
        position={[2, 6, 6]}
        angle={0.55}
        penumbra={1}
        intensity={3.5}
        color="#ffffff"
      />

      {/* Side Fill */}
      <pointLight
        position={[-5, 2, 3]}
        intensity={1.2}
        distance={20}
        color="#cfcfcf"
      />
    </>
  );
}