import HeroWorld from "../world/HeroWorld";
import AboutWorld from "../world/AboutWorld";
import ProjectsWorld from "../world/ProjectsWorld";
import ContactWorld from "../world/ContactWorld";

export default function World() {
  return (
    <group name="World">
      {/* Hero Scene */}
      <HeroWorld />

      {/* About Scene */}
      <AboutWorld />

      {/* Projects Scene */}
      <ProjectsWorld />

      {/* Contact Scene */}
      <ContactWorld />
    </group>
  );
}