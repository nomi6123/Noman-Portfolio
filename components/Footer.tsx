"use client"
import React from "react";
import { Linkedin, Github, Globe, Mail, Phone, MapPin } from "lucide-react"; // using lucide instead of react-icons
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/muhammad-noman-37b1a7327",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/nomi6123",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://finexo-pearl.vercel.app/",
      icon: Globe,
      label: "My Work",
    },
  ];

  const skills = [
    "Web Developer",
    "Graphic Designer",
    "Audio & Video Editor",
    "MS Office Expert",
    "Inpage Pro",
  ];

  return (
    <footer className="relative bg-white rounded-2xl mt-3 lg:shadow shadow-gray-400 text-gray-800 border-b border-gray-300">
      <div className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Muhammad Noman
                </h2>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-base leading-relaxed">
                  Passionate about creating digital experiences that blend creativity
                  with functionality. Transforming ideas into reality through code,
                  design, and innovation.
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Info
                </h3>

                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Available for projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Quick response guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Remote & Local work</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[{ number: "50+", label: "Projects" }, { number: "100%", label: "Satisfaction" }].map(
                  (stat, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center"
                    >
                      <div className="text-xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900  transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm">{link.label}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Muhammad Noman. All rights reserved.
              </p>

              
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
