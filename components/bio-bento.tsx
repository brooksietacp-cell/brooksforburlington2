"use client";

import { motion } from "framer-motion";
import { Heart, Star, Server } from "lucide-react";
import Link from "next/link";

const boxes = [
  {
    icon: Heart,
    label: "THE DAD",
    text: "Dad to Lillian & Madelyn. Deeply invested in the future of our classrooms because my children sit in them every day.",
    href: "/dad",
  },
  {
    icon: Star,
    label: "THE VETERAN",
    text: "4-time Bronze Star recipient. 20+ years of active duty and service. Bringing military-grade discipline to district operations.",
    href: "/veteran",
  },
  {
    icon: Server,
    label: "THE EXECUTIVE",
    text: "Senior Product Manager. Expertise in managing multi-million dollar budgets and complex technical projects.",
    href: "/executive",
  },
];

export function BioBento() {
  return (
    <section id="bio" className="bg-[#F0EFE9] py-24 lg:py-32 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#1A1A1A]">
          LEADERSHIP PROFILE
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
        {boxes.map((box, i) => (
          <motion.div
            key={box.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <Link
              href={box.href}
              className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] p-8 flex flex-col h-full cursor-pointer transition-all duration-300 ease-out hover:border-[#1B3A5C] hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/20"
            >
              <box.icon className="w-6 h-6 text-[#1B3A5C] mb-6" strokeWidth={1.5} />
              <p className="font-mono text-xs tracking-[0.3em] text-[#1B3A5C] uppercase mb-3">
                {box.label}
              </p>
              <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">
                {box.text}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
