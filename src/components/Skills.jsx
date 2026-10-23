
"use client";

import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    number: "01",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Database",
    number: "02",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Better Auth", level: "Familiar" },
    ],
  },
  {
    title: "Tools & Workflow",
    number: "03",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "Vercel", level: "Familiar" },
      { name: "Netlify", level: "Familiar" },
      { name: "Figma", level: "Familiar" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 relative overflow-hidden bg-[#0a0a0f] px-5 py-24 text-white md:px-10 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            What I work with
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build responsive,
            functional, and engaging web experiences.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.05] sm:p-7"
            >
              {/* Card Header */}
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-sm font-bold text-violet-300">
                  {group.number}
                </span>

                <span className="text-xs tracking-widest text-gray-600">
                  SKILLS / {group.number}
                </span>
              </div>

              <h3 className="mb-6 text-xl font-semibold">
                {group.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 border-b border-white/5 pb-3 last:border-0"
                  >
                    <span className="text-sm text-gray-300 transition-colors group-hover:text-white">
                      {skill.name}
                    </span>

                    <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-gray-500">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/[0.08] to-cyan-500/[0.05] p-6 text-center sm:p-8"
        >
          <p className="text-base font-medium text-gray-200 sm:text-lg">
            Always learning. Always building.
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Exploring new technologies and improving my development
            skills through practical projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
