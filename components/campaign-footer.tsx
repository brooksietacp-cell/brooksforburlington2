"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { UtmFields } from "@/components/utm-fields";

export function CampaignFooter() {
  const { status, handleSubmit, reset } = useFormSubmit();

  return (
    <footer id="contact" className="bg-[#1A1A1A] py-24 lg:py-32 px-6 lg:px-12">
      {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <video
            src="/videos/campaign-message.mp4"
            controls
            className="w-full aspect-video border border-[rgba(255,255,255,0.1)]"
            poster="/images/campaign/hero.jpg"
          />
          <p className="font-mono text-xs tracking-widest text-[#FFFFFF]/50 text-center mt-6 uppercase">
            CAMPAIGN MESSAGE — 0:30
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] text-[#B0D4F1] uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#FFFFFF] uppercase">
              Questions? I&apos;ll Answer Them.
            </h2>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#2A2A2A] border border-[#B0D4F1] p-8 flex flex-col items-center text-center"
            >
              <CheckCircle className="w-10 h-10 text-[#B0D4F1] mb-4" strokeWidth={1.5} />
              <p className="font-mono text-xs tracking-[0.3em] text-[#B0D4F1] uppercase mb-2">
                MESSAGE RECEIVED
              </p>
              <p className="font-body text-sm text-[#FFFFFF]/60">
                Thanks for reaching out. We&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 font-mono text-xs tracking-widest text-[#FFFFFF]/50 hover:text-[#FFFFFF] transition-colors uppercase"
              >
                SEND ANOTHER MESSAGE
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-type" value="contact" />
              <UtmFields />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                  disabled={status === "submitting"}
                  className="flex-1 bg-[#2A2A2A] border border-[rgba(255,255,255,0.15)] px-6 py-4 font-mono text-xs tracking-widest text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#B0D4F1] transition-colors disabled:opacity-50"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                  disabled={status === "submitting"}
                  className="flex-1 bg-[#2A2A2A] border border-[rgba(255,255,255,0.15)] px-6 py-4 font-mono text-xs tracking-widest text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#B0D4F1] transition-colors disabled:opacity-50"
                  aria-label="Your email"
                />
              </div>
              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={4}
                disabled={status === "submitting"}
                className="w-full bg-[#2A2A2A] border border-[rgba(255,255,255,0.15)] px-6 py-4 font-mono text-xs tracking-widest text-[#FFFFFF] placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#B0D4F1] transition-colors resize-none disabled:opacity-50"
                aria-label="Your message"
              />
              {status === "error" && (
                <p className="font-mono text-xs tracking-widest text-[#C41E3A]">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-[#FFFFFF] text-[#1A1A1A] font-display text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#F0EFE9] transition-colors duration-200 uppercase self-start disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Donate Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#B0D4F1] uppercase mb-4">
            SUPPORT THE CAMPAIGN
          </p>
          <a
            href="https://venmo.com/BrooksforBurlington?txn=pay"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#C41E3A] text-[#FFFFFF] font-display text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#A3182F] transition-colors duration-200 uppercase"
          >
            DONATE VIA VENMO
          </a>
          <p className="font-mono text-xs tracking-widest text-[#FFFFFF]/40 mt-4 max-w-md mx-auto">
            Every dollar goes to yard signs, door-knocking, and getting the message out.
          </p>
        </motion.div>

        {/* Legal */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
          <p className="font-mono text-[10px] tracking-widest text-[#FFFFFF]/40 text-center uppercase">
            PAID FOR BY THE COMMITTEE TO ELECT JEREMY BROOKS
          </p>
        </div>
      </div>
    </footer>
  );
}
