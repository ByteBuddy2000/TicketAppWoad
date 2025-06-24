"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useReferralStore } from "@/store/useReferralStore"


export default function ReferralHandler() {
    const searchParams = useSearchParams()
    const setRefCode = useReferralStore((state) => state.setRefCode)

    useEffect(() => {
        const ref = searchParams.get("ref")
        if (ref) {
            localStorage.setItem("referralCode", ref) // Store in localStorage
            setRefCode(ref)
        } else {
            const storedRef = localStorage.getItem("referralCode")
            if(storedRef) {
                setRefCode(storedRef) // Set from localStorage if available
            }
        }
    }, [searchParams, setRefCode])

    return null // This component does not render anything
}