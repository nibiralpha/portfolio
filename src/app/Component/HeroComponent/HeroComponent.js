import ImageSlider from "../Slider/SliderComponent";
import "./hero.css";

export default function HeroComponent() {
  return (
    <div className="hero_section">
     
      <div className="center_content">
         <ImageSlider></ImageSlider>
        <div className="background_text">
          <h6>
            DORA <i>AGENCY</i>
          </h6>
        </div>

        <div className="texts">
          <div className="left_side">
            <div className="left_text">
              GREAT BRANDS DONT TRY TO SAY EVERYTHING.
            </div>
          </div>

          <div className="right_side">
            <div className="right_text">
              THEY DECIDE WHAT MATTERS AND COMMIT TO IT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
