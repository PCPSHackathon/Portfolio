import { LucideProps } from "lucide-react";
import React from "react";

interface CardProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => {
  return (
    <div className="min-h-[280px] max-h-[300px] hover:text-white hover:border-white bg-[#1A1A1A] border border-white/20 rounded-lg p-2 text-[#888888] px-4 flex flex-col justify-between hover:scale-105 transition-all duration-500 hover:lg:translate-y-2 hover:lg:translate-x-4">
      <div className="mt-auto">
        <Icon size={32} />
        <h3 className="text-xl font-lexend font-semibold py-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
