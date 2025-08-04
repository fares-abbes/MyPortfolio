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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-wihte/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                praesentium quasi doloremque aliquam, sint exercitationem fugiat
                atque vitae odio ex nobis id debitis, ratione modi fuga nulla.
                Vitae, rem harum.
              </p>
              <div className="">
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
                    <SelectItem value="est">
                      Web Development
                    </SelectItem>
                    <SelectItem value="cst">
                      api 
                    </SelectItem>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message" />
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
