"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ import this

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ get current route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Determine active route based on current pathname
  const active =
    pathname === "/"
      ? "home"
      : pathname.replace("/", ""); // e.g., "/about" -> "about"

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
  scrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
} ${menuOpen ? "pt-5 pb-5" : "pt-4 pb-4"} md:pt-0 md:pb-0`}
>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 relative">
        {/* LEFT — Page Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ name, path }) => {
            const lower = name.toLowerCase();
            const isActive = active === lower;
            return (
              <Link
                key={name}
                href={path}
                className={`font-medium text-[15px] transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white px-3 py-1 rounded-md"
                    : "text-black hover:text-cyan-600"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>

        {/* CENTER — Name */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="absolute left-1/2 -translate-x-1/2 select-none cursor-pointer"
        >
          <div className="flex items-center">
            <span className="bg-black text-white px-3 py-1 rounded-l-md font-semibold tracking-wide">
              Harsh
            </span>
            <span className="bg-white text-black border border-black px-3 py-1 rounded-r-md font-semibold tracking-wide">
              .dev
            </span>
          </div>
        </motion.div>

        {/* RIGHT — Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Harsh-G-P"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-cyan-600 transition"
          >
            <Github size={20} />
          </a>
          {/* 
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-cyan-600 transition"
          >
            <Linkedin size={20} />
          </a>
          */}
          <a
            href="mailto:hp3032004@.com"
            className="text-gray-700 hover:text-cyan-600 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-transparent backdrop-blur-md  w-full"
        >
          <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col items-center gap-5">
            {navItems.map(({ name, path }) => {
              const lower = name.toLowerCase();
              const isActive = active === lower;
              return (
                <Link
                  key={name}
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-[16px] font-medium transition-all ${
                    isActive
                      ? "bg-black text-white px-4 py-1.5 rounded-md"
                      : "text-black hover:text-cyan-600"
                  }`}
                >
                  {name}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="w-10 border-t border-gray-300 my-2" />

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Harsh-G-P"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-cyan-600 transition"
              >
                <Github size={22} />
              </a>
              {/* 
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-cyan-600 transition"
              >
                <Linkedin size={22} />
              </a>
              */}
              <a
                href="mailto:hp3032004@gmail.com"
                className="text-gray-700 hover:text-cyan-600 transition"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
