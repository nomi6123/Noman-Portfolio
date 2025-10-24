"use client"

import { motion } from "framer-motion"
import { Download, Award, Users, Coffee } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { skills } from "@/data/skills-data"
import { experience } from "@/data/experience-data"

export function AboutTab() {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="h-6 w-6" />, value: "30+", label: "Happy Clients" },
    { icon: <Coffee className="h-6 w-6" />, value: "1000+", label: "Cups of Coffee" },
  ]

  const educationData = [
    {
      degree: "Training in Website Development",
      university: "Athena Sols",
      location: "Bhakkar Punjab, Pakistan",
      description: "Advanced studies in Website development, Graphic Designing, Video & Audio Editing.",
    },
    {
      degree: "Intermediate F.Sc",
      university: "Govt. Post Graduate College",
      location: "Bhakkar Punjab, Pakistan",
      description: "Foundation in Physics, Chemistry & Biology.",
    },
    {
      degree: "Certified In Computer Operator",
      university: "Vocational Training Institute",
      location: "Bhakkar Punjab, Pakistan",
      description: "Specialization in UI/UX design, Ms Office, Inpage & Typing Skills.",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl bg-[#00BC9C] p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
              <p className="max-w-[600px] text-white/90">
                Learn more about my journey, skills, and what drives my passion for development.
              </p>
            </div>
            <a href="resume.pdf" download="Muhammad_Noman_CV.pdf">
              <Button className="rounded-full bg-white hover:bg-black hover:text-white duration-300 cursor-pointer text-teal-700 hover:scale-105 hover:shadow-lg transition-all">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="rounded-2xl bg-white border border-neutral-200 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-teal-600">{stat.icon}</div>
                <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* My Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-neutral-900">My Story</CardTitle>
            <CardDescription className="text-neutral-500">How I became a developer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-neutral-700">
            <p>
              Hi, I’m Muhammad Noman — a passionate front-end developer specializing in creating responsive and user-friendly web experiences
              with React, Next.js, Tailwind CSS, and Webflow.
            </p>
            <p>
              My skill set also extends to creative media production, including Canva design, audio editing, CapCut video editing, and photo editing.
              I’m experienced in building sleek, high-performance websites, editing engaging videos, designing eye-catching visuals, and enhancing
              content for maximum impact.
            </p>
            <p>
              Skills: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Webflow, Canva, CapCut, Audio Editing, Photo Editing.
            </p>
            <p>
              Whether it’s coding an interactive interface or designing media content, I enjoy bringing ideas to life that inspire and connect with people.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Technical Skills */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">Technical Skills</h2>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-neutral-500">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-[10px] rounded-full bg-gray-300 [&>div]:bg-[#00BC9C]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">Experience</h2>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-teal-200 hover:border-teal-400 transition-all"
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

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">Education</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6"
            >
              <span className="block text-xs uppercase text-teal-500 mb-2 font-medium">
                {index === 0 ? "Professional Training" : index === 1 ? "Higher Education" : "Certification"}
              </span>
              <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
              <p className="text-sm font-medium text-neutral-700">{edu.university}</p>
              <p className="text-xs text-neutral-500">{edu.location}</p>
              <p className="mt-3 text-sm text-neutral-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
