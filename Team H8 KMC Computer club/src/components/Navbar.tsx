"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Menu, X } from "lucide-react";

export const links = [
  {
    lable: "Home",
    href: "/",
  },
  {
    lable: "Projects",
    href: "/projects",
  },
  {
    lable: "About",
    href: "/#about",
  },
  {
    lable: "Contact",
    href: "/contact",
  },
];


const Navbar = () => {

  // NOTE: Open is for mobile navigation toggle
  // NOTE: Hidden is for hiding navigation while scrolling
  
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    setOpen(false);
  }, [pathname])

  useMotionValueEvent(scrollY, "change", (curVal) => {
    const perVal = scrollY.getPrevious();
    if (perVal && !open) {
      if (curVal > perVal) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
  });

  const isActive = (linkHref: string) => {
    if (pathname === linkHref) return true;

    if (linkHref === "/blog" && pathname.startsWith("/blog")) {
      return true;
    }

    return false;
  };

  return (
    <motion.div
      variants={{
        visible: { top: 0 },
        hidden: { top: "-100%" },
      }}
      animate={hidden ? "visible" : "hidden"}
      transition={{ ease: "easeInOut" }}
      className="header px-8 h-20 w-full z-50 fixed top-0 left-0 transition-all duration-500 backdrop-blur-sm"
    >
      <div className="header__container container m-auto h-16 mt-2 flex items-center justify-between">
        <Link href={"/"} className="text-4xl font-light text-white z-50">
          <div className="h-11 overflow-hidden group">
            <h1 className="cursor-pointer transition-all group-hover:mt-[-44px]">
              A-47
            </h1>
            <h1 className="cursor-pointer transition-all">A-47</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="text-gray-500 hidden md:block">
          <div className="flex gap-4 text-xl">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`group white transition-all duration-300 ease-in-out hover:text-white ${
                  isActive(link.href) ? "text-white" : ""
                }`}
                href={link.href}
              >
                <span
                  className={`bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${
                    isActive(link.href) ? "bg-[length:100%_2px]" : ""
                  }`}
                >
                  {link.lable}
                </span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.nav
          variants={{
            visible: { left: 0 },
            hidden: { left: "-200%" },
          }}
          animate={open ? "visible" : "hidden"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-screen bg-background fixed top-0 transition-all duration-500 md:hidden"
        >
          <div className="h-full flex flex-col items-center justify-center gap-10 text-4xl text-gray-500">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`group white transition-all duration-300 ease-in-out hover:text-white ${
                  isActive(link.href) ? "text-white" : ""
                }`}
                href={link.href}
              >
                <motion.span
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  animate={open ? "visible" : "hidden"}
                  transition={{ delay: 1, duration: 0.3, ease: "easeInOut" }}
                  className={`bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${
                    isActive(link.href) ? "bg-[length:100%_2px]" : ""
                  }`}
                >
                  {link.lable}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.nav>

        <div className="bg-gray-200 text-background p-4 rounded-full font-light hidden md:block">
          <div className="h-6 overflow-hidden group">
            <h1 className="cursor-pointer transition-all group-hover:-mt-6">
              Available for works
            </h1>
            <h1 className="cursor-pointer transition-all text-center">
              Let&apos;s work
            </h1>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={() => setOpen(!open)} className="block md:hidden z-50">
          {open ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
