"use client"

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import InstagramEmbed from '@/components/InstagramEmbed'
import { horizontalLoop } from '@/lib/horizontalLoop'
import portfolioData from '@/data/portfolio.json'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const CTA_LINK = "https://twitter.com/messages/compose?recipient_id=1800031539557748736"

const featureIcons = [
  <svg key="refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 4v6h6M23 20v-6h-6" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>,
  <svg key="target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  <svg key="layout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  <svg key="message" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>,
  <svg key="sliders" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
  </svg>,
]

function Eyebrow({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "muted" }) {
  const color = tone === "primary" ? "text-[#2A4F3C]" : "text-[#6B7280]"
  const line = tone === "primary" ? "bg-[#2A4F3C]" : "bg-[#9CA3AF]"
  return (
    <p className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${color} mb-3`}>
      <span className={`h-px w-6 ${line}`} />
      {children}
    </p>
  )
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)
  const clientsTrackRef = useRef<HTMLDivElement>(null)
  const longFormRef = useRef<HTMLDivElement>(null)
  const shortFormRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const clients = portfolioData.clients
  const longFormVideos = portfolioData.longFormVideosEN
  const shortFormVideos = portfolioData.shortFormVideosEN

  const features = [
    { title: "Unlimited Revisions", description: "We refine the edit together until you're 100% happy — no extra cost, no limits." },
    { title: "Hook-First Editing", description: "The first 3 seconds are engineered to stop the scroll and lift your retention." },
    { title: "Custom Storyboard", description: "Every cut is built around your brand voice, your avatar and your content strategy." },
    { title: "Direct Support", description: "You talk straight to me on WhatsApp or Telegram — fast replies, zero middlemen." },
    { title: "Fast Delivery", description: "Long form in 2–7 days · Reels from 3h to 1 day, depending on complexity." },
    { title: "Pro Toolset", description: "Premiere Pro, After Effects and DaVinci Resolve — broadcast-grade finishing." }
  ]

  const stats = [
    { value: "50+", label: "Videos delivered" },
    { value: "8", label: "Brands served" },
    { value: "3h", label: "Fastest turnaround" },
    { value: "100%", label: "Satisfaction rate" }
  ]

  const process = [
    { step: "01", title: "Send the brief", description: "Drop your raw footage, references and goals via Drive or SwissTransfer. We align on the vision before a single cut." },
    { step: "02", title: "I edit", description: "Hook, pacing, motion graphics and color — crafted around your brand and the audience you want to reach." },
    { step: "03", title: "Review & launch", description: "Unlimited Frame.io revisions until it's perfect. You get final files ready to post and grow." }
  ]

  const faqs = [
    { question: "What's your turnaround time?", answer: "Long form videos: 5–7 days for complex animations, 2–3 days for simpler edits. Reels/Shorts: 1 day for complex animations, 3 hours for simple videos." },
    { question: "What software do you use?", answer: "I use industry-standard tools: Adobe Premiere Pro for editing, After Effects for motion graphics and animations, and DaVinci Resolve for color grading." },
    { question: "Do you offer revisions?", answer: "Yes. Unlimited revisions are included. I'll keep working on your video until you're completely satisfied with the result." },
    { question: "How do we collaborate?", answer: "You send me the raw files via SwissTransfer or Google Drive along with your brief and references. I edit the video and upload it to Frame.io for quick and efficient revisions." },
    { question: "How do we stay in touch?", answer: "We communicate via WhatsApp or Telegram for fast and direct communication throughout the project." },
    { question: "What's your pricing?", answer: "Pricing depends on project complexity and requirements. I also offer packages for long-term collaborations. Contact me for a quote." }
  ]

  const testimonials = [
    { platform: "WhatsApp", screenshot: "/testimonials/primo.png", description: "WhatsApp message" },
    { platform: "Instagram", screenshot: "/testimonials/secondo.png", description: "Direct message" },
    { platform: "Email", screenshot: "/testimonials/terzo.png", description: "Email review" }
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }

    const sections = [statsRef, clientsRef, longFormRef, shortFormRef, featuresRef, processRef, testimonialsRef, faqRef]
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    })

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  // Seamless clients marquee via GSAP horizontalLoop helper
  useEffect(() => {
    const track = clientsTrackRef.current
    if (!track) return
    const items = gsap.utils.toArray<HTMLElement>(track.children)
    const loop = horizontalLoop(items, { repeat: -1, speed: 0.7, paddingRight: 40 })

    const pause = () => loop.timeScale(0.15)
    const resume = () => loop.timeScale(1)
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
      loop.kill()
    }
  }, [])

  return (
    <div className="min-h-[100dvh] bg-[#FAFAF8]">

      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/[0.06]' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#2A4F3C] flex items-center justify-center shadow-sm shadow-emerald-200">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="text-[#111827] font-bold tracking-tight text-base">King Osei</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">Portfolio</a>
            <a href="#features" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">Services</a>
            <a href="#process" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">Process</a>
            <a href="#faq" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">FAQ</a>
          </div>

          <a
            href={CTA_LINK}
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-[#2A4F3C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1E3A2C] active:scale-[0.97] transition-all shadow-sm"
          >
            Work with me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="border-t border-black/[0.06] bg-white px-6 py-4 space-y-1">
            <a href="#portfolio" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#features" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#faq" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <div className="pt-3 border-t border-black/[0.06]">
              <a
                href={CTA_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#2A4F3C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1E3A2C] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work with me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" ref={heroRef} className="min-h-[100dvh] flex items-center pt-28 pb-20 relative overflow-hidden">
        {/* Background: soft blobs + dotted grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EAF3ED] rounded-full translate-x-1/2 -translate-y-1/3 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAF3ED] rounded-full -translate-x-1/3 translate-y-1/4 opacity-40" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2.5 bg-white text-[#111827] text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-black/[0.06] shadow-sm">
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#10B981] text-[#10B981] pulse-ring" />
              Available for new projects
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#111827] mb-6">
              Edits that make your brand <span className="text-gradient">impossible to scroll past.</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-xl mb-9 leading-relaxed">
              I help creators and founders grow with retention-first video editing — hooks that grab in 3 seconds, pacing that holds attention, and stories that convert viewers into clients.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href={CTA_LINK} target="_blank">
                <button className="inline-flex items-center gap-3 bg-[#2A4F3C] text-white px-7 py-4 rounded-lg font-semibold hover:bg-[#1E3A2C] active:scale-[0.97] transition-all text-base shadow-lg shadow-emerald-800/50">
                  Work with me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-semibold">
                Watch the work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust microcopy */}
            <div className="mt-6 flex items-center justify-center gap-x-5 gap-y-2 flex-wrap text-sm text-[#6B7280]">
              {["Replies within 24h", "Unlimited revisions", "50+ videos delivered"].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#2A4F3C]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </span>
              ))}
            </div>

            {/* Recent VSL video */}
            <div className="mt-14 w-full max-w-4xl">
              <div className="aspect-video rounded-2xl overflow-hidden border border-black/[0.08] hero-glow bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1197611523?title=0&byline=0&portrait=0"
                  title="Recent VSL"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-[#2A4F3C] font-semibold text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A4F3C]" />
                Recent VSL edit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4 py-6 md:py-2">
                <p className="text-4xl md:text-5xl font-bold text-[#2A4F3C] mb-2 tracking-tight">{stat.value}</p>
                <p className="text-sm text-[#6B7280] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked With */}
      <section ref={clientsRef} className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-3">Trusted by creators &amp; founders</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">Brands I&apos;ve worked with</h2>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div ref={clientsTrackRef} className="flex w-max">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="text-center group shrink-0 w-28 md:w-32 px-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-2xl overflow-hidden bg-white border border-black/[0.08] shadow-sm group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-[#2A4F3C]/30 transition-all duration-300">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-[#6B7280] font-medium group-hover:text-[#111827] transition-colors truncate">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long Form Videos */}
      <section id="portfolio" ref={longFormRef} className="py-24 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Long form that holds attention</h2>
            <p className="text-[#6B7280] mt-2 text-lg">Story-driven edits that keep your audience watching to the end.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {longFormVideos.map((video, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 hover:border-[#2A4F3C]/20 transition-all duration-300"
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

      {/* Short Form Videos */}
      <section ref={shortFormRef} className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <Eyebrow>Short Form</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Reels built to go viral</h2>
            <p className="text-[#6B7280] mt-2 text-lg">Vertical content engineered for reach, saves and follows.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {shortFormVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 hover:border-[#2A4F3C]/20 transition-all duration-300"
              >
                <div className="aspect-[9/16]">
                  {'instagramId' in video ? (
                    <InstagramEmbed
                      reelId={video.instagramId!}
                      title={video.title}
                      className="w-full h-full"
                    />
                  ) : (
                    <YouTubeEmbed
                      videoId={video.youtubeId!}
                      title={video.title}
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" ref={featuresRef} className="py-24 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <Eyebrow>Services</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Everything done for you</h2>
            <p className="text-[#6B7280] mt-2 text-lg">A complete editing service, so you can stay focused on creating.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FAFAF8] rounded-2xl p-6 border border-black/[0.06] hover:shadow-md hover:-translate-y-1 hover:border-[#2A4F3C]/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] text-[#2A4F3C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2A4F3C] group-hover:text-white transition-all duration-300">
                    <div className="w-5 h-5">
                      {featureIcons[index]}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-mono text-[#9CA3AF] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="font-semibold text-[#111827]">{feature.title}</h3>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" ref={processRef} className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">From brief to final cut in 3 steps</h2>
            <p className="text-[#6B7280] mt-2 text-lg">A simple, no-stress workflow built around your time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-7 border border-black/[0.06] hover:shadow-md hover:-translate-y-1 hover:border-[#2A4F3C]/20 transition-all duration-300"
              >
                <span className="text-5xl font-bold text-[#EAF3ED] absolute top-5 right-6 select-none">{item.step}</span>
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#2A4F3C] text-white font-bold flex items-center justify-center mb-5 shadow-sm shadow-emerald-200">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-[#111827] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <Eyebrow>Social proof</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">What clients say</h2>
            <p className="text-[#6B7280] mt-2 text-lg">Real messages from creators and brands I&apos;ve worked with.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 hover:border-[#2A4F3C]/20 transition-all duration-300 bg-[#FAFAF8]"
              >
                <img
                  src={testimonial.screenshot}
                  alt={`${testimonial.platform} testimonial`}
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

      {/* FAQ */}
      <section id="faq" ref={faqRef} className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-16">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Frequently asked</h2>
          </div>
          <div className="divide-y divide-black/[0.06]">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-semibold text-[#111827] pr-8 leading-relaxed group-hover:text-[#2A4F3C] transition-colors">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${openFaq === index ? 'bg-[#2A4F3C] text-white' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#2A4F3C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative text-center flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-6">Get in touch</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 max-w-2xl leading-[1.05]">
            Let&apos;s make your next video your best one.
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-md">Tell me about your project — I&apos;ll show you exactly how I can help you grow.</p>
          <a href={CTA_LINK} target="_blank">
            <button className="inline-flex items-center gap-3 bg-white text-[#2A4F3C] px-7 py-4 rounded-lg font-bold hover:bg-emerald-50 active:scale-[0.97] transition-all text-base shadow-lg">
              Work with me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
          <p className="mt-5 text-sm text-emerald-200">No commitment · Reply within 24h</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <p className="text-sm text-[#9CA3AF]">© 2026 King Osei</p>
          <p className="text-sm text-[#9CA3AF] font-medium">Video Editor</p>
        </div>
      </footer>
    </div>
  )
}
