import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const primaryFont = localFont({
  variable: "--font-primary",
  src: "../fonts/primaryFont.woff",
})

export const metadata: Metadata = {
  title: "Teemu",
  description: "Teemu Public KEY",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} antialiased dark`}>
        <div className={`wrapper relative`}>
          {children}

          <Toaster />
        </div>
      </body>
    </html>
  )
}
