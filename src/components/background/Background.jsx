import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  PerformanceMonitor,
  Preload,
} from "@react-three/drei";
import { Suspense, useState } from "react";

import Scene from "./Scene";

export default function Background() {
  // const [dpr, setDpr] = useState(2);

  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none"
      style={{
        background: "#050505",
      }}
    >
      {/* Base Noise */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 25% 25%,rgba(255,255,255,.18) 0px,transparent 1px),
          radial-gradient(circle at 75% 75%,rgba(255,255,255,.12) 0px,transparent 1px)
        `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle,#00000000 35%,rgba(0,0,0,.55) 100%)",
        }}
      />

      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        {/* <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        /> */}

        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Preload all />
      </Canvas>
    </div>
  );
}