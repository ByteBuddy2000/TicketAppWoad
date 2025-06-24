import ReferralHandler from "@/components/ReferralHandler/ReferralHandler"
import "./globals.css"
import { Toaster } from "sonner"

import { Orbitron, Montserrat } from "next/font/google"
import { Suspense } from "react"

// const orbitron = Orbitron({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   variable: "--font-orbitron",
//   display: "swap",
// })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Add weights as needed
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "DOGSTAR",
  description: "Official Dogstar website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body cz-shortcut-listen="true">
        {/* <Suspense>
          <ReferralHandler />
        </Suspense> */}
        {children}
        <Toaster />
      </body>
    </html>
  )
}