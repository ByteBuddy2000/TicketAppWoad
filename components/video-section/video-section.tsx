export default function VideoSection() {
  const videos = [
    {
      title: "Dogstar - Glimmer (Official Lyric Video)",
      embedId: "EbOBa5MISPo", // Only the video ID!
      thumbnail: "/image003.png",
    },
    {
      title: "Dogstar - Everything Turns Around (Official Video)",
      embedId: "5MjVbKRaZDI", // Only the video ID!
      thumbnail: "/image005.png",
    },
    {
      title: "Dogstar - Breach (Official Video)",
      embedId: "5MjVbKRaZDI", // Only the video ID!
      thumbnail: "/image005.png",
    },
  ]

  return (
    <section id="watch" className="w-full relative">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg2.jpg')",
        }}
      />

      {/* Content container */}
      <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-start px-4 py-16 md:py-24 lg:py-32">
        {/* Videos grid */}
        <div className="w-full max-w-7xl mx-auto grid gap-8 md:gap-12">
          {videos.map((video, index) => (
            <div key={index} className="w-full bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-medium">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}