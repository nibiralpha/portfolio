"use client";

import { useEffect, useRef } from "react";
import "./AboutUs.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUsComponent() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(leftRef.current, { y: 0 });
  gsap.set(rightRef.current, { y: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 100",
      end: "+=2000",
      scrub: 1.2,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to(leftRef.current, {
    y: -100,
    ease: "none",
  });

  tl.to(
    rightRef.current,
    {
      y: 100,
      ease: "none",
    },
    0
  );
}, []);

  return (
    <div className="about_section">
      <div className="scroll_container">
        <img className="mouse" src={"/images/mouse.svg"} />
        <div className="scroll_text">SCROLL</div>
      </div>

      <div className="about_us" ref={sectionRef}>
        <div className="title">ABOUT US</div>

        <div className="about_detail_container">
          <div className="about_images">
            <img ref={leftRef} className="left_image" src="/images/left.webp" />
            <img
              ref={rightRef}
              className="right_image"
              src="/images/right.svg"
            />
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
