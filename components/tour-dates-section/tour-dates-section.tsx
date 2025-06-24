"use client"

import { useEffect, useState } from "react"

export default function TourDatesSection() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .finally(() => setLoading(false));
  }, []);

  // Show only the next event (first in the list)
  const nextEvent = events.length > 0 ? events[0] : null;

  return (
    <section id="tour" className="w-full relative">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg1.jpg')",
        }}
      />

      {/* Content container */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
        {/* Tour dates heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-12 md:mb-16 text-center">
          TOUR DATES
        </h2>

        {/* Divider line */}
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-px bg-white/20 mb-8 md:mb-12 mx-auto"></div>

        {/* Event or No Event */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          <p className="text-white text-lg md:text-xl font-light mb-4 md:mb-0">
            {loading
              ? "Loading..."
              : nextEvent
                ? `${nextEvent.name} — ${nextEvent.date} ${nextEvent.time} — ${nextEvent.description}`
                : "There are no upcoming events."
            }
          </p>
          {/* Powered by seated */}
          <div className="ml-4 md:ml-8 text-right">
            <p className="text-white/70 text-sm">
              powered by <span className="font-semibold">seated</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}