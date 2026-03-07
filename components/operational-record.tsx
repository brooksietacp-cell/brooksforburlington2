"use client";

import { motion } from "framer-motion";

const cards = [
  {
    overline: "INITIAL MANDATE [2023]",
    title: "Elected to Committee",
    text: "Honored to be elected in 2023 and privileged to serve the Burlington School Committee. Immediately began addressing needed policy implementation and governance improvements. Bringing a fresh perspective and 25 years of acquisition experience to the board.",
  },
  {
    overline: "INFRASTRUCTURE [2024–2025]",
    title: "Oversight & Execution",
    text: "Delivered critical repairs to Memorial School (lighting/fencing), managed the MSMS field renovation to come in under budget, and championed the Fox Hill renovation.",
  },
  {
    overline: "FUTURE OPERATIONS [2026+]",
    title: "Innovation & STEM",
    text: "Launching new AR/VR curriculum initiatives and maintaining strict fiscal oversight to protect tax dollars while enhancing education.",
  },
];

export function OperationalRecord() {
  return (
    <section id="record" className="bg-[#FAFAF7] py-24 lg:py-32 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#1A1A1A]">
          OPERATIONAL RECORD: 2023–2026
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.overline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] p-8 flex flex-col hover:border-[rgba(0,0,0,0.2)] hover:shadow-md transition-all duration-300"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-[#1B3A5C] uppercase mb-4">
              {card.overline}
            </p>
            <h3 className="font-display text-2xl font-bold text-[#1A1A1A] uppercase mb-3">
              {card.title}
            </h3>
            <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
