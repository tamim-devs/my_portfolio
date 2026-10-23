
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0f] px-5 py-12 text-white md:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Beyond<span className="text-violet-400">.</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Building modern digital experiences with clean code,
              thoughtful design, and meaningful interactions.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Front-End Developer · Next.js · React
            </p>
          </motion.div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/tamim-devs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/tamim-devs/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=coderhero1@gmail.com"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

    
      </div>
    </footer>
  );
};

export default Footer;
