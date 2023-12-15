"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I study in the Faculty of Economics. Thammasat University Expected to graduate in 2024.{" "}
        <span className="font-medium">Learn quickly</span>,that is a phrase I often hear from people around me when they talk about me. I am a good learner. Have teamwork I have many skills, but {" "}
        <span className="font-medium">I'm not a duck.t</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and modeling Data science. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js,Python and SQL
        </span>
        . I am also soft skills with Communication and Presentation. I am always looking to
        learn new technologies and knowledge. I work well in a team. Learn quickly Solve problems well
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
