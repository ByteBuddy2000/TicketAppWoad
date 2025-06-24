"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full relative text-white min-h-screen flex flex-col justify-between">
      {/* Single Background for the whole section */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      />
      {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

      {/* Contact Content */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-12">
          CONTACT
        </h1>

        <div className="text-sm sm:text-base md:text-lg space-y-8 max-w-xl text-white/90">
          {/* Booking */}
          <div>
            <h2 className="font-bold uppercase mb-2 text-white">BOOKING</h2>
            <p>North America</p>
            <p>
              Keith Sarkisian <br />
              <a
                href="mailto:ksarkisian@wmeagency.com"
                className="text-yellow-400 hover:underline"
              >
                ksarkisian@wmeagency.com
              </a>
            </p>

            <p className="mt-4">ROW</p>
            <p>
              Josh Javor <br />
              <a
                href="mailto:jjavor@wmeagency.com"
                className="text-yellow-400 hover:underline"
              >
                jjavor@wmeagency.com
              </a>
            </p>
          </div>

          {/* Management */}
          <div className="pt-8 border-t border-white/30">
            <h2 className="font-bold uppercase mb-2 text-white">MANAGEMENT</h2>
            <p>Q Prime</p>
            <a
              href="mailto:newyork@qprime.com"
              className="text-yellow-400 hover:underline"
            >
              newyork@qprime.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer (no extra background, just content) */}
      <footer className="relative z-20 w-full px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* DOGSTAR Logo Image */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/logo001.png"
              alt="DOGSTAR"
              width={300}
              height={60}
              className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] h-auto"
              priority
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
            <Link
              href="https://instagram.com/dogstar"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: "linear-gradient(to bottom, #facc15, #f97316)" }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "none"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = "#800020"
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "linear-gradient(to bottom, #facc15, #f97316)"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = ""
                }}
              >
                <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
            </Link>
            <Link
              href="https://facebook.com/dogstar"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: "linear-gradient(to bottom, #facc15, #f97316)" }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "none"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = "#800020"
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "linear-gradient(to bottom, #facc15, #f97316)"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = ""
                }}
              >
                <Facebook className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
            </Link>
            <Link
              href="https://youtube.com/dogstar"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: "linear-gradient(to bottom, #facc15, #f97316)" }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "none"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = "#800020"
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "linear-gradient(to bottom, #facc15, #f97316)"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = ""
                }}
              >
                <Youtube className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6 text-white">
            <p className="text-sm md:text-base">© DOGSTAR 2023</p>
            <Link href="/contact" className="text-sm md:text-base hover:text-yellow-400 transition-colors">
              CONTACT
            </Link>
            <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=39cfc244-4916-4590-a497-2272c45aaf17" className="text-sm md:text-base hover:text-yellow-400 transition-colors" target="_blank">
              TERMS
            </Link>
            <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=837f737d-54e0-437a-8914-c94692534f94" className="text-sm md:text-base hover:text-yellow-400 transition-colors" target="_blank">
              PRIVACY POLICY
            </Link>
          </div>

          {/* Site by FADE */}
          <p className="text-white/70 text-sm md:text-base">SITE BY FADE</p>
        </div>
      </footer>
    </section>
  )
}