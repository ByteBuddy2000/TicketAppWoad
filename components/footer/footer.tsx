"use client"
import Link from "next/link"
import Image from "next/image"
import footer from "@/components/footer/footer"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full relative">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg1.jpg')",
                }}
            />

            {/* Content container */}
            <div className="relative w-full px-4 py-8 md:py-12 lg:py-16">
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
                        
                        {/* <Link
                            href="https://tiktok.com/@dogstar"
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
                                <svg
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.5 3.5v17.5a5 5 0 1 0 5-5h-1v-7h3a5 5 0 0 0 5-5V3.5h-12z" />
                                </svg>
                            </div>
                        </Link> */}
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6 text-white">
                        <p className="text-sm md:text-base">© DOGSTAR 2024</p>
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
            </div>
        </footer>
    )
}