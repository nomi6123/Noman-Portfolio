import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Noman - Frontend Developer | React.js, Next.js, AI, Video & Graphic Design",
  description:
    "Muhammad Noman — Professional Frontend Developer skilled in React.js, Next.js, AI-based applications, video & photo editing, UI/UX, and graphic design. View my portfolio for modern, creative, and responsive web solutions.",
  generator: "v0.dev",
  keywords: [
    "Muhammad Noman",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "AI Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Web Developer Portfolio",
    "Video Editor",
    "Photo Editor"
  ],
  authors: [{ name: "Muhammad Noman" }],
  openGraph: {
    title: "Muhammad Noman - Frontend Developer & Creative Designer",
    description:
      "Portfolio of Muhammad Noman, a Frontend Developer specializing in React.js, Next.js, AI, and creative design.",
    url: "https://yourdomain.com",
    siteName: "Muhammad Noman Portfolio",
    images: [
      {
        url: "https://yourdomain.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Noman Portfolio Preview"
      }
    ],
    type: "website"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
