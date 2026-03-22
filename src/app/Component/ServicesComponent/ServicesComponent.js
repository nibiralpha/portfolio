"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesComponent() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");

      boxes.forEach((box) => {
        const positiveImg = box.querySelector(".img-default");

        gsap.fromTo(
          positiveImg,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  const services = [
    {
      id: "01",
      img: "service-section1.webp",
      neg: "service-section1-negetive.webp",
    },
    {
      id: "02",
      img: "service-section2.webp",
      neg: "service-section2-negetive.webp",
    },
    {
      id: "03",
      img: "service-section3.webp",
      neg: "service-section3-negetive.webp",
    },
  ];

  return (
    <div className="services" ref={containerRef}>
      <div className="heading">
        <div className="title">CORE BRAND SUPPORT</div>
        <hr className="hr" />
        <div className="sub_title">OUR SERVICES</div>
      </div>
      <div className="row boxes">
        {services.map((service, index) => (
          <div className="col-4" key={index}>
            <div className="box">
              <div className="service-head">BRAND POSITIONING</div>
              <div className="service-detail">
                <div className="detail">Clarify your brand’s Strategies</div>
                <div className="points">{service.id}</div>
              </div>
              <div className="image_area">
                <img src={`/images/${service.neg}`} className="img-negative" />
                <img src={`/images/${service.img}`} className="img-default" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
