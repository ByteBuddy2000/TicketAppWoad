import ReferralHandler from "@/components/ReferralHandler/ReferralHandler"
import "./globals.css"
import { Toaster } from "sonner"
import { Orbitron, Montserrat } from "next/font/google"
import Head from "next/head";
import Script from "next/script"; // <-- Add this import

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
        {/* Tawk.to Script */}
        <Script id="tawkto-support" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/686d05cabe8a1b1910b8675f/1ivktt90m';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}