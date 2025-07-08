"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { celebrities } from "@/lib/celebrities"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Orbitron } from "next/font/google";
import { toast } from "sonner"
import SupportCenter from "@/components/SupportCenter/SupportCenter"

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-orbitron",
    display: "swap",
});

interface PageProps {
    params: Promise<{ slug: string }>
}

export default function TicketsPage({ params }: PageProps) {
    // Unwrap params Promise for Next.js 14+
    const { slug } = use(params)

    const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedTicketType, setSelectedTicketType] = useState<"regular" | "vip" | "private-regular" | "private-vip">(
        "regular",
    )
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        referralCode: "",
        paymentMethod: "cash-app",
    })

    // Save ref from URL to localStorage on first load
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get("ref");
            if (ref) {
                localStorage.setItem("referralCode", ref);
            }
        }
    }, []);

    // When modal opens, set referralCode from localStorage
    useEffect(() => {
        if (showBookingModal) {
            const ref = localStorage.getItem("referralCode") || "";
            setFormData((prev) => ({ ...prev, referralCode: ref }));
        }
    }, [showBookingModal]);

    const celebrity = celebrities.find((c) => c.slug === slug)

    if (!celebrity) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Celebrity Not Found</h1>
                    <Link href="/celebrity" className="text-cyan-400 hover:underline">
                        Back to Celebrities
                    </Link>
                </div>
            </div>
        )
    }

    const handleBooking = (type: typeof selectedTicketType) => {
        setSelectedTicketType(type)
        setShowBookingModal(true)
    }

    // Submit booking with referral code
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const bookingData = {
            ...formData,
            celebrity: celebrity.name,
            ticketType: selectedTicketType,
        }
        console.log("Booking data:", bookingData);
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            })
            if (res.ok) {
                setShowBookingModal(false)
                toast.success("Booking registered successfully click BOOK NOW for an appointment!");
            } else {
                const data = await res.json();
                toast.error(data?.error || "Booking failed. Please try again.");
            }
        } catch (err) {
            toast.error("Booking failed. Please try again.");
        }
    }

    // Handler to open Tawk.to chat
    const openSupportChat = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined" && (window as any).Tawk_API) {
            (window as any).Tawk_API.maximize();
        }
    };

    return (
        <div className={`orbitron-page ${orbitron.variable} min-h-screen bg-black text-white`}>
            {/* Header */}
            <header className="bg-black border-b border-cyan-500/30 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4">
                        {/* Back to Profile */}
                        <div className="flex justify-start">
                            <Link
                                href={`/celebrity/${celebrity.slug}`}
                                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span className="text-sm sm:text-base font-medium">Profile</span>
                            </Link>
                        </div>

                        {/* Title Section */}
                        <div className="flex-1 text-center px-2">
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 leading-tight">
                                {celebrity.name} Tour & Private Booking
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">
                                Join the legend. Be part of the experience.
                            </p>
                        </div>

                        {/* Spacer */}
                        <div className="hidden sm:block w-[120px]" />
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Tour Tickets Section */}
                {celebrity.ticketTypes && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                            <span className="text-yellow-400 mr-2">🤝</span>
                            Tour Tickets
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Regular Ticket */}
                            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-3">Regular Ticket</h3>
                                <p className="text-gray-300 text-sm mb-4">{celebrity.ticketTypes.regular.description}</p>
                                <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.ticketTypes.regular.price}</p>
                                <div className="space-x-3">
                                    <Button
                                        onClick={() => handleBooking("regular")}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Register
                                    </Button>
                                    <Button
                                       onClick={openSupportChat}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Buy Now
                                    </Button>
                          
                                </div>
                            </div>

                            {/* VIP Ticket */}
                            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-orange-400 mb-3">VIP Ticket</h3>
                                <p className="text-gray-300 text-sm mb-4">{celebrity.ticketTypes.vip.description}</p>
                                <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.ticketTypes.vip.price}</p>
                                <div className="space-x-3">
                                    <Button
                                        onClick={() => handleBooking("vip")}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Register
                                    </Button>
                                    <Button
                                       onClick={openSupportChat}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Private Booking Section */}
                {celebrity.privateBooking && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                            <span className="text-yellow-400 mr-2">💎</span>
                            Book Private Time with {celebrity.name}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Regular Visit */}
                            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-yellow-400 mb-3">Regular Visit</h3>
                                <p className="text-gray-300 text-sm mb-4">{celebrity.privateBooking.regular.description}</p>
                                <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.privateBooking.regular.price}</p>
                                <div className="space-x-3">
                                    <Button
                                        onClick={() => handleBooking("private-regular")}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Register
                                    </Button>
                                    <Button
                                       onClick={openSupportChat}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>

                            {/* VIP Visit */}
                            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-yellow-400 mb-3">VIP Visit</h3>
                                <p className="text-gray-300 text-sm mb-4">{celebrity.privateBooking.vip.description}</p>
                                <p className="text-2xl font-bold text-white mb-4">Price: ${celebrity.privateBooking.vip.price}</p>
                                <div className="space-x-3">
                                    <Button
                                        onClick={() => handleBooking("private-vip")}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Register
                                    </Button>
                                    <Button
                                       onClick={openSupportChat}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
                                        variant="default"
                                        size="default"
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <SupportCenter />
            </main>

            {/* Booking Modal */}
            {showBookingModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-cyan-400">
                                Booking - {selectedTicketType.includes("vip") ? "VIP" : "Regular"} Ticket
                            </h3>
                            <button onClick={() => setShowBookingModal(false)} className="text-gray-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Name</label>
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e: { target: { value: any } }) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Email</label>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e: { target: { value: any } }) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Referral Code</label>
                                <Input
                                    type="text"
                                    placeholder="Referral Code"
                                    value={formData.referralCode}
                                    onChange={(e: { target: { value: any } }) => setFormData({ ...formData, referralCode: e.target.value })}
                                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Payment Method</label>
                                <select
                                    value={formData.paymentMethod}
                                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:outline-none"
                                >
                                    <option value="cash-app" className="bg-blue-600">
                                        Cash App
                                    </option>
                                    <option value="zelle">Zelle</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="bitcoin">Bitcoin</option>
                                    <option value="usdt">USDT</option>
                                    <option value="gift-card">Gift Card</option>
                                </select>
                            </div>

                            <div className="hidden text-xs text-gray-400 italic">
                                *Pay only international <span className="text-cyan-400">&*.</span>
                            </div>

                            <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3" variant={undefined} size={undefined}>
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            )}

        
        </div>
    )
}