import React from "react";
import Hero from "./_Sections/Hero";
import Card from "@/components/ui/Card";
import { Code, Laptop, MonitorSmartphone, Pencil } from "lucide-react";
import CallToAction from "./_Sections/CallToAction";
import About from "./_Sections/About";

const page = () => {
  return (
    <>
      <Hero />

      <section id="services" className="xl:max-w-[70%] h-full mx-auto mb-10">
        <div className="grid justify-between grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 sm:p-8 p-4">
          <Card
            Icon={Laptop}
            title="Design & Creative"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus!"
          />
          <Card
            Icon={Pencil}
            title="UI & UX"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus!"
          />
          <Card
            Icon={MonitorSmartphone}
            title="Web & Mobile App"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus!"
          />
          <Card
            Icon={Code}
            title="Development"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus!"
          />
        </div>
      </section>
      
      <About />

      <CallToAction />


    </>
  );
};

export default page;
