"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSent(true);

        // Clear input fields
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        console.error("Email failed:", error);
      });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-pink-100 text-gray-900 flex flex-col justify-center items-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-center"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-gray-600 text-center mb-10 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I’d love to hear from you! Whether you have a project idea or just want to say hi — send a message below.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Success Message */}
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Message Sent Successfully!</span>
          </motion.div>
        )}

        <div className="mb-6">
          <label className="block text-sm mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2 font-medium text-gray-700">Message</label>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-10 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link href="mailto:hp3032004@gmail.com" target="_blank" className="hover:text-blue-500 transition">
          <Mail size={28} />
        </Link>
        <Link href="https://github.com/Harsh-G-P" target="_blank" className="hover:text-gray-800 transition">
          <Github size={28} />
        </Link>
        {/* 
        <Link href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-blue-600 transition">
          <Linkedin size={28} />
        </Link>
        */}
      </motion.div>
    </motion.div>
  );
}
