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
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-1"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-3 p-5 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-2xl text-accent">Let's work together</h3>
              <p className="text-white/60 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                praesentium quasi doloremque aliquam, sint exercitationem fugiat
                atque vitae odio ex nobis id debitis, ratione modi fuga nulla.
                Vitae, rem harum.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input type="firstname" placeholder="firstname" />
                <Input type="lastname" placeholder="lastname" />
                <Input type="email" placeholder="email" />
                <Input type="Phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Services</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">api</SelectItem>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[120px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">{info.map((item,index)=>{
              return <li key={index} className="flex items-center gap-6">
              <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                <div className="text-[28px]">{item.icon}</div>
              </div>
              <div className="flex-1">
                <p className="text-white/60">{item.title}</p>
                <h3 className="text-xl">{item.description}</h3>
              </div>
            </li>})}</ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
