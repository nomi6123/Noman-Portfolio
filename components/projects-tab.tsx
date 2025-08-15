"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Filter, Search, X, Briefcase, Code2, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { allProjects } from "@/data/projects-data"
import { cn } from "@/lib/utils"

export function ProjectsTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(allProjects.flatMap((project) => project.technologies))]
    return cats
  }, [])

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    let filtered = allProjects

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.technologies.includes(selectedCategory))
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  // Get search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return []

    const suggestions = new Set<string>()

    allProjects.forEach((project) => {
      // Add project names
      if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        suggestions.add(project.name)
      }

      // Add technologies
      project.technologies.forEach((tech) => {
        if (tech.toLowerCase().includes(searchQuery.toLowerCase())) {
          suggestions.add(tech)
        }
      })

      // Add description keywords
      const words = project.description.toLowerCase().split(" ")
      words.forEach((word) => {
        if (word.includes(searchQuery.toLowerCase()) && word.length > 3) {
          suggestions.add(word)
        }
      })
    })

    return Array.from(suggestions).slice(0, 5)
  }, [searchQuery])

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that push boundaries and create lasting impressions. 
              Each project represents a journey of innovation and excellence.
            </p>
            <div className="flex items-center justify-center mt-8">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 font-semibold px-4 py-2 text-base">
                {filteredProjects.length} Projects Available
              </Badge>
            </div>
          </motion.div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-200 p-6"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search projects, technologies..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full h-12 pl-12 pr-12 bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white rounded-xl text-gray-900 placeholder-gray-500"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-lg hover:bg-gray-100"
                    onClick={clearSearch}
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </Button>
                )}

                {/* Search Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg shadow-gray-100/50">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <div className="flex items-center gap-3">
                          <Search className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-700 font-medium">{suggestion}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "rounded-xl transition-all font-medium",
                      selectedCategory === category
                        ? "bg-gray-900 text-white shadow-md hover:bg-gray-800"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400",
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
                {categories.length > 6 && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    More
                  </Button>
                )}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
              <span className="text-sm text-gray-600 font-medium">
                Showing <span className="text-gray-900 font-semibold">{filteredProjects.length}</span> of <span className="text-gray-900 font-semibold">{allProjects.length}</span> projects
                {selectedCategory !== "All" && <span className="text-blue-600"> in {selectedCategory}</span>}
                {searchQuery && <span className="text-blue-600"> matching "{searchQuery}"</span>}
              </span>
              {(searchQuery || selectedCategory !== "All") && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                    setShowSuggestions(false)
                  }}
                >
                  Clear filters
                </Button>
              )}
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section>
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-200"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No projects found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your search terms or filter criteria to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-6"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setShowSuggestions(false)
                }}
              >
                Clear all filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 relative group">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-700 hover:bg-white border border-gray-200 rounded-xl font-medium shadow-sm">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl text-gray-900 font-bold group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className={cn(
                              "rounded-lg text-xs border cursor-pointer transition-all hover:scale-105",
                              selectedCategory === tech 
                                ? "bg-blue-50 border-blue-300 text-blue-700" 
                                : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400",
                            )}
                            onClick={() => setSelectedCategory(tech)}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-3 pt-2">
                      <Button
                        variant="default"
                        className="flex-1 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-md hover:shadow-lg transition-all"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-xl border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow-md transition-all" 
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}