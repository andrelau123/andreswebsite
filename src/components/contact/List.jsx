import React from "react";
import { motion } from "framer-motion";

export const List = () => {
  return (
    <section className="grid place-content-center gap-2 px-4 py-24 text-black">
      <FlipLink href="mailto: lautseernandre1@gmail.com">Email</FlipLink>
      <FlipLink href="https://github.com/andrelau123">Github</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/andre-lau-096aa3274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
        Linkedin
      </FlipLink>
      <FlipLink href="https://www.instagram.com/andre_lawlll?igsh=NHZjcHV2ZGc3aWZr&utm_source=qr">
        Instagram
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
