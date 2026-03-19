"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import "./listComponent.css";

gsap.registerPlugin(ScrollTrigger);

export default function ListComponent({ number, title, subTitle }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".left_contents", {
        x: 400,
        opacity: 0,
        duration: 1,
        stagger: 0.2, 
        scrollTrigger: {
          scrub: 1,
          trigger: ".list",
          start: "top 95%", 
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div className="list">
        <div className="left_contents">
          <div className="index">{number}</div>
          <div className="middle_content">
            <div className="approach_title">{title}</div>
            <div className="approach_sub_title">{subTitle}</div>
          </div>
        </div>
        <div className="approach_icons">
          <div className="approach_icon">
            <img src={"/images/brifcase.svg"} height="50px" width="50px" />
          </div>
          <div className="approach_icon">
            <img src={"/images/home.svg"} height="50px" width="50px" />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
