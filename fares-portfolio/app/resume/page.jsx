"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiSpringboot,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiGit,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I’m Fares Abbes, a software engineer with strong expertise in building full-stack web applications and AI-integrated platforms. I have hands-on experience developing microservices, secure APIs, and modern frontend interfaces. My current focus is on intelligent task automation and AI-driven project planning tools designed to enhance team productivity. I'm passionate about solving real-world problems and delivering high-quality, scalable solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Fares Abbes" },
    { fieldName: "Phone", fieldValue: "(+216) 58 405 469" },
    { fieldName: "Email", fieldValue: "fares.111abbes@gmail.com" },
    { fieldName: "Location", fieldValue: "Tunis, Tunisia" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, French, English" },
    {
      fieldName: "Experience",
      fieldValue: "2+ years (internships + real projects)",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: " My Experience",
  description:
    "I’ve contributed to multiple real-world projects, including AI-powered web platforms and microservice-based applications. My roles have involved full-stack development, backend architecture, and intelligent automation.",
  items: [
    {
      company: "SharingTechnologies",
      position: "Full Stack Developer",
      duration: "Jul 2025 – Present",
      details: [
        "Developing a task management platform for team leads and developers.",
        "Implemented task assignment, progress tracking, QA testing workflows, and approval pipelines.",
        "Integrated AI to generate full project specifications (cahier des charges) from natural language input.",
        "Enabled automatic task distribution based on developer skillsets using intelligent logic.",
      ],
    },
    {
      company: "Harington (Remote)",
      position: "Intern – .NET Migration Tool",
      duration: "Jul 2024 – Sep 2024",
    },
    {
      company: "Esprit",
      position: "Intern – Restaurant Management System",
      duration: "Jun 2024 – Aug 2024",
    },
  ],
};
const education = {
  icon: "/assets/resume/education.svg",
  title: "Education",
  description:
    "I’ve built a strong foundation in computer science and software engineering through rigorous academic training. My education has been enriched by real-world development experiences and advanced project work.",
  items: [
    {
      institution: "ESPRIT – Private School of Engineering and Technology",
      location: "Tunis, Tunisia",
      degree: "Engineering Degree in Computer Science",
      duration: "2023 – Present",
    },
    {
      institution:
        "IPEIG – Preparatory Institute for Engineering Studies of Gafsa",
      location: "Gafsa, Tunisia",
      degree: "Preparatory Cycle in Technology",
      duration: "2020 – 2023",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "I possess a diverse skill set in software development, including expertise in full-stack web technologies, AI integration, and microservices architecture. My proficiency spans frontend frameworks, backend development, database management, and cloud services.",
  skillsList: [
    {
      icon: <FaHtml5 size={32} />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt size={32} />,
      name: "CSS3",
    },
    {
      icon: <FaJs size={32} />,
      name: "JavaScript",
    },
    {
      icon: <FaReact size={32} />,
      name: "React",
    },
    {
      icon: <SiAngular size={32} />,
      name: "Angular",
    },
    {
      icon: <SiNextdotjs size={32} />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss size={32} />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiSpringboot size={32} />,
      name: "Spring Boot",
    },
    {
      icon: <SiNodedotjs size={32} />,
      name: "Node.js",
    },
    {
      icon: <SiDotnet size={32} />,
      name: ".NET",
    },
    {
      icon: <SiPython size={32} />,
      name: "Python",
    },
    {
      icon: <SiPostgresql size={32} />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMysql size={32} />,
      name: "MySQL",
    },
    {
      icon: <SiGit size={32} />,
      name: "Git",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
                experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
