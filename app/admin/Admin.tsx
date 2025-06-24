"use client"

import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Hide scrollbars utility
const hideScrollbar = "scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent [&::-webkit-scrollbar]:hidden";

export default function AdminDashboard() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Events state
  const [events, setEvents] = useState<any[]>([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventForm, setEventForm] = useState({ name: "", date: "", time: "", description: "" });
  const [eventLoading, setEventLoading] = useState(false);

  // Fetch events
  const fetchEvents = async () => {
    const res = await fetch("/api/events");
    const data = await res.json();
    setEvents(data);
    // If there's an event, prefill the form for editing
    if (data.length > 0) {
      setEventForm({
        name: data[0].name,
        date: data[0].date,
        time: data[0].time,
        description: data[0].description,
      });
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle event form submit (add or update the first event)
  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEventLoading(true);

    // If there's already an event, update it (PUT), else create (POST)
    const method = events.length > 0 ? "PUT" : "POST";
    const url = events.length > 0 ? `/api/events/${events[0]._id}` : "/api/events";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventForm),
    });

    if (res.ok) {
      toast.success(events.length > 0 ? "Event updated!" : "Event created!");
      setShowEventModal(false);
      fetchEvents();
    } else {
      const data = await res.json();
      toast.error(data?.error || "Failed to save event.");
    }
    setEventLoading(false);
  };

  // Fetch all admins (agents)
  useEffect(() => {
    fetch("/admin/agents")
      .then(res => res.json())
      .then(setAdmins);
  }, []);

  // Fetch all bookings (for all admins)
  const fetchBookings = () => {
    setLoading(true);
    setError(null);
    fetch("/admin/bookings?all=true")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch bookings");
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load buyers. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 text-center w-full sm:w-auto">
            Admin Dashboard
          </h1>
          <div className="flex flex-row gap-2 w-full sm:w-auto justify-center sm:justify-end">
            <button
              onClick={() => setShowEventModal(true)}
              className="bg-yellow-400 text-black px-4 py-2 rounded font-bold"
            >
              {events.length > 0 ? "Edit Event" : "Add Event"}
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/sign-in" })}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-4 py-2 rounded-lg shadow hover:from-yellow-500 hover:to-orange-500 transition-all"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Admins & Refcodes Table */}
        <div className="mb-8">
          <h2 className="text-base sm:text-lg font-bold mb-2 text-cyan-300">Admins & Referral Codes</h2>
          <div className={`rounded-xl shadow-lg bg-white/10 backdrop-blur-md max-h-64 overflow-y-auto ${hideScrollbar}`}>
            <table className="min-w-full table-auto text-left border-collapse text-xs sm:text-sm">
              <thead className="bg-slate-900 text-yellow-300 uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="p-3 sm:p-4 whitespace-nowrap">#</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Agents</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Refcodes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr>
                    <td colSpan={3} className="p-3 sm:p-4 text-center">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={3} className="p-3 sm:p-4 text-center text-red-400">
                      {error}
                      <button
                        onClick={() => {
                          setError(null);
                          setLoading(true);
                          fetch("/admin/agents")
                            .then(res => res.json())
                            .then(setAdmins)
                            .catch(() => setError("Could not load admins. Please try again."))
                            .finally(() => setLoading(false));
                        }}
                        className="ml-4 px-3 py-1 bg-yellow-400 text-black rounded mt-2"
                      >
                        Retry
                      </button>
                    </td>
                  </tr>
                ) : admins.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-3 sm:p-4 text-center">No admins found.</td>
                  </tr>
                ) : (
                  admins.map((admin, idx) => (
                    <tr key={admin._id || admin.email || idx}>
                      <td className="p-3 sm:p-4">{idx + 1}</td>
                      <td className="p-3 sm:p-4">{admin.username}</td>
                      <td className="p-3 sm:p-4 break-all">{admin.referralCode}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buyers Table */}
        <div className="mb-8">
          <h2 className="text-base sm:text-lg font-bold mb-2 text-orange-300">Clients</h2>
          <div className={`rounded-xl shadow-lg bg-white/10 backdrop-blur-md max-h-64 overflow-y-auto ${hideScrollbar}`}>
            <table className="min-w-full table-auto text-left border-collapse text-xs sm:text-sm">
              <thead className="bg-slate-900 text-yellow-300 uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="p-3 sm:p-4 whitespace-nowrap">#</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Buyer Name</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Buyer Email</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Celebrity</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Ticket Type</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Referral Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="p-3 sm:p-4 text-center">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={6} className="p-3 sm:p-4 text-center text-red-400">
                      {error}
                      <button
                        onClick={fetchBookings}
                        className="ml-4 px-3 py-1 bg-yellow-400 text-black rounded mt-2"
                      >
                        Retry
                      </button>
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-3 sm:p-4 text-center">No buyers yet.</td>
                  </tr>
                ) : (
                  bookings.map((booking, idx) => (
                    <tr key={booking._id || booking.email || idx} className="hover:bg-white/10 transition-all">
                      <td className="p-3 sm:p-4">{idx + 1}</td>
                      <td className="p-3 sm:p-4">{booking.name}</td>
                      <td className="p-3 sm:p-4 break-all">{booking.email}</td>
                      <td className="p-3 sm:p-4">{booking.celebrity}</td>
                      <td className="p-3 sm:p-4">{booking.ticketType}</td>
                      <td className="p-3 sm:p-4 break-all">{booking.referralCode}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Events Section */}
        <div className="my-8">
          {/* 
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white/10 backdrop-blur-md">
            <table className="min-w-full table-auto text-left border-collapse text-xs sm:text-sm events">
              <thead className="bg-black/20 text-yellow-300 uppercase tracking-wider">
                <tr>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Event Name</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Date</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Time</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {events.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-3 sm:p-4 text-center">
                      No upcoming events at the moment. Stay tuned!
                    </td>
                  </tr>
                ) : (
                  events.map((event, idx) => (
                    <tr key={event._id || idx}>
                      <td className="p-3 sm:p-4">{event.name}</td>
                      <td className="p-3 sm:p-4">{event.date}</td>
                      <td className="p-3 sm:p-4">{event.time}</td>
                      <td className="p-3 sm:p-4">{event.description}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          */}
        </div>

        {/* Event Modal */}
        {showEventModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-black">{events.length > 0 ? "Edit Event" : "Add Event"}</h2>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Event Name"
                  value={eventForm.name}
                  onChange={e => setEventForm({ ...eventForm, name: e.target.value })}
                  className="w-full border px-3 py-2 rounded text-black"
                  required
                />
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={e => setEventForm({ ...eventForm, date: e.target.value })}
                  className="w-full border px-3 py-2 rounded text-black"
                  required
                />
                <input
                  type="time"
                  value={eventForm.time}
                  onChange={e => setEventForm({ ...eventForm, time: e.target.value })}
                  className="w-full border px-3 py-2 rounded text-black"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={eventForm.description}
                  onChange={e => setEventForm({ ...eventForm, description: e.target.value })}
                  className="w-full border px-3 py-2 rounded text-black"
                  required
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowEventModal(false)}
                    className="px-4 py-2 rounded bg-gray-300 text-black"
                    disabled={eventLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-yellow-400 text-black font-bold"
                    disabled={eventLoading}
                  >
                    {eventLoading ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}