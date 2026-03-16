import HeroComponent from "./Component/HeroComponent/HeroComponent";
import AboutUsComponent from "./Component/AboutUsComponent/AboutUsComponent";
import ServicesComponent from "./Component/ServicesComponent/ServicesComponent";
import OurApproachComponent from "./Component/OurApproachComponent/OurApproachComponent";
import ProjectComponent from "./Component/ProjectsComponent/ProjectComponent";
export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <AboutUsComponent />
      <ServicesComponent />
      <OurApproachComponent />
      <ProjectComponent />
    </div>
  );
}
