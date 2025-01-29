import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Vortex } from "./vortex.tsx";
import { Link } from "react-router-dom";

//----------------------------------------------------//

export const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Empowering Businesses with Cutting-Edge Web Solutions.",
    "Innovating the Digital Future.",
    "Building Websites that Convert & Grow."
  ];

  // Function to change the text after a delay
  const changeText = () => {
    setTextIndex((prev) => (prev + 1) % texts.length);
  };

  const text = "Custom Websites Built to Engage, Convert, and Grow Your Business.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }

      // Toggle between typing and deleting
      if (index === text.length) {
        setIsDeleting(true);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? 100 : 150); // Adjust speed for typing and deleting

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [index, isDeleting]);

  return (
    <>
      <Vortex
        backgroundColor="black"
        className="w-full h-screen overflow-hidden flex items-center flex-col justify-center text-white text-center px-4"
      >
        {/* Typing Animation for Headline */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          key={textIndex} // Key will trigger re-mount and animation reset
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => setTimeout(changeText, 2000)} // Change text after animation
        >
          {texts[textIndex]}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-2xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {displayText}
        </motion.p>
        <motion.p
          className="text-lg md:text-1xl mt-7 text-gray-400 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Get in Touch with Micro Sonic Today! <br />
          Have a question or ready to start your project? We're here to help!
        </motion.p>

        <Link to="/query">
          <button className="mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-none">
            Book a Free Appointment
          </button>
        </Link>
      </Vortex>
    </>
  );
};
