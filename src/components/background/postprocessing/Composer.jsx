import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Composer() {
  return (
    <EffectComposer multisampling={2}>
      <Bloom
        intensity={0.22}
        luminanceThreshold={0.45}
      />

      {/* <Noise opacity={0.015} /> */}

      <Vignette
        eskil={false}
        offset={0.18}
        darkness={0.85}
      />
    </EffectComposer>
  );
}