import ImageSection from "@/components/image-section/image-section";
import HeroSection from "../components/hero-section/hero-section";
import TourDatesSection from "@/components/tour-dates-section/tour-dates-section";
import JoinSection from "@/components/join-section/join-section";
import VideoSection from "@/components/video-section/video-section";
import Footer from "@/components/footer/footer";

export default function HomePage() {
  return (
    <>
      <main className="w-full min-h-screen">
        <HeroSection />
        <ImageSection />
        <TourDatesSection />
        <JoinSection />
        <VideoSection />
        <Footer />
      </main>
    </>
  )
}
