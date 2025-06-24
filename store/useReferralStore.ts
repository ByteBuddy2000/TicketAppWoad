import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ReferralState {
  referral: string | null
  setRefCode: (ref: string) => void
  clearRefCode: () => void
  getRefCode: () => string | null // <-- Add this
}

export const useReferralStore = create<ReferralState>()(
  persist(
    (set, get) => ({
      referral: null,
      setRefCode: (ref) => set({ referral: ref }),
      clearRefCode: () => set({ referral: null }),
      getRefCode: () => get().referral, // <-- Add this
    }),
    {
      name: "referral-storage",
    }
  )
)