import type React from "react"
import { Code, Palette, Database,  Smartphone, Globe, AudioLinesIcon, PackageCheck,  Camera } from "lucide-react"

export interface Skill {
  name: string
  level: number
  icon: React.ReactNode
}

export const skills: Skill[] = [  
  {
    name: "Frontend Development",
    level: 95,
    icon: <Code className="h-4 w-4" />,
  },
  {
    name: "Next.js",
    level: 90,
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "UI/UX Design",
    level: 82,
    icon: <Palette className="h-4 w-4" />,
  },
  {
    name: "PhotoEditing",
    level: 85,
    icon: <Smartphone className="h-4 w-4" />,
  },
  {
    name: "Ms office Expert",
    level: 95,
    icon: <PackageCheck className="h-4 w-4" />,
  },
  {
    name: "Web Performance",
    level: 85,
    icon: <Globe className="h-4 w-4" />,
  },
   {
    name: "Audio Editing",
    level: 90,
    icon: <AudioLinesIcon className="h-4 w-4" />,
  },
    {
    name: "Canva Master",
    level: 92,
    icon: <Camera  className="h-4 w-4" />,
  },
]
