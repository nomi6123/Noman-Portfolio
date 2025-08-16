"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, User, MessageSquare, Loader2, Clock, CheckCircle, LogOut, Aperture } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { ChangeEvent, FormEvent } from "react"

export function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isSending, setIsSending] = useState(false)

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "noman1137chaya4048@gmail.com",
      href: "mailto:noman1137chaya4048@gmail.com",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: "Phone", 
      value: "+923328664048", 
      href: "tel:+923328664048",
      color: "bg-green-50 text-green-600 border-green-100"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      label: "Location", 
      value: "Post Office Sial, Wadhy Wali District Bhakkar", 
      href: "#",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
  ]

  const socialLinks = [
    { 
      icon: <Github className="h-4 w-4" />, 
      label: "GitHub", 
      href: "https://github.com/nomi6123",
      color: "hover:bg-gray-600 hover:border-gray-600"
    },
    { 
      icon: <Linkedin className="h-4 w-4" />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/muhammad-noman-37b1a7327",
      color: "hover:bg-blue-600 hover:border-blue-600"
    },
    { 
      icon: <Aperture className="h-4 w-4" />, 
      label: "Twitter", 
      href: "https://nomanportfolio.vercel.app",
      color: "hover:bg-sky-500 hover:border-sky-500"
    },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.")
      return
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.")
      return
    }

    const serviceID = "service_g19u2fx"
    const templateID = "template_npm5hif"
    const publicKey = "YYKxrDH-ip98y3LFc"

    if (!serviceID || !templateID || !publicKey) {
      setError("Email service is not properly configured.")
      return
    }

    setIsSending(true)

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitted(true)
        setError("")
        setIsSending(false)
        setTimeout(() => setSubmitted(false), 5000)
      })
      .catch((error) => {
        console.error("EmailJS error:", error)
        setError("Failed to send the message. Please try again later.")
        setIsSending(false)
      })
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
            className="space-y-4"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Let's Connect
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Available for Projects
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                24h Response Time
              </div>
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg shadow-gray-100/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-gray-900 text-xl">Contact Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 mb-1">{contact.label}</p>
                        <p className="text-sm text-gray-600 break-words leading-relaxed">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg shadow-gray-100/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-gray-900 text-xl">Follow Me</CardTitle>
                  <CardDescription className="text-gray-600">Connect on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className={`h-12 w-12 rounded-xl border-gray-300 bg-white hover:text-white transition-all duration-300 ${social.color}`}
                          asChild
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg shadow-blue-100/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        I typically respond within 24 hours. For urgent matters, feel free to call directly.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-blue-200">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 font-medium">
                      Available for Freelance Work
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg shadow-gray-100/50">
                <CardHeader className="pb-6">
                  <CardTitle className="text-gray-900 text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Tell me about your project and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className="h-12 pl-12 bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white rounded-xl text-gray-900 placeholder-gray-500" 
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="h-12 pl-12 bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white rounded-xl text-gray-900 placeholder-gray-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry or collaboration" 
                        className="h-12 bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white rounded-xl text-gray-900 placeholder-gray-500" 
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400 h-5 w-5" />
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, requirements, timeline, and how I can help you..."
                          className="min-h-[140px] pl-12 pt-4 bg-gray-50 border-gray-300 focus:border-blue-500 focus:bg-white rounded-xl text-gray-900 placeholder-gray-500 resize-none"
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isSending}
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                      role="alert"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <p className="text-green-800 font-medium">
                          Message sent successfully! I'll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                      role="alert"
                    >
                      <p className="text-red-800 font-medium text-center">
                        {error}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}