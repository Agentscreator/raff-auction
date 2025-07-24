import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Define as a CSS variable
})

export const metadata: Metadata = {
  title: "RaffAuction",
  description: "The revolutionary platform for raffles and auctions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
