"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative flex items-center justify-center -mt-8"
        style={{ width: "420px", height: "420px" }}
      >
        <motion.svg
          className="absolute left-0 top-0 w-full h-full"
          fill="none"
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="210"
            cy="210"
            r="200"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="relative z-10 rounded-full overflow-hidden bg-transparent flex items-center justify-center"
          style={{ width: "340px", height: "340px", padding: "12px" }}
        >
          <Image
            src="/assets/fares.png"
            priority
            quality={100}
            width={316}
            height={316}
            alt="Fares Abbes"
            className="object-container"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
