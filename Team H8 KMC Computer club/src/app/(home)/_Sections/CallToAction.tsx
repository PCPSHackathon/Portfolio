import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-10 p-4">
      <div className="relative container m-auto overflow-hidden text-center h-[40vh] sm:h-[30vh] flex flex-col justify-center rounded-3xl">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "url(/texture.svg)" }}
      ></div>
        <h2 className="text-3xl md:text-4xl p-2 font-lexend font-semibold">
          {"Let's Disscuss about your"} <span>project</span>
        </h2>
        <p className="md:text-xl">
          {"Want to get in touch? We'd love to hear from you!"}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 man-i-love-flex-box button__container">
          <Link href={"mailto:ahemtan1045@gmail.com"} className="group transition-colors duration-500 inline-flex items-center gap-2 border border-white bg-white hover:bg-inherit hover:border-white/15 hover:text-white text-gray-900 px-6 h-12 rounded-xl">
            <span className="font-semibold">{"👋"}</span>
            <span className="font-semibold">{"Let's Work!"}</span>
            <ArrowDownRight className="size-4 transition-all duration-500 group-hover:rotate-[360deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
