"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "motion/react";
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="px-2 ">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="quantumLogo"
              className="logo-ticker-img"
            />
            <Image src={echoLogo} alt="echoLogo" className="logo-ticker-img" />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticker-img"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-img"
            />
            <Image src={apexLogo} alt="apexLogo" className="logo-ticker-img" />

            {/* Second set of logos for animation */}

            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="quantumLogo"
              className="logo-ticker-img"
            />
            <Image src={echoLogo} alt="echoLogo" className="logo-ticker-img" />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticker-img"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-img"
            />
            <Image src={apexLogo} alt="apexLogo" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
