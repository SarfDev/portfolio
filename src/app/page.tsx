import type { Metadata } from 'next'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import portfolioData from '@/data/portfolio.json'

export const metadata: Metadata = {
  title: "KingVFX — Video Editor",
  description: "Long form video editing for creators and founders.",
}

const CTA_LINK = "https://twitter.com/messages/compose?recipient_id=1800031539557748736"

const TESTIMONIALS = [
  { screenshot: "/testimonials/primo.png", description: "WhatsApp message" },
  { screenshot: "/testimonials/secondo.png", description: "Direct message" },
  { screenshot: "/testimonials/terzo.png", description: "Email review" },
]

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

export default function Home() {
  const work = portfolioData.longFormVideosEN
  const clients = portfolioData.clients

  return (
    <div className="min-h-[100dvh] bg-[#FAFAF8] text-[#111827]">

      <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <span className="font-bold tracking-tight text-base">KingVFX</span>
        <a
          href={CTA_LINK}
          target="_blank"
          className="inline-flex items-center gap-2 bg-[#2A4F3C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1E3A2C] transition-colors"
        >
          Work With Me
        </a>
      </header>

      {/* Above the fold: name and button on the left, best edit on the right */}
      <section className="relative overflow-hidden px-6 pt-8 pb-20 md:pt-14">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Hi, I&apos;m <span className="text-gradient">KingVFX</span>
            </h1>
            <a href={CTA_LINK} target="_blank" className="inline-block mt-8">
              <button className="inline-flex items-center gap-3 bg-[#2A4F3C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A2C] transition-colors text-base shadow-lg shadow-emerald-800/30">
                Work With Me
                <ArrowIcon />
              </button>
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A4F3C] mb-3">VSL</p>
            <div className="aspect-video rounded-2xl overflow-hidden border border-black/[0.08] hero-glow bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${portfolioData.heroVimeoId}?title=0&byline=0&portrait=0`}
                title="VSL"
                className="w-full h-full"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who I've edited for */}
      <section className="px-6 py-14 bg-white border-y border-black/[0.06]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] text-center mb-8">
            Creators I&apos;ve edited for
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
            {clients.map((client) => {
              const inner = (
                <>
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full overflow-hidden bg-white border border-black/[0.08]">
                    <img src={client.image} alt={client.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-[#6B7280] font-medium leading-snug">{client.name}</p>
                </>
              )
              return client.url ? (
                <a key={client.name} href={client.url} target="_blank" className="text-center w-24 hover:opacity-70 transition-opacity">
                  {inner}
                </a>
              ) : (
                <div key={client.name} className="text-center w-24">{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The work: video and client alternating sides */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">Recent work</h2>

          <div className="space-y-16 md:space-y-20">
            {work.map((item, index) => {
              const videoOnLeft = index % 2 === 0
              return (
                <div key={item.youtubeId || item.vimeoId} className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  <div className={videoOnLeft ? 'md:order-1' : 'md:order-2'}>
                  <div className={`rounded-2xl overflow-hidden border border-black/[0.06] bg-black ${item.vertical ? 'aspect-[9/16] w-full max-w-[300px] mx-auto' : 'aspect-video'}`}>
                    {item.vimeoId ? (
                      <iframe
                        src={`https://player.vimeo.com/video/${item.vimeoId}?title=0&byline=0&portrait=0`}
                        title={item.heading}
                        className="w-full h-full"
                        allow="fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <YouTubeEmbed videoId={item.youtubeId} title={item.heading} className="w-full h-full" />
                    )}
                  </div>
                  </div>
                  <div className={`flex items-center gap-4 ${videoOnLeft ? 'md:order-2' : 'md:order-1'}`}>
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.heading}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover border border-black/[0.08] flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {item.url ? (
                          <a href={item.url} target="_blank" className="hover:text-[#2A4F3C] transition-colors">
                            {item.heading}
                          </a>
                        ) : (
                          item.heading
                        )}
                      </h3>
                      {item.meta && <p className="text-[#6B7280] mt-1 text-lg">{item.meta}</p>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social proof, kept small so the videos stay the focus */}
      <section className="px-6 py-20 bg-white border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.screenshot} className="rounded-2xl overflow-hidden border border-black/[0.06] bg-[#FAFAF8]">
                <img
                  src={testimonial.screenshot}
                  alt={testimonial.description}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One call to action, one way to reach me */}
      <section className="px-6 py-24 bg-[#2A4F3C] text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4">
            Let&apos;s make your next video.
          </h2>
          <p className="text-emerald-100 text-lg mb-10">DM me on X and tell me what you&apos;re working on.</p>
          <a href={CTA_LINK} target="_blank">
            <button className="inline-flex items-center gap-3 bg-white text-[#2A4F3C] px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-base shadow-lg">
              Send Me a DM
              <ArrowIcon />
            </button>
          </a>
          <p className="mt-5 text-sm text-emerald-200">I reply within 24 hours.</p>
        </div>
      </section>

      <footer className="px-6 py-8 bg-white border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm text-[#9CA3AF]">© 2026 KingVFX</p>
          <p className="text-sm text-[#9CA3AF] font-medium">Video Editor</p>
        </div>
      </footer>
    </div>
  )
}
