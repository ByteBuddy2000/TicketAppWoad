import Image from "next/image"

export default function Imagesection() {
  return (
    <section className="w-full min-h-[40vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[100vh] relative overflow-hidden">
      {/* Background-like image, always covers section */}
      <Image
        src="/dogstar002.jpg"
        alt="DOGSTAR band members"
        fill
        className="object-cover object-center"
        priority
        quality={100}
        sizes="100vw"
      />
      {/* Optional: overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}
    </section>
  )
}