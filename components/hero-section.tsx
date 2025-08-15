"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-3xl  p-8 text-black shadow-lg dark:shadow-2xl shadow-gray-900"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl border-0">
              Available for Work
            </Badge>
            <h2 className="text-3xl font-bold">Hi, I'm Muhammad Noman</h2>
            <h3 className="text-xl text-black">
              Frontend Developer & UI/UX Designer
            </h3>
            <p className="max-w-[600px] text-black ">
              Designing and developing clean, high-performance web and desktop
              experiences using modern technologies like Next.js and TypeScript.
              With a background in both creative design and frontend
              development, I turn complex ideas into elegant, user-focused
              digital products.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:noman1137chaya4048@gmail.com">
                <Button className="rounded-2xl cursor-pointer bg-white text-indigo-700 hover:bg-gray-300 shadow-lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </a>

              <a href="resume.pdf" download="Muhammad_Noman_CV.pdf">
                <Button
                  variant="outline"
                  className="rounded-2xl bg-transparent cursor-pointer border-white text-black hover:bg-black/20 border-2"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl bg-black/20 hover:bg-black/30 border-0"
                asChild
              >
                <a
                  href="https://github.com/nomi6123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl bg-black/20 hover:bg-black/30 border-0"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/muhammad-noman-37b1a7327"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72">
              <Image
                src="/hero.jpg"
                alt="Muhammad Noman"
                width={288}
                height={288}
                className="rounded-full object-cover w-full h-full border-4 border-white shadow-xl shadow-gray-900"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
