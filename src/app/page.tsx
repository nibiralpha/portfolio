import HeroComponent from "./Component/HeroComponent/HeroComponent";
import AboutUsComponent from "./Component/AboutUsComponent/AboutUsComponent";
import ServicesComponent from "./Component/ServicesComponent/ServicesComponent";
export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <AboutUsComponent />
      <ServicesComponent />
    </div>
  );
}
