"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A full-stack MERN e-commerce platform with Stripe integration, user authentication, order tracking, invoice downloads, email notifications, and an admin dashboard featuring real-time sales analytics.",
    image: "/1.png",
    userLink: "https://techsnacc-client.vercel.app",
    adminLink: "https://techsnacc-admin-five.vercel.app",
  },
  {
    id: 4,
    title: "Sketch Battle",
    description:
      "A drawing competition platform where users can create/join sketch battles, vote on art, and track results. Built with MERN stack, cloud storage, secure authentication, and a separate admin panel for battle moderation.",
    image: "/2.png",
    userLink: "https://sketch-battle-frontend.vercel.app",
    adminLink: "https://sketch-battle-admin.vercel.app",
  },
  {
    id: 2,
    title: "Friend-Chat Application",
    description:
      "A real-time chat application built with Next.Js featuring private chats, online status, typing indicators, JWT authentication, and a clean responsive UI.",
    image: "/3.png",
    link: "https://friend-chat-murex.vercel.app/",
  },
  {
    id: 3,
    title: "Retro Windows 95 Portfolio",
    description:
      "A nostalgic Windows 95–themed portfolio built with Next.js and Tailwind CSS, featuring draggable desktop icons, pixel fonts, retro boot animations, and an interactive UI that feels like using an old-school operating system.",
    image: "/4.png",
    link: "https://portfolio-30-gamma.vercel.app",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="h-screen w-full relative overflow-hidden mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 text-center px-4">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold tracking-wide"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Projects
          </span>
        </motion.h1>
        <div className="mt-2 w-20 md:w-24 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full" />
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Scroll → to explore my recent work
        </p>
      </div>

      {/* Projects */}
      <div className="h-full flex items-center overflow-x-scroll snap-x snap-mandatory no-scrollbar">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="min-w-full h-full flex flex-col items-center justify-center snap-center px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative w-[90%] sm:w-[80%] md:w-[70%] max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.2)] cursor-pointer bg-gray-800"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain bg-transparent"
                style={{ padding: "10px" }} // optional padding
              />


              {/* Overlay (blur only on hover) */}
              <div
                className="absolute inset-0 bg-transparent backdrop-blur-sm 
                opacity-100 sm:opacity-0 sm:hover:opacity-100 
  transition flex flex-col items-center justify-center space-y-3"
              >

                <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                  {project.title}
                </h2>

                {project.userLink && project.adminLink ? (
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href={project.userLink}
                      target="_blank"
                      className="px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg font-medium text-sm sm:text-base"
                    >
                      User Demo
                    </Link>
                    <Link
                      href={project.adminLink}
                      target="_blank"
                      className="px-4 sm:px-5 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium text-sm sm:text-base"
                    >
                      Admin Demo
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={project.link ?? "#"}
                    target="_blank"
                    className="px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg font-medium text-sm sm:text-base"
                  >
                    View Live Demo
                  </Link>
                )}
              </div>
            </motion.div>

            <div className="text-center mt-6 sm:mt-8 space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-xl mx-auto">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.15),transparent_70%)] pointer-events-none" />
    </motion.div>
  );
}
