
"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-[#0a0a0f] px-5 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Passionate about technology, creative design, and
            building meaningful digital experiences.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">
              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl font-bold shadow-lg shadow-violet-500/20">
                TH
              </div>

              <h3 className="text-2xl font-bold">
                Md Tamim Hasan
              </h3>

              <p className="mt-2 text-violet-300">
                Front-End Developer
              </p>

              <p className="mt-6 text-sm leading-8 text-gray-400 sm:text-base">
                I am a web developer who enjoys creating modern,
                responsive, and user-friendly websites. I focus on
                clean code, intuitive interfaces, and smooth
                interactions that make websites enjoyable to use.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Creative Thinking", "Problem Solving", "Continuous Learning"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 sm:text-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border border-violet-500/20" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="mb-4 text-sm font-medium tracking-widest text-violet-400 uppercase">
              My Journey
            </p>

            <h3 className="text-3xl leading-snug font-bold sm:text-4xl">
              Turning ideas into{" "}
              <span className="text-violet-400">
                reality through code.
              </span>
            </h3>

            <p className="mt-6 text-sm leading-8 text-gray-400 sm:text-base">
              My journey in web development has helped me build
              a foundation in modern frontend technologies. I enjoy
              transforming ideas into responsive web interfaces
              that work smoothly across devices.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-400 sm:text-base">
              I continue to improve my skills by building projects,
              exploring new tools, and learning better ways to
              create accessible and engaging web experiences.
            </p>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold text-gray-200">
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "MongoDB",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-violet-400/15 bg-violet-500/5 px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
