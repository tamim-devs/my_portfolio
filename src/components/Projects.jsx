
"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
  number: "01",
  title: "E-Commerce",
  category: "Full-Stack E-Commerce Platform",
  description:
    "A full-stack e-commerce platform featuring dynamic product listings, search and pagination, product management, secure authentication, shopping cart, and order management using Next.js, Express.js, and MongoDB.",
  technologies: [
    "Next.js",
    "Express.js",
    "MongoDB",
    "Better Auth",
    "Tailwind CSS",
  ],
  live: "https://e-commerce-frontend-alpha-lyart.vercel.app/",
  theme: "from-pink-500/20 via-rose-500/10 to-transparent",
  accent: "text-pink-300",
  symbol: "🛍",
},{
  number: "02",
  title: "NEXPLAY",
  category: "Online Gaming Platform",
  description:
    "A responsive browser gaming platform powered by the GameArter Catalog API, featuring dynamic game listings, featured games, category filters, search, pagination, Firebase Authentication, game details, and dark mode.",
  technologies: [
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Firebase",
    "GameArter API",
  ],
  live: "https://next-level-game-pro.vercel.app/",
  theme: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  accent: "text-fuchsia-300",
  symbol: "🎮",
},
  {
    number: "03",
    title: "Pirates",
    category: "Gaming Website",
    description:
      "A gaming website built with Next.js and Tailwind CSS, featuring modern UI design and Better Auth authentication.",
    technologies: ["Next.js", "Tailwind CSS", "Better Auth"],
    live: "https://pirate-game-svrc.vercel.app/",
    theme: "from-red-500/20 via-orange-500/10 to-transparent",
    accent: "text-red-400",
    symbol: "⚔",
  },
  {
    number: "04",
    title: "MAC",
    category: "Creative Web Experience",
    description:
      "A creative React.js project inspired by JavaScript Mastery, using GSAP to explore interactive animations and modern web experiences.",
    technologies: ["React.js", "GSAP", "JavaScript"],
    live: "https://mac-os-portfolio-delta.vercel.app/",
    theme: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "text-cyan-300",
    symbol: "⌘",
  },
  {
    number: "05",
    title: "Doctora",
    category: "Healthcare Platform",
    description:
      "A doctor portal developed with Next.js and Node.js, using Better Auth for authentication and MongoDB for data management.",
    technologies: ["Next.js", "Node.js", "Better Auth", "MongoDB"],
    live: "https://vercel-frontend-seven-omega.vercel.app/",
    theme: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-300",
    symbol: "+",
  },

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-hidden bg-[#0a0a0f] px-5 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            My Work
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Featured{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                A collection of projects where I turn ideas into
                interactive digital experiences using modern web
                technologies.
              </p>
            </div>

            <a
              href="https://github.com/tamim-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm text-gray-300 transition-colors hover:text-violet-400"
            >
              Explore GitHub <span>↗</span>
            </a>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-violet-400/30"
            >
              {/* Project Preview */}
              <div
                className={`relative flex aspect-[16/11] items-center justify-center overflow-hidden bg-gradient-to-br ${project.theme}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_65%)]" />

                <div className="absolute inset-4 rounded-2xl border border-white/[0.08]" />

                <div className="absolute left-7 top-7 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-black/20 text-6xl backdrop-blur-xl ${project.accent}`}
                >
                  {project.symbol}
                </motion.div>

                <span className="absolute bottom-7 left-7 text-xs font-medium tracking-wider text-gray-300 uppercase">
                  {project.category}
                </span>

                <span className="absolute bottom-6 right-7 text-3xl font-bold text-white/20">
                  {project.number}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-violet-300">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-28 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-violet-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Project Link */}
                <div className="mt-7 border-t border-white/10 pt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/[0.05] px-4 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500"
                  >
                    <span>View Live Project</span>
                    <span className="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default Projects;
