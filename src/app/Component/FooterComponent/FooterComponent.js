"use client";
import "./Footer.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FooterComponent() {
  const container = useRef();
  
  useGSAP(
    () => {
      gsap.from(".footer_image img", {
        y: 100,
        scrollTrigger: {
          scrub: 1,
          trigger: ".footer_head",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <div className="footer" ref={container}>
      <div className="footer_image_section">
        <div className="footer_head">READY TO BRING FOCUS TO YOUR BRAND?</div>
        <div className="footer_image">
          <img className="vr" src="/images/vr.webp" />
        </div>
      </div>
      <div className="row footer_start">
        <div className="col-4">
          <div className="detail1">HELLO@9AM.DESIGN</div>
        </div>

        <div className="col-4">
          <div className="detail2">
            <div className="detail2_margin">
              If you value clarity, intention, and thoughtful brand building, we
              may be a good fit.
            </div>
            <div>Let’s Build Together!</div>
          </div>
        </div>

        <div className="col-4">
          <div className="footer_menu_container">
            <div className="footer_menu">
              <div>License</div>
              <div>Style Guide</div>
              <div>404</div>
              <div>Changelog</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}