import Floor from "./HeroWorld/Floor";
import LightingRig from "./HeroWorld/LightingRig";
import VolumetricFog from "./HeroWorld/VolumetricFog";
import HeroSculpture from "./HeroWorld/HeroSculpture";

export default function HeroWorld() {
  return (
    <group>
      <LightingRig />

      <Floor /> 

      <VolumetricFog />

      <HeroSculpture />
    </group>
  );
}