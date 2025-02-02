"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="px-1">
        <div className="section-heading relative">
          <div className="section-title ">Sign up for free today</div>
          <div className="mt-5 section-description ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </div>
          <motion.img
            src={StarImage.src}
            alt="starImage"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="springImage"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="flex gap-2 justify-center  mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span> <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
