import ReferralHandler from "@/components/ReferralHandler/ReferralHandler"
import "./globals.css"
import { Toaster } from "sonner"
import { Orbitron, Montserrat } from "next/font/google"
import Head from "next/head";
import SupportCenter from "@/components/SupportCenter/SupportCenter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "DOGSTAR",
  description: "Dogstar is an American alternative rock band featuring Keanu Reeves, Bret Domrose, and Robert Mailhouse.",
  icons: {
    icon: "/image004.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <Head>
        <link rel="icon" href="/image004.png" />
      </Head>
      <body cz-shortcut-listen="true">
        {children}
        <Toaster />
        {/* <SupportCenter /> */}
      </body>
    </html>
  )
}