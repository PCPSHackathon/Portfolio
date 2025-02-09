  import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-[#1a1a1a] rounded-3xl text-sm py-10 text-center">
        <div className="container m-auto">
          <div className="inline-flex relative bg-background rounded-full">
            <Image src={"/mblogo.svg"} alt="mb-logo" height={60} width={60} />
          </div>

          <nav className="flex gap-6 flex-row justify-center mt-6">
            <Link className="hover:text-white/70" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-white/70" href={"/projects"}>
              Projects
            </Link>
            <Link className="hover:text-white/70" href={"/#about"}>
              About
            </Link>
            <Link className="hover:text-white/70" href={"/contact"}>
              Contact
            </Link>
          </nav>

          <div className="flex justify-center gap-6 mt-6">
            <Link
              className="hover:text-white/70"
              href={"https://github.com/ahemtan"}
            >
              <Github />
            </Link>
            <Link
              className="hover:text-white/70"
              href={"https://instagram.com/ahemtann"}
            >
              <Instagram />
            </Link>
            <Link
              className="hover:text-white/70"
              href={"https://www.youtube.com/@ahemtann"}
            >
              <Youtube />
            </Link>
            <Link
              className="hover:text-white/70"
              href={"https://www.linkedin.com/in/ahemtan/"}
            >
              <Linkedin />
            </Link>
          </div>

          <p className="mt-6">
            &copy; {new Date().getFullYear()} <Link className="underline" href={"/"}>Computer Club</Link>, All rights reserved.
          </p>

          <p className="mt-2">
            Mail us at <Link className="underline" href={"mailto:ahemtan1045@gmail"}>✉️ ahemtan1045@gmail</Link>
          </p>

        </div>
    </footer>
  );
};

export default Footer;
