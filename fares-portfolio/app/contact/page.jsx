"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+216 58 405 469",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fares.abbes@esprit.tn",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Tunis, Tunisia",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 container mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
        <div className="space-y-6">
          {info.map((item, index) => (
            <div key={index} className="flex items-start gap-4 text-white">
              <div className="text-accent text-xl">{item.icon}</div>
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
