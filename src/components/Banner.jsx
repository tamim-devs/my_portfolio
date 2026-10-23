
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {


    const handleProjectsClick = () => {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f] px-5 pb-16 pt-32 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Front-End Developer
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Building
            <span className="block">Digital</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Experiences.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Hi, I'm Tamim Hasan. I build responsive, modern web
            experiences using Next.js, React, JavaScript, and
            Tailwind CSS. I love turning ideas into beautiful,
            functional websites.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
           <button
  onClick={handleProjectsClick}
  className="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 font-medium text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/25"
>
  View Projects
</button>

            <a
              href="/A4 - 1.pdf"
              download="Tamim-Hasan-CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-medium text-gray-200 transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs tracking-[0.2em] text-gray-500 uppercase">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "JavaScript", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          {/* Decorative Rings */}
          <div className="absolute h-72 w-72 rounded-full border border-violet-400/10 sm:h-96 sm:w-96" />
          <div className="absolute h-60 w-60 rounded-full border border-cyan-400/10 sm:h-80 sm:w-80" />

          {/* Main Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-gray-500">
                developer.js
              </span>
            </div>

            <div className="space-y-4 font-mono text-sm sm:text-base">
              <p className="text-gray-500">
                <span className="text-violet-400">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-5 text-gray-300">
                name: <span className="text-emerald-300">"Tamim Hasan"</span>,
              </p>

              <p className="pl-5 text-gray-300">
                role: <span className="text-emerald-300">"Developer"</span>,
              </p>

              <p className="pl-5 text-gray-300">
                passion: <span className="text-emerald-300">"Building"</span>,
              </p>

              <p className="pl-5 text-gray-300">
                learning: <span className="text-emerald-300">"Always"</span>
              </p>

              <p className="text-gray-500">{"}"}</p>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">
              <div>
                <p className="text-xs text-gray-500">Current focus</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Web Experiences
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-300">
                {"</>"}
              </div>
            </div>
          </motion.div>

          {/* Floating Label */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-2 top-10 z-20 rounded-xl border border-white/10 bg-[#15151f] px-4 py-3 shadow-xl sm:-right-8"
          >
            <p className="text-xs text-gray-500">Building with</p>
            <p className="mt-1 text-sm font-semibold text-violet-300">
              Next.js + React
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
