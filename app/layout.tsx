import type React from "react"
import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata = {
  title: "Bhargavi's Wedding Invitation",
  description: "Join us in celebrating the wedding of Bhargavi and her beloved",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased", playfair.variable, lato.variable)}>{children}</body>
    </html>
  )
}



import './globals.css'