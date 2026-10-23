
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full px-4 pt-5"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a0f]/80 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-xl md:px-8">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Tamim
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500 hover:text-white"
        >
          Let's talk
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </Link>
      </nav>
    </motion.header>
  );
};

export default Navbar;
