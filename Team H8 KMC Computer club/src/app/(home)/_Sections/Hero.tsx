"use client";

import React from "react";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white antialiased w-full h-[90vh] 2xl:h-[80vh] bg-gradient-to-t from-[#161616] to-black/15"
      
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "url(/texture.svg)" }}
      ></div>
      <div></div>
      <div className="container m-auto">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
         className="flex items-center justify-center flex-col px-6 py-24">
          <div
          className="flex w-28 h-28 relative rounded-full overflow-hidden profile__container bg-white">
            <Image
              priority={true}
              src="/man.png"
              alt="man"
              width={250}
              height={250}
            />
          </div>

          <div className="flex flex-nowrap items-center gap-2 py-1.5 status__container text-xl">
            <h3 className="text-white/60">Hi, I&apos;m Agent 47</h3>
            <span>👋</span>
          </div>

          <div className="max-w-lg content__container">
            <h1 className="font-lexend text-3xl text-center md:text-5xl mt-4 font-bold">
              Merging Code with Creativity
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I design a beautiful and user-friendly websites. I specialize also
              in web development & creating beautiful and functioning website!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 man-i-love-flex-box button__container">
            <Link
              href={"/projects"}
              className="transition-colors duration-500 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white hover:text-gray-900 active:bg-white active:text-gray-900"
            >
              <span className="font-semibold">{"See my work!"}</span>
              <ArrowDownRight className="size-4" />
            </Link>
            <button className="transition-colors duration-500 inline-flex items-center gap-2 border border-white bg-white hover:bg-inherit hover:border-white/15 hover:text-white text-gray-900 px-6 h-12 rounded-xl">
              <span className="font-semibold">{"👋"}</span>
              <span className="font-semibold">{"Let's connect!"}</span>
              <ArrowDownRight className="size-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
