import "./AboutUs.css";

export default function AboutUsComponent() {
  return (
    <div className="about_section">
      <div className="scroll_container">
        <img className="mouse" src={"/images/mouse.svg"}></img>
        <div className="scroll_text">SCROLL</div>
      </div>
      <div className="about_us">
        <div className="title">ABOUT IS</div>

        <div className="about_detail_container">
          <div className="about_images">
            <img className="left_image" src={"/images/left.webp"}></img>
            <img className="right_image" src={"/images/right.svg"}></img>
          </div>

          <div className="about_detail">
            WE’RE BRAND CONSULTANT WORKING AT THE INTERSECTION OF STRATEGY AND
            CREATIVE DIRECTION.
          </div>

          <div className="about_more">
            <div className="about_text">
              OVER THE YEARS, I’VE PARTNERED WITH INDEPENDENT FOUNDERS, STUDIOS,
              AND AGENCIES TO HELP THEM ARTICULATE WHO THEY ARE, WHAT THEY STAND
              FOR, AND HOW THEY COMMUNICATE IT CLEARLY.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
