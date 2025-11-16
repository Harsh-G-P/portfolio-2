"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GIF() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="colorful-glow" // 👈 custom colorful shadow class
      >
        <Image
          src="/2.gif"
          alt="Animated Brain"
          width={730}
          height={300}
          className="rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
