"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export function WhereToVote() {
  return (
    <section id="vote" className="bg-[#FAFAF7] py-24 px-6">
      {/* Election Day Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#C41E3A] py-6 px-4 mb-16 -mx-6 text-center"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#FFFFFF]/80 uppercase mb-1">
          Election Day
        </p>
        <p className="font-display text-3xl md:text-4xl font-bold tracking-widest text-[#FFFFFF] uppercase">
          April 11
        </p>
        <p className="font-mono text-xs tracking-[0.3em] text-[#FFFFFF]/80 uppercase mt-1">
          Polls Open 8 AM to 8 PM
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#1B3A5C] uppercase mb-4">
            POLLING LOCATION
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] uppercase mb-6">
            Where to Vote
          </h2>
          <p className="font-body text-base text-[#6B6B6B] max-w-xl mx-auto">
            Burlington voters can cast their ballot at the location below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold tracking-wide text-[#1A1A1A] uppercase mb-4">
                Burlington High School Gym
              </h3>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#1B3A5C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-sm text-[#1A1A1A]">123 Cambridge St</p>
                  <p className="font-body text-sm text-[#6B6B6B]">Burlington, MA 01803</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1B3A5C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-xs tracking-widest text-[#6B6B6B] uppercase mb-1">
                    Voting Hours
                  </p>
                  <p className="font-body text-sm text-[#1A1A1A]">8:00 AM to 8:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=42.4965625625214,-71.19896343026285"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FFFFFF] font-display text-xs font-bold tracking-widest px-6 py-4 hover:bg-[#333333] transition-colors duration-200 uppercase self-start"
            >
              Get Directions
              <ExternalLink className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="relative w-full h-0 pb-[56.25%] md:pb-[40%] bg-[#F0EFE9] border border-[rgba(0,0,0,0.08)] overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=42.4965625625214,-71.19896343026285&z=17&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Burlington High School Gym location map"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-widest text-[#6B6B6B] text-center"
        >
          Gym entrance located at the rear athletic entrance of Burlington High School.
        </motion.p>
      </div>
    </section>
  );
}
