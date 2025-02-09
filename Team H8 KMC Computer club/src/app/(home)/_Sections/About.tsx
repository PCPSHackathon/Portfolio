import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto p-8">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="relative object-center text-center">
            <Image src="/about.svg" alt="about" width={500} height={500} />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-white border-b-2 border-white uppercase">
              About me
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-foreground">Myself</span>
            </h2>
            <p className="text-[#888]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>

            <h2 className="py-2 text-xl font-lexend">Interest</h2>
            <div className="flex gap-2">
              <p>Programming</p>
              <p>Hiking</p>
              <p>Designing</p>
            </div>

            <h2 className="py-2 text-xl font-lexend">Skills</h2>
            <div className="flex gap-2">
              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>After Effects</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
