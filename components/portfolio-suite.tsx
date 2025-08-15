"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  Download,
  Sun,
  Moon,
  User,
  FileText,
  ExternalLink,
  Copy,
  Home,
  FolderOpen,
  MessageCircle,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { ProjectsTab } from "@/components/projects-tab";
import { AboutTab } from "@/components/about-tab";
import { ContactTab } from "@/components/contact-tab";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FAQSection from "./FaqsTab";

export function PortfolioSuite() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("noman1137chaya4048@gmail.com");
    // You can add a toast notification here
  };

  const tabIcons = {
    home: Home,
    projects: FolderOpen,
    about: User,
    contact: MessageCircle,
    faqs: FileText, // icon for FAQs
  };

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: MessageCircle },
    { id: "faqs", label: "FAQs", icon: FileText }, // new item
  ];

  const socialLinks = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/nomi6123",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-noman-37b1a7327",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:noman1137chaya4048@gmail.com",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Responsive floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 md:opacity-40"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-60 h-60 md:w-96 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 md:opacity-40"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-56 h-56 md:w-80 md:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 md:opacity-40"
          animate={{
            x: [0, 18, 0],
            y: [0, -18, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 z-50 w-80 h-full bg-white/95 backdrop-blur-lg shadow-2xl md:hidden"
            >
              <div className="flex flex-col  h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      MN
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">
                        Muhammad Noman
                      </h2>
                      <p className="text-sm text-gray-600">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-gray-100 rounded-xl"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left",
                            activeTab === item.id
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                              : "text-gray-700 hover:bg-gray-100"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>

                  {/* Social Links */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                      Connect
                    </h3>
                    <div className="space-y-2">
                      {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className="h-5 w-5" />
                            <span>{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 space-y-3">
                    <a
                      href="resume.pdf"
                      download="Muhammad_Noman_CV.pdf"
                      className="w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-xl bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-sm"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Button>
                    </a>
                    <Button
                      className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a
                        href="mailto:noman1137chaya4048@gmail.com"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get In Touch
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Header with max-width constraint */}
        <header className="sticky top-0 z-10 backdrop-blur-md  bg-white/70 border-b border-white/20 shadow-lg">
          <div className="w-full max-w-[1340px] mx-auto">
            <div className="flex h-16 md:h-20 items-center gap-2 md:gap-3 px-3 md:px-6">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-white/50 rounded-xl shrink-0"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>

              <div className="flex flex-1 items-center justify-between min-w-0">
                <motion.div
                  className="flex items-center gap-2 md:gap-3 min-w-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-fit h-fit p-2 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg shrink-0">
                    Muhammad Noman
                  </div>
                  <div className="hidden xs:block min-w-0">
                    <h1 className="text-base md:text-xl font-bold text-gray-800 truncate">
                      Muhammad Noman
                    </h1>
                    <p className="text-xs md:text-sm text-gray-600 truncate">
                      Full Stack Developer
                    </p>
                  </div>
                </motion.div>

                {/* Header Actions */}
                <div className="flex  items-center gap-1 md:gap-2">
                  {/* Mobile: Only show essential buttons */}
                  <div className="md:hidden flex items-center gap-1">
                    <Button
                      size="sm"
                      className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md text-xs px-3 py-1.5 h-8"
                      asChild
                    >
                      <a href="mailto:noman1137chaya4048@gmail.com">Contact</a>
                    </Button>
                  </div>

                  {/* Desktop: Full header actions */}
                  <div className="hidden  md:flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/80 rounded-2xl p-1 shadow-inner">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="rounded-xl hover:bg-gray-100"
                              asChild
                            >
                              <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Open CV</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="rounded-xl hover:bg-gray-100"
                              asChild
                            >
                              <a
                                href="https://github.com/nomi6123"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>GitHub</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="rounded-xl hover:bg-gray-100"
                              asChild
                            >
                              <a
                                href="https://www.linkedin.com/in/muhammad-noman-37b1a7327"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Linkedin className="h-4 w-4" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>LinkedIn</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="rounded-xl hover:bg-gray-100"
                              asChild
                            >
                              <a href="mailto:noman1137chaya4048@gmail.com">
                                <Mail className="h-4 w-4" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Email</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <Button
                      className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6"
                      asChild
                    >
                      <a href="mailto:noman1137chaya4048@gmail.com">
                        Contact Me
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1  p-3 md:p-6">
          <Tabs
            defaultValue="home"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-7xl mx-auto"
          >
            {/* Navigation Card */}
            <motion.div
              className="mb-4 md:mb-8 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl md:rounded-3xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex  flex-col gap-4 md:gap-6 p-4 md:p-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Tabs */}
                <TabsList className="grid w-full grid-cols-5 bg-gradient-to-r from-white/90 to-black/5 rounded-xl md:rounded-2xl p-1 md:p-1.5  shadow-inner border border-gray-200/50 max-w-full lg:max-w-fit">
                  {Object.entries(tabIcons).map(([value, Icon]) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className="rounded-lg md:rounded-xl py-2 md:py-3 px-2 md:px-4 hover:bg-white/70 text-gray-600 transition-all duration-300 cursor-pointer data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-gray-900 data-[state=active]:scale-105 flex flex-col md:flex-row items-center gap-1 md:gap-2 text-xs md:text-sm font-medium"
                    >
                      <Icon className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="capitalize text-xs md:text-sm">
                        {value}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full lg:w-auto">
                  <a
                    href="resume.pdf"
                    download="Muhammad_Noman_CV.pdf"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto rounded-xl md:rounded-2xl bg-white/90 border-2 border-gray-200/50 hover:bg-white hover:border-gray-300 text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg px-4 md:px-6 py-2 md:py-2.5 text-sm"
                    >
                      <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                      Download CV
                    </Button>
                  </a>
                  <Button
                    className="w-full sm:w-auto rounded-xl md:rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 px-4 md:px-6 py-2 md:py-2.5 text-sm"
                    asChild
                  >
                    <a href="mailto:noman1137chaya4048@gmail.com">
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="backdrop-blur-sm  rounded-2xl md:rounded-3xl border border-white/20 shadow-xl px-1 min-h-[60vh] md:min-h-[70vh]">
                  <TabsContent
                    value="home"
                    className="space-y-4 md:space-y-8 mt-0"
                  >
                    <HeroSection />
                    <FeaturedProjects />
                    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
                      <Skills />
                      <Experience />
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="projects"
                    className="space-y-4 md:space-y-8 mt-0"
                  >
                    <ProjectsTab />
                  </TabsContent>

                  <TabsContent
                    value="about"
                    className="space-y-4 md:space-y-8 mt-0"
                  >
                    <AboutTab />
                  </TabsContent>

                  <TabsContent
                    value="contact"
                    className="space-y-4 md:space-y-8 mt-0"
                  >
                    <ContactTab />
                  </TabsContent>
                  <TabsContent
                    value="faqs"
                    className="space-y-4 md:space-y-8 mt-0"
                  >
                    <FAQSection />
                  </TabsContent>
                </div>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-white/20 shadow-lg z-20">
        <div className="flex justify-center gap-1 px-4 py-2">
          {Object.entries(tabIcons).map(([value, Icon]) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all duration-300 flex-1 max-w-[80px]",
                activeTab === value
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-xs capitalize">{value}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
