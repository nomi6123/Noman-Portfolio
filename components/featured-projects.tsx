"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { featuredProjects } from "@/data/projects-data"

export function FeaturedProjects() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Featured Projects</h2>
        <Button variant="ghost" className="rounded-2xl text-muted-foreground hover:text-foreground">
          View All Projects
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <motion.div key={project.name} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
            <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300 bg-card shadow-sm dark:shadow-lg">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl border-0 shadow-lg">
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="rounded-xl text-xs border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="secondary" className="flex-1 rounded-2xl bg-secondary hover:bg-secondary/80" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-2xl border-border bg-transparent" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
