import "./Services.css";

export default function ServicesComponent() {
  return (
    <div className="services">
      <div className="heading">
        <div className="title">CORE BRAND SUPPORT</div>
        <hr className="hr"></hr>
        <div className="sub_title">OUR SERVICES</div>
      </div>
      <div className="row boxes">
        <div className="col-4">
          <div className="box">
            <div className="service-head">BRAND POSITIONING</div>
            <div className="service-detail">
              <div className="detail">Clarify your brand’s Strategies</div>
              <div className="points">01</div>
            </div>
            <div className="image_area">
              <img src={"/images/service-section1.webp"} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <div className="service-head">BRAND POSITIONING</div>
            <div className="service-detail">
              <div className="detail">Clarify your brand’s Strategies</div>
              <div className="points">02</div>
            </div>
            <div className="image_area">
              <img src={"/images/service-section2.webp"} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <div className="service-head">BRAND POSITIONING</div>
            <div className="service-detail">
              <div className="detail">Clarify your brand’s Strategies</div>
              <div className="points">03</div>
            </div>
            <div className="image_area">
              <img src={"/images/service-section3.webp"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
