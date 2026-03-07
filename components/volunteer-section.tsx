"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useFormSubmit } from "@/hooks/use-form-submit";

const volunteerOptions = [
  { value: "", label: "HOW WOULD YOU LIKE TO HELP?" },
  { value: "door-knocking", label: "Door knocking" },
  { value: "phone-calls", label: "Phone calls" },
  { value: "sign-holding", label: "Sign holding" },
  { value: "yard-sign", label: "Yard Sign" },
  { value: "general-support", label: "General support" },
];

export function VolunteerSection() {
  const { status, handleSubmit, reset } = useFormSubmit();
  const [showAddress, setShowAddress] = useState(false);

  return (
    <section id="volunteer" className="bg-[#F0EFE9] py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#1B3A5C] uppercase mb-4">
            JOIN THE TEAM
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] uppercase">
            VOLUNTEER
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FFFFFF] border border-[#1B3A5C] p-8 flex flex-col items-center text-center"
            >
              <CheckCircle className="w-10 h-10 text-[#1B3A5C] mb-4" strokeWidth={1.5} />
              <p className="font-mono text-xs tracking-[0.3em] text-[#1B3A5C] uppercase mb-2">
                THANK YOU
              </p>
              <p className="font-body text-sm text-[#6B6B6B]">
                Thank you for volunteering. Our campaign team will contact you soon.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 font-mono text-xs tracking-widest text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors uppercase"
              >
                SUBMIT ANOTHER FORM
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-type" value="volunteer" />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                  disabled={status === "submitting"}
                  className="flex-1 bg-[#FFFFFF] border border-[rgba(0,0,0,0.15)] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1B3A5C] transition-colors disabled:opacity-50"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                  disabled={status === "submitting"}
                  className="flex-1 bg-[#FFFFFF] border border-[rgba(0,0,0,0.15)] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1B3A5C] transition-colors disabled:opacity-50"
                  aria-label="Your email"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE"
                  disabled={status === "submitting"}
                  className="flex-1 bg-[#FFFFFF] border border-[rgba(0,0,0,0.15)] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1B3A5C] transition-colors disabled:opacity-50"
                  aria-label="Your phone number"
                />
                <div className="flex-1 relative">
                  <select
                    name="help-type"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-[#FFFFFF] border border-[rgba(0,0,0,0.15)] px-6 py-4 pr-12 font-mono text-xs tracking-widest text-[#1A1A1A] focus:outline-none focus:border-[#1B3A5C] transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    aria-label="How would you like to help"
                    defaultValue=""
                    onChange={(e) => setShowAddress(e.target.value === "yard-sign")}
                  >
                    {volunteerOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={option.value === ""}
                        className="bg-[#FFFFFF] text-[#1A1A1A]"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B] pointer-events-none"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <AnimatePresence>
                {showAddress && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row gap-4"
                  >
                    <input
                      type="text"
                      name="yard_sign_name"
                      placeholder="FULL NAME FOR DELIVERY"
                      disabled={status === "submitting"}
                      className="flex-1 bg-[#FFFFFF] border border-[#1B3A5C] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1A1A1A] transition-colors disabled:opacity-50"
                      aria-label="Full name for yard sign delivery"
                    />
                    <input
                      type="text"
                      name="yard_sign_address"
                      placeholder="STREET ADDRESS"
                      disabled={status === "submitting"}
                      className="flex-1 bg-[#FFFFFF] border border-[#1B3A5C] px-6 py-4 font-mono text-xs tracking-widest text-[#1A1A1A] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1A1A1A] transition-colors disabled:opacity-50"
                      aria-label="Street address for yard sign delivery"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {status === "error" && (
                <p className="font-mono text-xs tracking-widest text-[#C41E3A]">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-[#1A1A1A] text-[#FFFFFF] font-display text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#333333] transition-colors duration-200 uppercase self-start disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "SUBMITTING..." : "SIGN UP TO VOLUNTEER"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
