
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "8801818566361";
  const email = "coderhero1@gmail.com";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold sm:text-5xl"
        >
          Let's Work <span className="text-violet-400">Together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-xl text-gray-400"
        >
          Have a project in mind or want to discuss an opportunity?
          Feel free to contact me through WhatsApp or email.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-semibold text-black transition hover:bg-green-400 sm:w-auto"
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </a>

      
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=coderhero1@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full items-center justify-center gap-3 rounded-xl border border-violet-500/50 bg-violet-500/10 px-7 py-4 font-semibold transition hover:bg-violet-500/20 sm:w-auto"
>
  <FaEnvelope size={21} />
  Send Me an Email
</a>

        </motion.div>

        <p className="mt-8 text-sm text-gray-500">
          {email}
        </p>
      </div>
    </section>
  );
};

export default Contact;
