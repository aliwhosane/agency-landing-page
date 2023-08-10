"use client";

import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  const textAnimation = {
    hidden: {
      scale: 1,
      opacity: 0.5,
      y: 10,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="h-[50vh] p-0 flex items-center justify-center mx-auto  bg-black border-b-2 border-yellow-50">
      <motion.p
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        className="text-slate-200 text-4xl text-bold text-center font-Lexend font-bold"
      >
        The one who tells <br /> is the one we call a Storyteller
      </motion.p>
    </div>
  );
};

export default QuoteSection;
