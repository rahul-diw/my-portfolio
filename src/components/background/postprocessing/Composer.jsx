import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Composer() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.16}
        luminanceThreshold={0.55}
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