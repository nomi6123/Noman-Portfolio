"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/skills-data";

export function Skills() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-600 text-sm">Technologies I work with</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        {/* Glassmorphism Container */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl p-8 relative overflow-hidden">
          {/* Decorative gradient orb */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl"></div>

          <div className="relative space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.3,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    {/* Enhanced Icon Container */}
                    <motion.div
                      className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-teal-600 group-hover:text-teal-700 transition-colors duration-300 text-lg">
                        {skill.icon}
                      </div>
                    </motion.div>
                    
                    <div>
                      <span className="font-semibold text-gray-800 text-lg group-hover:text-gray-900 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Animated Percentage */}
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      {skill.level}%
                    </span>
                  </motion.div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="relative">
                  {/* Background track */}
                  <div className="h-3 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 shadow-inner overflow-hidden">
                    {/* Animated progress fill */}
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 shadow-sm relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1 + 0.6,
                        ease: "easeOut"
                      }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1 + 1.8,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 h-3 rounded-full bg-gradient-to-r from-teal-500/30 via-blue-500/30 to-purple-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Skill level indicator dots */}
                <div className="flex justify-end mt-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        i < Math.floor(skill.level / 20)
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}