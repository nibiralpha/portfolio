"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import './Slider.css';

export default function ImageSlider() {
  const images = [
    "/images/head1.webp",
    "/images/head2.webp",
    "/images/head3.webp",
    "/images/head4.webp",
  ];

  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  useEffect(() => {
    setTimeout(function () {
      nextImage();
    }, 4000);
  }, [index]);

  return (
    <div className="slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 50% 0% 50%)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ width: "100%" }}
        />
      </AnimatePresence>
    </div>
  );
}
