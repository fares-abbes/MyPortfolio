"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "I build modern, scalable web apps with React, Angular, Spring Boot, and Symfony – tailored to your business needs.",
    href: "#",
  },
  {
    num: "02",
    title: "Web Scraping (Beautiful Soup & Selenium)",
    description:
      "Extracting data from websites using Python's Beautiful Soup and Selenium for automation.",
    href: "#",
  },

  {
    num: "03",
    title: "Backend API Development",
    description:
      "I create secure, high-performance RESTful APIs with Spring Boot and Flask to support your frontend or mobile applications.",
    href: "#",
  },
  {
    num: "04",
    title: "AI & Intelligent Systems",
    description:
      "I integrate AI-powered tools like chatbots and prediction models using Python, Flask, and PyTorch to boost engagement and decision-making.",
    href: "#",
  },
  {
    num: "05",
    title: "Microservices Architecture",
    description:
      "I design and develop efficient backend systems using Spring Boot, REST APIs, and Eureka for scalable service orchestration.",
    href: "#",
  },
];

const Services = () => {
  return (
    <div>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent trasnition-all duration-500 flex justify-center items-center hover:rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
