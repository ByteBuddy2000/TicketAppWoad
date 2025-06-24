"use client"

import Link from "next/link"
import { ArrowLeft, LogOut } from "lucide-react"
import { celebrities } from "@/lib/celebrities"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

export default function CelebrityPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400">
      {/* Header */}
      <header className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between w-full gap-x-4 sm:gap-x-0">
            {/* Back to Home (top-left always) */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">Home</span>
            </Link>

            {/* Title */}
            <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 text-center mx-auto sm:mx-auto">
              CELEBRITIES
            </h1>

            {/* Spacer to balance the layout */}
            <div className="w-[60px] sm:w-[150px]" />
          </div>

        </div>
      </header>

      {/* Celebrities Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {celebrities.map((celebrity) => (
            <Link
              key={celebrity.id}
              href={`/celebrity/${celebrity.slug}`}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 flex flex-col items-center text-center gap-y-3">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={celebrity.image}
                    alt={celebrity.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                <h3 className="text-white font-bold text-lg sm:text-xl">{celebrity.name}</h3>
                <p className="text-white/80 text-sm sm:text-base">{celebrity.roles.join(" • ")}</p>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 rounded-lg text-sm sm:text-base">
                  View Profile
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
