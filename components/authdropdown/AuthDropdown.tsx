"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function AuthDropdown() {
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
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors font-bold tracking-wider text-base sm:text-lg"
      >
        <span>BUY TICKET</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-yellow-400/20 transition-all duration-300 ease-out z-50 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <div className="py-2 text-center">
          <Link
            href="/sign-in"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-200"
          >
            Get Started
          </Link>
          {/* <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-200"
          >
            Register
          </Link> */}
        </div>
      </div>
    </div>
  )
}
