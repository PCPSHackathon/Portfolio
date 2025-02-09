import Image from "next/image";

const sections = [
  {
    title: "Strategy Activation",
    description:
      "We help brands bring their vision to life by crafting actionable strategies tailored for growth and long-term success.",
    img: "/images/P01.png",
    feature: [
      "Market and competitive research",
      "CRM & sales funnel strategy",
      "Brand positioning & messaging",
    ],
  },
  {
    title: "Design Empowerment",
    img: "/images/P02.png",
    description:
      "Our designs go beyond aesthetics, empowering brands with user-centric solutions that leave a lasting impact.",
    feature: [
      "Market and competitive research",
      "CRM & sales funnel strategy",
      "Brand positioning & messaging",
    ],
  },
  {
    title: "Market Adoption",
    img: "/images/P03.png",
    description:
      "We connect the dots between brands and their customers, ensuring smooth adoption and sustained engagement.",
    feature: [
      "Market and competitive research",
      "CRM & sales funnel strategy",
      "Brand positioning & messaging",
    ],
  },
];

const page = () => {
  return (
    <>
      <section className="container mx-auto mt-20 px-8">
        <div className="p-8 bg-foreground rounded-xl">
          <h1 className="font-lexend text-2xl font-semibold">Our Services</h1>
          <p className="py-8 text-3xl lg:4xl xl:text-5xl font-extralight md:max-w-[60%]">
            From proof of concepts and to complex systems of an enterprise-level
            - we&apos;ve got everything covered.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        {sections.map((section, index) => (
          <div
            key={index}
            id="project_content"
            className="flex justify-between items-center flex-wrap mb-8"
          >
            <div className="basis-[100%] lg:basis-[40%] p-4">
              <h2 className="font-lexend text-3xl lg:text-4xl font-light">
                {section.title}
              </h2>

              <h3 className="text-xl font-light py-4 text-[#d1d5d8]">
                {section.description}
              </h3>

              <div className="flex justify-between items-center text-regular font-light lg:font-xl">
                <div>
                  {
                    section.feature.map((feature, index) => (
                      <p key={index}>{`○ ${feature}`}</p>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-xl basis-[100%] lg:basis-[40%] mx-4">
              <Image
                className="object-cover"
                src={section.img}
                alt="Service Banner"
                fill
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
