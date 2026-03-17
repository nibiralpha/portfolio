import HeroComponent from "./Component/HeroComponent/HeroComponent";
import AboutUsComponent from "./Component/AboutUsComponent/AboutUsComponent";
import ServicesComponent from "./Component/ServicesComponent/ServicesComponent";
import OurApproachComponent from "./Component/OurApproachComponent/OurApproachComponent";
import ProjectComponent from "./Component/ProjectsComponent/ProjectComponent";
import ClientComponent from "./Component/ClientsComponent/ClientComponent";
import FooterComponent from "./Component/FooterComponent/FooterComponent";

export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <AboutUsComponent />
      <ServicesComponent />
      <OurApproachComponent />
      <ProjectComponent />
      <ClientComponent />
      <FooterComponent />
    </div>
  );
}
