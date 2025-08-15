"use client"

import { useState } from "react"
import { ChevronDown, X, Search, Copy, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { sidebarItems } from "@/data/sidebar-data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, FileText, Mail } from "lucide-react"

interface SidebarProps {
  sidebarOpen: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function Sidebar({ sidebarOpen, mobileMenuOpen, setMobileMenuOpen }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com")
    // Optional: Add toast notification
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-white border-r border-border text-black">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
            <User className="size-5" />
          </div>
          <div>
            <h2 className="font-semibold">Muhammad Noman</h2>
            <p className="text-xs text-gray-500">Frontend Developer</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="px-3 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-2xl bg-gray-100 pl-9 pr-4 py-2 border-0 focus-visible:ring-1 focus-visible:ring-gray-400"
          />
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <div key={item.title} className="mb-1">
              <button
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
                  item.isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-black",
                )}
                onClick={() => item.items && toggleExpanded(item.title)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {item.badge && (
                  <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs border-gray-300">
                    {item.badge}
                  </Badge>
                )}
                {item.items && (
                  <ChevronDown
                    className={cn("ml-2 h-4 w-4 transition-transform", expandedItems[item.title] ? "rotate-180" : "")}
                  />
                )}
              </button>

              {item.items && expandedItems[item.title] && (
                <div className="mt-1 ml-6 space-y-1 border-l border-gray-300 pl-3">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.url}
                      className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-gray-100 text-gray-600 hover:text-black transition-colors"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t border-gray-300 p-3">
        <div className="space-y-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6 border border-gray-300">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your Name" />
                    <AvatarFallback className="text-xs">YN</AvatarFallback>
                  </Avatar>
                  <span>Muhammad Noman</span>
                </div>
                <Badge
                  variant="outline"
                  className="ml-auto border-green-500/20 bg-green-500/10 text-green-600"
                >
                  Available
                </Badge>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-2xl bg-white border border-gray-200" align="end" side="right">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Muhamamad Noman</p>
                  <p className="text-xs leading-none text-gray-500">Frontend Developer</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-xl cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>About Me</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Download Resume</span>
                  <ExternalLink className="ml-auto h-3 w-3" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer" onClick={handleCopyEmail}>
                <Copy className="mr-2 h-4 w-4" />
                <span>Copy Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer">
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact Me</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <SidebarContent />
      </div>
    </>
  )
}
