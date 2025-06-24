"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function JoinSection() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter signup
        console.log("Newsletter signup:", email)
        setEmail("")
    }

    return (
        <section id="join" className="w-full relative">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg3.jpg')",
                }}
            />

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Content container */}
            <div className="relative min-h-[60vh] md:min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
                {/* JOIN heading */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-8 md:mb-12 text-center">
                    JOIN
                </h2>

                {/* Description text */}
                <p className="text-white text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl text-center mb-8 md:mb-12">
                    Receive the latest DOGSTAR information about releases, events, contests, and more by e-mail.
                </p>

                {/* Email signup form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md md:max-w-lg">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            type="email"
                            placeholder="YOUR EMAIL"
                            value={email}
                            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
                            required
                            className="flex-1 bg-black/20 border-yellow-400/50 text-white placeholder:text-white/70 focus:border-yellow-400 focus:ring-yellow-400/20 h-24 sm:h-14 text-base sm:text-lg"
                        />
                        <Button
                            type="submit"
                            className="bg-yellow-400  text-white font-bold tracking-wider px-6 py-3 h-12 sm:h-14 text-base sm:text-lg" variant={undefined} size={undefined}            >
                            SUBSCRIBE
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
