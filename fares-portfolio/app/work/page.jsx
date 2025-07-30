"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "microservices restaurant app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/work1.jpg",
    stack: [
      { name: "Spring boot" },
      { name: "PostgreSQL" },
      { name: "React js" },
    ],
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "full stack",
    title: "Task management app for a Software Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/work2.jpg",
    stack: [
      { name: "Angular" },
      { name: "PostgreSQL" },
      { name: "springboot" },
    ],
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "",
    title: "AI-Powered Web Platform for Football Academies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/work3.jpg",
    stack: [{ name: "Angular" }, { name: "MySQL" }, { name: "springboot" }],
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justifybetween roder-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transperent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul>
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
