"use client";
import { useEffect, useRef } from "react";
import "./AboutUs.css";

export default function AboutUsComponent() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  // NEW: Ref for the hover container
  const hoverContainerRef = useRef(null);

  useEffect(() => {
    let requestRef;
    const handleScroll = () => {
      const outerSection = document.querySelector(".about_section");
      if (!outerSection) return;
      const rect = outerSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const startOffset = vh / 2;
      const currentScroll = -rect.top - startOffset;
      const totalScrollableDistance = rect.height - vh;
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);
      const move = progress * 150;

      requestRef = requestAnimationFrame(() => {
        if (leftRef.current) leftRef.current.style.transform = `translate3d(0, ${-move}px, 0)`;
        if (rightRef.current) rightRef.current.style.transform = `translate3d(0, ${move}px, 0)`;
      });
    };

    // NEW: Mouse movement handler for the radial effect
    const handleMouseMove = (e) => {
      if (!hoverContainerRef.current) return;
      const rect = hoverContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoverContainerRef.current.style.setProperty("--x", `${x}px`);
      hoverContainerRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Note: Applying the listener to window or the container depends on preference
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, []);

  const aboutText = "WE’RE BRAND CONSULTANT WORKING AT THE INTERSECTION OF STRATEGY AND CREATIVE DIRECTION.";

  return (
    <div className="about_section">
      <div className="scroll_container">
        <img className="mouse" src={"/images/mouse.svg"} alt="mouse" />
        <div className="scroll_text">SCROLL</div>
      </div>
      <div className="about_wrapper">
        <div className="about_us" ref={sectionRef}>
          <div className="title">ABOUT US</div>

          <div className="about_detail_container">
            <div className="about_images">
              <img ref={leftRef} className="left_image" src="/images/left.webp" alt="left" />
              <img ref={rightRef} className="right_image" src="/images/right.svg" alt="right" />
            </div>

            {/* UPDATED: Wrapper for the overlapping text */}
            <div className="about_detail_wrapper" ref={hoverContainerRef}>
              <div className="about_detail base">{aboutText}</div>
              <div className="about_detail highlight" aria-hidden="true">{aboutText}</div>
            </div>

            <div className="about_more">
              <div className="about_text">
                OVER THE YEARS, I’VE PARTNERED WITH INDEPENDENT FOUNDERS,
                STUDIOS, AND AGENCIES TO HELP THEM ARTICULATE WHO THEY ARE, WHAT
                THEY STAND FOR, AND HOW THEY COMMUNICATE IT CLEARLY.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
