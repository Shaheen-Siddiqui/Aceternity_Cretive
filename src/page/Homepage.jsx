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
          className="flex items-center flex-col justify-center  h-full overflow-hidden"
        >
          <div className="mt-[5rem]">


            <h3 className="text-center md:text-3xl lg:text-4xl font-bold text-secondary-blue p-7">
              MICRO SONIC
            </h3>

            <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 
    shadow-xl shadow-white/50 hover:scale-100 transition-transform duration-300
    text-2xl md:text-4xl lg:text-5xl font-bold p-7  ">
              Best Leading <br /> Website Design and Development <br />Agency

            </h3>



            <Link to="/query">
              <div className="flex flex-col sm:flex-row items-center gap-9 mt-9 w-full justify-center">
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white text-blue px-6 py-3 font-semibold">
                  <span className="relative">Book a Free Appointment</span>
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
          <IndustryCards />


          <br />
          <WobbleCardDemo />
          <ShowCaseCart />

          <br />
          <FocusCards />
          <BackgroundBeamsWithCollisionDemo />
        </AuroraBackground>
      </div>

    </>

  );
}
