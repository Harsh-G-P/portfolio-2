"use client";

import GIF from "@/component/GIF";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);

  const bioInView = useInView(bioRef, { amount: 0.5 });
  const skillsInView = useInView(skillsRef, { amount: 0.5 });
  const expInView = useInView(expRef, { amount: 0.5 });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full lg:flex">
        {/* Left Text Container */}
        <div className="p-12 sm:p-8 md:p-15 lg:p-20 xl:p-48 flex flex-col gap-40 lg:w-2/3 overflow-y-auto">

          {/* BIOGRAPHY */}
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: bioInView ? 1 : 0, y: bioInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10 justify-center"
          >
            <h1 className="font-bold text-3xl tracking-wide">BIOGRAPHY</h1>
            <p className="text-lg leading-relaxed text-gray-800">
              I’m a full-stack developer currently working with Next.js and TypeScript,
              building modern, fast, and scalable web applications. Before this, I worked
              extensively with the MERN stack, creating real-time apps, secure authentication
              systems, and full e-commerce solutions. I love building clean UIs, smooth
              experiences, and meaningful products.
            </p>
            <span className="italic text-gray-600">
              Breaking limits. Learning every day.
            </span>


            {/* Mouse scroll hint */}
            <div className="flex justify-start mt-6">
              <div className="relative w-[28px] h-[46px] border-2 border-gray-400 rounded-full flex justify-center items-start overflow-hidden">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-7 text-gray-900 absolute top-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v10m0 0l-3-3m3 3l3-3" />
                </motion.svg>
              </div>
            </div>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10 justify-center"
          >
            <h1 className="font-bold text-3xl tracking-wide">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "JavaScript",
                "Framer Motion",
                "Socket.io",
                "Stripe API",
                "JWT Authentication",
                "REST APIs",
                "Cloudinary",
                "GitHub",
                "Vercel"
              ]
                .map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="rounded p-2 text-sm font-medium cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
            </div>

            <div className="flex justify-start mt-6">
              <div className="relative w-[28px] h-[46px] border-2 border-gray-400 rounded-full flex justify-center items-start overflow-hidden">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-7 text-gray-900 absolute top-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v10m0 0l-3-3m3 3l3-3" />
                </motion.svg>
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            ref={expRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: expInView ? 1 : 0, y: expInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10 justify-center"
          >
            <h1 className="font-bold text-3xl tracking-wide">EXPERIENCE</h1>
            <div>
              {[
                {
                  role: "Started Full Stack Development Journey",
                  tech: "HTML, CSS, JavaScript",
                  year: "2022",
                  company: "Self-Learning"
                },
                {
                  role: "Built Multiple Projects Using MERN Stack",
                  tech: "MongoDB, Express, React, Node.js",
                  year: "2023 — 2024",
                  company: "Personal Projects"
                },
                {
                  role: "Building Projects with Next.js & TypeScript",
                  tech: "Next.js, TypeScript, Tailwind CSS",
                  year: "2025 — Present",
                  company: "Personal Projects"
                }
              ]
                .map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    viewport={{ once: false }}
                    className="flex justify-between h-48"
                  >
                    {i % 2 === 0 ? (
                      <div className="w-1/3">
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-sm">
                          {item.role}
                        </div>
                        <div className="p-3 text-sm italic text-gray-600">{item.tech}</div>
                        <div className="p-3 text-red-400 text-sm font-semibold">{item.year}</div>
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                          {item.company}
                        </div>
                      </div>
                    ) : (
                      <div className="w-1/3"></div>
                    )}

                    <div className="w-1/6 flex justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <motion.div
                          className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 -translate-x-1/2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      </div>
                    </div>

                    {i % 2 === 1 ? (
                      <div className="w-1/3">
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-sm">
                          {item.role}
                        </div>
                        <div className="p-3 text-sm italic text-gray-600">{item.tech}</div>
                        <div className="p-3 text-red-400 text-sm font-semibold">{item.year}</div>
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                          {item.company}
                        </div>
                      </div>
                    ) : (
                      <div className="w-1/3"></div>
                    )}
                  </motion.div>
                ))}
            </div>

          </motion.div>
        </div>

        {/* Right GIF Container */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 z-30">
          <GIF />
        </div>
      </div>
    </motion.div>
  );
}
