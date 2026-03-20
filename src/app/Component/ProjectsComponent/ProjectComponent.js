"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectComponent.css";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproachComponent() {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      const images = gsap.utils.toArray(".project img");
      const menuItems = gsap.utils.toArray(".menu_text");

      gsap.set(images, { position: "relative" });
      gsap.set(images.slice(1), {
        yPercent: 100,
        position: "absolute",
        top: 0,
        left: 0,
      });

      gsap.set(menuItems, { color: "rgb(115, 115, 115)" });
      gsap.set(menuItems[0], { color: "#ffffff" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 5%",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      images.forEach((img, i) => {
        if (i === 0) return;

        tl.to(
          img,
          {
            yPercent: 0,
            ease: "none",
          },
          "+=0.5",
        )

          .to(menuItems[i], { color: "#ffffff", duration: 0.2 }, "<")
          .to(menuItems[i - 1], { color: "#414141", duration: 0.2 }, "<");
      });
    },
    { scope: mainRef },
  );

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <div className="projects" ref={mainRef}>
        <div className="project_section">
          <div className="project_menu">
            <div className="project_menus">
              <div className="menu_text">Arca Collective</div>
              <div className="menu_text">Miren Health</div>
              <div className="menu_text">Vestra Advisory</div>
              <div className="menu_text">Studio Kline</div>
            </div>
          </div>

          <div className="project_gallery" style={{ overflow: "hidden" }}>
            <div className="project_slider">
              <div className="project">
                <img src="/images/project1.webp" alt="p1" />
                <img src="/images/project2.png" alt="p2" />
                <img src="/images/project3.webp" alt="p3" />
                <img src="/images/project4.webp" alt="p4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
