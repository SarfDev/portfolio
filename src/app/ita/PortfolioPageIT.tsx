"use client"

import YouTubeEmbed from '@/components/YouTubeEmbed'
import portfolioData from '@/data/portfolio.json'
import type { PortfolioCopy } from '@/data/copy'

export interface LongFormVideo {
  title: string
  youtubeId: string
}

interface PortfolioPageProps {
  copy: PortfolioCopy
  videos: LongFormVideo[]
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A4F3C] mb-3">
      <span className="h-px w-6 bg-[#2A4F3C]" />
      {children}
    </p>
  )
}

export default function PortfolioPageIT({ copy, videos }: PortfolioPageProps) {
  const clients = portfolioData.clients

  return (
    <div className="min-h-[100dvh] bg-[#FAFAF8]">

      {/* Navigation — logo + the single call to action, nothing else to click away to */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#2A4F3C] flex items-center justify-center">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="text-[#111827] font-bold tracking-tight text-base">King Osei</span>
          </a>
          <a
            href={copy.ctaLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#2A4F3C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1E3A2C] transition-colors"
          >
            {copy.navCta}
          </a>
        </div>
      </nav>

      {/* Above the fold — sized so the clients strip just peeks in on a 1080p screen */}
      <section id="home" className="min-h-[92dvh] flex items-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EAF3ED] rounded-full translate-x-1/2 -translate-y-1/3 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAF3ED] rounded-full -translate-x-1/3 translate-y-1/4 opacity-40" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2.5 bg-white text-[#111827] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-black/[0.06]">
              <span className="inline-flex w-2 h-2 rounded-full bg-[#10B981]" />
              {copy.hero.badge}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[#111827] mb-4">
              {copy.hero.titleStart} <span className="text-gradient">{copy.hero.titleAccent}</span>
            </h1>

            <p className="text-lg text-[#6B7280] max-w-xl mb-8 leading-relaxed">
              {copy.hero.subtitle}
            </p>

            <div className="w-full max-w-2xl">
              <div className="aspect-video rounded-2xl overflow-hidden border border-black/[0.08] hero-glow bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${portfolioData.heroVimeoId}?title=0&byline=0&portrait=0`}
                  title={copy.hero.videoTitle}
                  className="w-full h-full"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 inline-flex items-center gap-2 text-[#2A4F3C] font-semibold text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A4F3C]" />
                {copy.hero.videoCaption}
              </p>
            </div>

            <a href={copy.ctaLink} target="_blank" className="mt-7">
              <button className="inline-flex items-center gap-3 bg-[#2A4F3C] text-white px-7 py-4 rounded-lg font-semibold hover:bg-[#1E3A2C] transition-colors text-base shadow-lg shadow-emerald-800/30">
                {copy.hero.cta}
                <ArrowIcon />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Clients + headline numbers */}
      <section className="py-16 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-3">{copy.clients.eyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">{copy.clients.title}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-7">
            {clients.map((client) => (
              <div key={client.name} className="text-center w-24">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2.5 rounded-2xl overflow-hidden bg-white border border-black/[0.08]">
                  <img
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#6B7280] font-medium leading-snug">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-black/[0.06] grid grid-cols-2 md:grid-cols-4 gap-y-6">
            {copy.stats.map((stat) => (
              <div key={stat.label} className="text-center px-2">
                <p className="text-3xl md:text-4xl font-bold text-[#2A4F3C] mb-1 tracking-tight">{stat.value}</p>
                <p className="text-sm text-[#6B7280] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The work — the largest elements on the page */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <Eyebrow>{copy.work.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">{copy.work.title}</h2>
            <p className="text-[#6B7280] mt-2 text-lg">{copy.work.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.youtubeId}
                className="bg-white rounded-2xl overflow-hidden border border-black/[0.06] hover:border-[#2A4F3C]/30 transition-colors"
              >
                <div className="aspect-video">
                  <YouTubeEmbed
                    videoId={video.youtubeId}
                    title={video.title}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <Eyebrow>{copy.testimonials.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">{copy.testimonials.title}</h2>
            <p className="text-[#6B7280] mt-2 text-lg">{copy.testimonials.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {copy.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.screenshot}
                className="rounded-2xl overflow-hidden border border-black/[0.06] hover:border-[#2A4F3C]/30 transition-colors bg-[#FAFAF8]"
              >
                <img
                  src={testimonial.screenshot}
                  alt={testimonial.description}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
                <div className="px-4 py-3 border-t border-black/[0.06]">
                  <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-[0.1em]">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action — one thing to do, one way to do it */}
      <section className="py-28 bg-[#2A4F3C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative text-center flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-6">{copy.finalCta.eyebrow}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 max-w-2xl leading-[1.05]">
            {copy.finalCta.title}
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-md">{copy.finalCta.subtitle}</p>
          <a href={copy.ctaLink} target="_blank">
            <button className="inline-flex items-center gap-3 bg-white text-[#2A4F3C] px-7 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-base shadow-lg">
              {copy.finalCta.button}
              <ArrowIcon />
            </button>
          </a>
          <p className="mt-5 text-sm text-emerald-200">{copy.finalCta.note}</p>
        </div>
      </section>

      <footer className="py-8 bg-white border-t border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <p className="text-sm text-[#9CA3AF]">{copy.footer.copyright}</p>
          <p className="text-sm text-[#9CA3AF] font-medium">{copy.footer.role}</p>
        </div>
      </footer>
    </div>
  )
}
