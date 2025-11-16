"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main
      className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen overflow-hidden px-6 sm:px-10 lg:px-20 pt-10 sm:pt-16"
    >
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-cyan-300/20 blur-3xl rounded-full top-[-100px] left-[-140px] -z-10"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-300/20 blur-3xl rounded-full bottom-[-140px] right-[-100px] -z-10"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Left Side — Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:w-1/2 flex justify-center lg:justify-end mb-14 lg:mb-0"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 tilt">
          <Image
            src="/h1.png"
            alt="Harsh Prajapati"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </motion.div>

      {/* Right Side — Text and Buttons */}
      <motion.div
        className="relative z-10 text-center lg:text-left select-none lg:w-1/2 p-6 sm:p-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="text-cyan-600 font-semibold tracking-wide mb-3 text-sm sm:text-base">
          👋 Welcome to my world
        </p>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 leading-tight"
        >
          I’m Harsh Prajapati
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mt-4 max-w-xl mx-auto lg:mx-0"
        >
          A <span className="text-cyan-600 font-semibold">Full Stack Developer</span> building scalable, performant, and visually elegant web apps using{" "}
          <span className="text-blue-600 font-semibold">Next.js, TypeScript,</span> and modern UI frameworks.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center lg:justify-start gap-6 mt-8"
        >
          <a href="https://github.com/Harsh-G-P" target="_blank" className="hover:text-cyan-600 transition">
            <Github size={26} />
          </a>

          <a href="mailto:hp3032004@gmail.com" className="hover:text-cyan-600 transition">
            <Mail size={26} />
          </a>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/projects"
            className="px-8 py-3 bg-cyan-600 font-semibold text-white rounded-xl shadow-md hover:bg-cyan-500 transition-all text-center"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="px-8 py-3 border border-gray-400 text-gray-700 rounded-xl hover:border-cyan-600 hover:text-cyan-600 transition-all text-center"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
