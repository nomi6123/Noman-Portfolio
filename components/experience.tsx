"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/experience-data"

export function Experience() {
  return (
     <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Experience</h2>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 transition-all"
              >
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500" />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <Badge variant="outline" className="rounded-full border-teal-300 text-teal-600">
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-neutral-500">{exp.company}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
