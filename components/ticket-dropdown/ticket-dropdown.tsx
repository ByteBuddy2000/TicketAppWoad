"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { celebrities } from "@/lib/celebrities"

export default function TicketDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors font-bold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap"
      >
        <span>BUY TICKET</span>
        <ChevronDown
          className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 xs:w-60 sm:w-64 md:w-72 lg:w-80 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-yellow-400/20 transition-all duration-300 ease-out z-50 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <div className="py-2">
          {celebrities.map((celebrity) => (
            <Link
              key={celebrity.id}
              href={`/celebrity/${celebrity.slug}`}
              onClick={() => setIsOpen(false)}
              className="block px-3 xs:px-4 py-2 xs:py-3 text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2 xs:space-x-3">
                <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg">
                    {celebrity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <span className="font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
                  {celebrity.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
