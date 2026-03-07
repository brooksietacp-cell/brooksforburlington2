"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const timeline = [
  { year: "Enlistment", title: "Air Force Active Duty", text: "Entered active duty service in the United States Air Force, beginning a 24-year career in Special Operations." },
  { year: "Top 2%", title: "Senior Master Sergeant", text: "Promoted to Senior Master Sergeant \u2014 a rank achieved by only 2% of Airmen. Managed teams of up to 219 members and acquisitions up to $250M." },
  { year: "2023", title: "Transition to Public Service", text: "Elected to the Burlington School Committee. Applied military discipline and acquisition expertise to school district governance." },
];

export default function VeteranPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <Header />

      <section className="relative h-[60vh] min-h-[500px]">
        {/* VETERAN HERO IMAGE: Replace /public/images/leadership/veteran-hero.jpg with a military service photo */}
        <Image
          src="/images/leadership/veteran-hero.jpg"
          alt="Military service and honor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#FAFAF7]" />
        <div className="absolute inset-0 flex items-end pb-16 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-[#C41E3A]" strokeWidth={1.5} />
              <p className="font-mono text-xs tracking-[0.3em] text-[#FFFFFF] uppercase">
                THE VETERAN
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FFFFFF] text-balance drop-shadow-lg">
              24 Years of Service
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Timeline */}
      <section className="bg-[#FFFFFF] border-b border-[rgba(0,0,0,0.08)] py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="relative pl-6 border-l-2 border-[#1B3A5C]/30"
              >
                <div className="absolute left-[-5px] top-1 w-2 h-2 bg-[#1B3A5C]" />
                <p className="font-mono text-xs tracking-widest text-[#1B3A5C] uppercase mb-2">{item.year}</p>
                <p className="font-display text-lg font-bold text-[#1A1A1A] uppercase mb-2">{item.title}</p>
                <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-[#FAFAF7] py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              Bronze Star Recipient
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              The Bronze Star Medal is awarded for heroic or meritorious achievement in a combat zone. Receiving this honor four times wasn&apos;t about individual glory &mdash; it was recognition of what a team can accomplish when everyone commits to the mission.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              That same commitment to excellence, that same refusal to accept mediocrity, is what I bring to every challenge. Whether coordinating complex projects or advocating for better schools, the standard remains the same: mission success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              24 Years of Active Duty
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              Over two decades of military service teaches you things that can&apos;t be learned in a classroom. Discipline. Accountability. The ability to make tough decisions under pressure. The understanding that leadership means taking responsibility, not assigning blame.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              My military career included deployments to combat zones, leadership of diverse teams, and management of critical operations where failure was not an option. These experiences forged a leadership style built on integrity, preparation, and decisive action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-6">
              Enhancing District Operations
            </h2>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              School districts are complex organizations with multi-million dollar budgets, hundreds of employees, and the future of our children at stake. They deserve the same level of operational excellence that the military demands.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed">
              I&apos;m bringing proven methodologies for resource allocation, performance measurement, and accountability to our school board. No more waste. No more excuses. Just results-oriented leadership that puts students first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-[rgba(0,0,0,0.1)]"
          >
            <Link
              href="/#bio"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-[#1B3A5C] hover:text-[#1A1A1A] transition-colors duration-200 uppercase"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back to Leadership Profile
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
