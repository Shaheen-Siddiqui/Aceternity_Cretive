import React from "react";
import { Vortex } from "../component/vortex.tsx";
import { AuroraBackground } from "../component/aurora-background.jsx";
import { motion } from "framer-motion";
import { FocusCards } from "../component/focus-cards.jsx";
import { WobbleCardDemo } from "../component/wobble-card.jsx";
import {
  IndustryCards, ShowCaseCart,
  ServiceCards
} from "../component/cards";
import { BackgroundBeamsWithCollisionDemo } from "../component/footer-background-lines";
import { Link } from "react-router-dom"
////----------------------------



export function VortexDemo() {
  return (
    <>
      <div className="w-full mx-auto min-h-screen overflow-hidden">
        <Vortex

          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-full overflow-hidden"
        >
          <div className="mt-[8rem]">

            <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 
    shadow-xl shadow-white/50 hover:scale-105 transition-transform duration-300
    text-2xl md:text-4xl lg:text-8xl font-bold">
              Micro Sonic
            </h2>

            <p className="text-white text-sm md:text-lg lg:text-3xl max-w-xl mt-3 text-center font-bold">
              Best Leading Website Design and Development Agency in Delhi NCR
            </p>

            <Link to="/query">
              <div className="flex flex-col sm:flex-row items-center gap-9 mt-9 w-full justify-center">
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform transform active:scale-95">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 blur-sm animate-shimmer"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 opacity-30"></span>
                  <span className="relative">Enquire Now</span>
                </button>
              </div>
            </Link>

          </div>
        </Vortex>



        <AuroraBackground className="w-[96%] max-w-[1500px] mx-auto mt-[9rem]">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
          </motion.div>
          <br />
          <ServiceCards />

          <br />
          <WobbleCardDemo />
          <ShowCaseCart />

          <br />
          <IndustryCards />
          <FocusCards />
          <BackgroundBeamsWithCollisionDemo />
        </AuroraBackground>
      </div>

    </>

  );
}
