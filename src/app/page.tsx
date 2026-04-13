"use client"

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import portfolioData from '@/data/portfolio.json'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Inline SVG icons — no emoji, no external dependency
const featureIcons = [
  // Unlimited Revisions — refresh loop
  <svg key="refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 4v6h6M23 20v-6h-6" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>,
  // Hook Focused — target
  <svg key="target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Custom Storyboard — layout grid
  <svg key="layout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // Direct Support — message
  <svg key="message" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Fast Delivery — clock
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>,
  // Pro Tools — sliders
  <svg key="sliders" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
  </svg>,
]

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)
  const longFormRef = useRef<HTMLDivElement>(null)
  const shortFormRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const clients = portfolioData.clients
  const longFormVideos = portfolioData.longFormVideosEN
  const shortFormVideos = portfolioData.shortFormVideosEN

  const features = [
    {
      title: "Unlimited Revisions",
      description: "We work together until you're 100% satisfied with the result"
    },
    {
      title: "Hook Focused",
      description: "First 3 seconds optimized to grab attention and boost retention"
    },
    {
      title: "Custom Storyboard",
      description: "Tailored to your brand avatar and content strategy"
    },
    {
      title: "Direct Support",
      description: "WhatsApp/Telegram communication for fast responses"
    },
    {
      title: "Fast Delivery",
      description: "Long form: 2–7 days · Reels: 3h–1 day based on complexity"
    },
    {
      title: "Pro Tools",
      description: "Premiere Pro, After Effects, DaVinci Resolve"
    }
  ]

  const faqs = [
    {
      question: "What's your turnaround time?",
      answer: "Long form videos: 5–7 days for complex animations, 2–3 days for simpler edits. Reels/Shorts: 1 day for complex animations, 3 hours for simple videos."
    },
    {
      question: "What software do you use?",
      answer: "I use industry-standard tools: Adobe Premiere Pro for editing, After Effects for motion graphics and animations, and DaVinci Resolve for color grading."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes. Unlimited revisions are included. I'll keep working on your video until you're completely satisfied with the result."
    },
    {
      question: "How do we collaborate?",
      answer: "You send me the raw files via SwissTransfer or Google Drive along with your brief and references. I edit the video and upload it to Frame.io for quick and efficient revisions."
    },
    {
      question: "How do we stay in touch?",
      answer: "We communicate via WhatsApp or Telegram for fast and direct communication throughout the project."
    },
    {
      question: "What's your pricing?",
      answer: "Pricing depends on project complexity and requirements. I also offer packages for long-term collaborations. Contact me for a quote."
    }
  ]

  const testimonials = [
    {
      platform: "WhatsApp",
      screenshot: "/testimonials/primo.png",
      description: "WhatsApp message"
    },
    {
      platform: "Instagram",
      screenshot: "/testimonials/secondo.png",
      description: "Direct message"
    },
    {
      platform: "Email",
      screenshot: "/testimonials/terzo.png",
      description: "Email review"
    }
  ]

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }

    const sections = [clientsRef, longFormRef, shortFormRef, featuresRef, testimonialsRef, faqRef]

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A]">

      {/* Navigation — floating pill */}
      <nav className="fixed top-5 inset-x-0 z-50 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-full px-5 py-3">
          <span className="text-[#F0EFED] font-semibold tracking-tight text-sm">King Osei</span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#home" className="text-[#888] hover:text-[#F0EFED] transition-colors text-sm">Home</a>
            <a href="#portfolio" className="text-[#888] hover:text-[#F0EFED] transition-colors text-sm">Portfolio</a>
            <a href="#features" className="text-[#888] hover:text-[#F0EFED] transition-colors text-sm">Features</a>
            <a href="#faq" className="text-[#888] hover:text-[#F0EFED] transition-colors text-sm">FAQ</a>
          </div>

          <a
            href="https://twitter.com/messages/compose?recipient_id=1800031539557748736"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#C49A45] active:scale-[0.97] transition-all"
          >
            Work with me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-[#888] hover:text-[#F0EFED] transition-colors"
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
          <div className="mt-2 bg-[#111111]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 space-y-1">
            <a href="#home" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#portfolio" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#features" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#faq" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href="https://twitter.com/messages/compose?recipient_id=1800031539557748736"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C49A45] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work with me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero — left-aligned */}
      <section id="home" ref={heroRef} className="min-h-[100dvh] flex items-center pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-8">
              Video Editor
            </p>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] tracking-tight text-[#F0EFED] mb-6">
              Stand out<br />
              in your<br />
              niche.
            </h1>
            <p className="text-lg text-[#888] max-w-sm mb-10 leading-relaxed">
              Grow your brand with editing that works.
            </p>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1800031539557748736"
              target="_blank"
            >
              <button className="inline-flex items-center gap-3 bg-[#D4A853] text-[#0A0A0A] px-7 py-4 rounded-full font-semibold hover:bg-[#C49A45] active:scale-[0.97] transition-all text-base">
                Work with me
                <span className="w-6 h-6 rounded-full bg-[#0A0A0A]/15 flex items-center justify-center text-sm leading-none">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Worked With */}
      <section ref={clientsRef} className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#555] text-center mb-12">
            Worked with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {clients.map((client, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/[0.08] group-hover:border-white/[0.2] transition-all duration-300">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-[#888] group-hover:text-[#F0EFED] transition-colors">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Form Videos */}
      <section id="portfolio" ref={longFormRef} className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">Long Form Videos</h2>
            <p className="text-[#888] mt-2">Engaging content that keeps your audience watching</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {longFormVideos.map((video, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
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
      <section ref={shortFormRef} className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">Short Form</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">Short Form Videos</h2>
            <p className="text-[#888] mt-2">Vertical content built for social growth</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {shortFormVideos.map((video, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
              >
                <div className="aspect-[9/16]">
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

      {/* Features — 2-col numbered list */}
      <section id="features" ref={featuresRef} className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">What I offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-t border-white/[0.08] py-8 pr-8 flex gap-5 group"
              >
                <span className="text-xs font-mono text-[#444] pt-1 w-6 flex-shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-5 h-5 text-[#D4A853] flex-shrink-0">
                      {featureIcons[index]}
                    </div>
                    <h3 className="font-semibold text-[#F0EFED] text-sm">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">Social proof</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">What clients say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 bg-[#111111]"
              >
                <img
                  src={testimonial.screenshot}
                  alt={`${testimonial.platform} testimonial`}
                  className="w-full h-full object-contain"
                />
                <div className="px-4 py-3 border-t border-white/[0.06]">
                  <p className="text-xs font-mono text-[#555] uppercase tracking-[0.1em]">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — no card boxes, separator only */}
      <section id="faq" ref={faqRef} className="py-24 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">Frequently asked</h2>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-white/[0.08]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-medium text-[#F0EFED] pr-8 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-[#555] flex-shrink-0 text-xl font-light leading-none w-5 text-center">
                    {openFaq === index ? '×' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#888] leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* CTA — dark background, no blue gradient */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-6">Get in touch</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F0EFED] tracking-tight mb-10 max-w-2xl leading-[1.05]">
            Ready to grow your audience?
          </h2>
          <a
            href="https://twitter.com/messages/compose?recipient_id=1800031539557748736"
            target="_blank"
          >
            <button className="inline-flex items-center gap-3 bg-[#D4A853] text-[#0A0A0A] px-7 py-4 rounded-full font-semibold hover:bg-[#C49A45] active:scale-[0.97] transition-all text-base">
              Let's work together
              <span className="w-6 h-6 rounded-full bg-[#0A0A0A]/15 flex items-center justify-center text-sm leading-none">→</span>
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <p className="text-xs text-[#555]">© 2026 King Osei</p>
          <p className="text-xs text-[#555] font-mono">Video Editor</p>
        </div>
      </footer>
    </div>
  )
}
