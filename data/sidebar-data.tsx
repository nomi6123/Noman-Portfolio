import type React from "react"
import { Home, FolderOpen, User, Mail } from "lucide-react"

export interface SidebarItem {
  title: string
  icon: React.ReactNode
  isActive?: boolean
  badge?: string
  items?: {
    title: string
    url: string
  }[]
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    icon: <Home />,
   
    isActive: true,
  },
  {
    title: "Projects",
    icon: <FolderOpen />,
    items: [
      { title: "All Projects", url: "#" },
      { title: "Web Development", url: "#" },
      { title: "Mobile Apps", url: "#" },
      { title: "UI/UX Design", url: "#" },
    ],
  },
  {
    title: "About",
    icon: <User />,
    items: [
      { title: "My Story", url: "#" },
      { title: "Skills", url: "#" },
      { title: "Experience", url: "#experience" },
      { title: "Education", url: "#" },
    ],
  },
  {
    title: "Contact",
    icon: <Mail />,
    items: [
      { title: "Get In Touch", url: "#" },
      { title: "Social Media", url: "#" },
      { title: "Resume", url: "/resume.pdf" },
    ],
  },
]
