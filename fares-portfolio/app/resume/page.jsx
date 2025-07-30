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
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@radix-ui/react-scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useEffect } from "react";

const about = {
  title: "About Me",
  description:
    "I’m Fares Abbes, a final year software engineer with strong expertise in building full-stack web applications and AI-integrated platforms. I have hands-on experience developing microservices, secure APIs, and modern frontend interfaces. My current focus is on intelligent task automation and AI-driven project planning tools designed to enhance team productivity.",
  info: [
    { fieldName: "Name", fieldValue: "Fares Abbes" },
    { fieldName: "Phone", fieldValue: "(+216) 58 405 469" },
    { fieldName: "Email", fieldValue: "fares.111abbes@gmail.com" },
    { fieldName: "Location", fieldValue: "Tunis, Tunisia" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, French, English" },
   
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: " My Experience",
  description:
    "I’ve contributed to multiple real-world projects, including AI-powered web platforms and microservice-based applications.",
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
      company: "university project",
      position: "Intern – Restaurant Management System",
      duration: "Jun 2024 – Aug 2024",
    },
    {
      company: "university project",
      position: "Developer – AI-Powered Web Platform for Football Academies",
      duration: "Jun 2024 – Aug 2024",
    },
    {
      company: "university project",
      position: "Developer – University Club Management System",
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
    "I possess a diverse skill set in software development, including expertise in full-stack web technologies, AI integration, and microservices architecture.",
  skillsList: [
    {
      icon: <FaHtml5 size={40} />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt size={40} />,
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

const Resume = () => {
  // Add this useEffect to prevent scrolling on the body
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-start justify-center pt-6 xl:pt-10 overflow-hidden"
      style={{ maxHeight: "100vh", overflow: "hidden" }}
    >
      <div className="container mx-auto overflow-hidden">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[30px] overflow-hidden"
        >
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto xl:mx-0 gap-4 overflow-hidden">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold ">{experience.title}</h3>
                <p className="max-w-[500px] text-sm text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[320px] w-full rounded">
                  <ScrollAreaViewport className="h-full w-full">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent text-sm">
                            {item.duration}
                          </span>
                          <h3 className="text-base max-w-[260px] min-h-[50px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollAreaViewport>
                  <ScrollAreaScrollbar
                    orientation="vertical"
                    className="!bg-[#44444a] !w-2"
                  >
                    <ScrollAreaThumb className="relative flex-1 rounded-full bg-accent dark:bg-slate-800" />
                  </ScrollAreaScrollbar>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold ">{education.title}</h3>
                <p className="max-w-[500px] text-sm text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[320px] w-full rounded">
                  <ScrollAreaViewport className="h-full w-full">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent text-sm">
                            {item.duration}
                          </span>
                          <h3 className="text-base max-w-[260px] min-h-[50px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollAreaViewport>
                  <ScrollAreaScrollbar
                    orientation="vertical"
                    className="!bg-[#44444a] !w-2"
                  >
                    <ScrollAreaThumb className="relative flex-1 rounded-full bg-accent dark:bg-slate-800" />
                  </ScrollAreaScrollbar>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[15px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="max-w-[500px] text-sm text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2">
                  {skills.skillsList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-lg flex justify-center items-center group">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left "
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[500px] text-sm text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between gap-2 py-1 border-b border-white/10 text-xs"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-white/90 text-right break-all">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
