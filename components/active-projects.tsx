"use client"

import { motion } from "framer-motion"
import { Users, FileText, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { projects } from "@/data/projects-data"

export function ActiveProjects() {
  // Helper function to generate mock data for demo purposes
  const getProjectData = (index: number) => {
    const dueDates = ["Dec 15", "Jan 20", "Nov 30"]
    const progress = [75, 60, 90]
    const members = [4, 3, 5]
    const files = [12, 8, 15]
    
    return {
      dueDate: dueDates[index % dueDates.length],
      progress: progress[index % progress.length],
      members: members[index % members.length],
      files: files[index % files.length]
    }
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Active Projects</h2>
        <Button variant="ghost" className="rounded-2xl">
          View All
        </Button>
      </div>
      <div className="rounded-3xl border">
        <div className="grid grid-cols-1 divide-y">
          {projects.slice(0, 3).map((project, index) => {
            const projectData = getProjectData(index)
            return (
              <motion.div 
                key={project.name} 
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }} 
                className="p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"} 
                    className="rounded-xl"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs rounded-lg">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs rounded-lg">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{projectData.progress}%</span>
                  </div>
                  <Progress value={projectData.progress} className="h-2 rounded-xl" />
                </div>
                
                <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {projectData.members} members
                    </div>
                    <div className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      {projectData.files} files
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}