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

export default function HomeIT() {
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
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const clients = portfolioData.clients
  const longFormVideos = portfolioData.longFormVideosIT
  const shortFormVideos = portfolioData.shortFormVideosIT

  const features = [
    { title: "Revisioni Illimitate", description: "Lavoriamo insieme finché non sei soddisfatto al 100% del risultato" },
    { title: "Focus su Hook", description: "Primi 3 secondi ottimizzati per catturare l'attenzione e aumentare la retention" },
    { title: "Storyboard Personalizzato", description: "Creato su misura per l'avatar del tuo brand e la strategia dei contenuti" },
    { title: "Supporto Diretto", description: "Comunicazione WhatsApp/Telegram per risposte rapide" },
    { title: "Consegna Veloce", description: "Long form: 2–7 giorni · Reels: 3h–1 giorno in base alla complessità" },
    { title: "Strumenti Pro", description: "Premiere Pro, After Effects, DaVinci Resolve" }
  ]

  const stats = [
    { value: "50+", label: "Video Consegnati" },
    { value: "8", label: "Clienti Serviti" },
    { value: "3h", label: "Consegna più Rapida" },
    { value: "100%", label: "Tasso di Soddisfazione" }
  ]

  const faqs = [
    { question: "Quali sono i tempi di consegna?", answer: "Video long form: 5–7 giorni per animazioni complesse, 2–3 giorni per edit più semplici. Reels/Shorts: 1 giorno per animazioni complesse, 3 ore per video semplici." },
    { question: "Quali software utilizzi?", answer: "Utilizzo strumenti professionali standard del settore: Adobe Premiere Pro per il montaggio, After Effects per motion graphics e animazioni, e DaVinci Resolve per il color grading." },
    { question: "Offri revisioni?", answer: "Sì. Le revisioni illimitate sono incluse. Continuerò a lavorare sul tuo video finché non sarai completamente soddisfatto del risultato." },
    { question: "Come collaboriamo?", answer: "Mi invii i file raw tramite SwissTransfer o Google Drive insieme al brief e ai reference. Edito il video e lo carico su Frame.io per revisioni veloci ed efficaci." },
    { question: "Come restiamo in contatto?", answer: "Comunichiamo tramite WhatsApp o Telegram per una comunicazione veloce e diretta durante tutto il progetto." },
    { question: "Qual è il prezzo?", answer: "Il prezzo dipende dalla complessità e dai requisiti del progetto. Offro anche pacchetti per collaborazioni a lungo termine. Contattami per un preventivo." }
  ]

  const testimonials = [
    { platform: "WhatsApp", screenshot: "/testimonials/primo.png", description: "Messaggio WhatsApp" },
    { platform: "Instagram", screenshot: "/testimonials/secondo.png", description: "Direct Message" },
    { platform: "Email", screenshot: "/testimonials/terzo.png", description: "Recensione Email" }
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

    const sections = [statsRef, clientsRef, longFormRef, shortFormRef, featuresRef, testimonialsRef, faqRef]
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
          <span className="text-[#111827] font-bold tracking-tight text-base">King Osei</span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">Home</a>
            <a href="#portfolio" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">Portfolio</a>
            <a href="#features" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">Servizi</a>
            <a href="#faq" className="text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">FAQ</a>
          </div>

          <a
            href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-[#1B4FD8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1641B8] active:scale-[0.97] transition-all shadow-sm"
          >
            Lavoriamo insieme
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Apri menu"
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
            <a href="#home" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#portfolio" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#features" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Servizi</a>
            <a href="#faq" className="block py-2.5 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <div className="pt-3 border-t border-black/[0.06]">
              <a
                href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#1B4FD8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1641B8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lavoriamo insieme
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" ref={heroRef} className="min-h-[100dvh] flex items-center pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EFF6FF] rounded-full translate-x-1/2 -translate-y-1/3 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EFF6FF] rounded-full -translate-x-1/3 translate-y-1/4 opacity-40" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1B4FD8] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-widest">
              Video Editor
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#111827] mb-6">
              Distinguiti nella tua <span className="text-[#1B4FD8]">nicchia.</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-md mb-10 leading-relaxed">
              Fai crescere il tuo brand con un editing che funziona. Video professionali che catturano e convertono.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
                target="_blank"
              >
                <button className="inline-flex items-center gap-3 bg-[#1B4FD8] text-white px-7 py-4 rounded-lg font-semibold hover:bg-[#1641B8] active:scale-[0.97] transition-all text-base shadow-md shadow-blue-200">
                  Lavoriamo insieme
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors text-sm font-medium">
                Vedi il portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Video VSL recente */}
            <div className="mt-14 w-full max-w-4xl">
              <div className="aspect-video rounded-2xl overflow-hidden border border-black/[0.08] shadow-lg bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1197611523?title=0&byline=0&portrait=0"
                  title="VSL recente"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-[#1B4FD8] font-semibold text-base">video VSL recente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#1B4FD8] mb-2">{stat.value}</p>
                <p className="text-sm text-[#6B7280] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lavorato con */}
      <section ref={clientsRef} className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-3">Fidato dai creator</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">Lavorato con</h2>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div ref={clientsTrackRef} className="flex w-max">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="text-center group shrink-0 w-28 md:w-32 px-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-2xl overflow-hidden bg-white border border-black/[0.08] shadow-sm group-hover:shadow-md group-hover:border-[#1B4FD8]/20 transition-all duration-300">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Long Form Videos</h2>
            <p className="text-[#6B7280] mt-2 text-lg">Contenuti coinvolgenti che mantengono l'attenzione del tuo pubblico</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {longFormVideos.map((video, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-lg hover:border-[#1B4FD8]/20 transition-all duration-300"
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3">Short Form</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Short Form Videos</h2>
            <p className="text-[#6B7280] mt-2 text-lg">Contenuti verticali per la crescita sui social</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {shortFormVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-lg hover:border-[#1B4FD8]/20 transition-all duration-300"
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3">Servizi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Cosa offro</h2>
            <p className="text-[#6B7280] mt-2 text-lg">Tutto ciò di cui hai bisogno per contenuti video professionali</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FAFAF8] rounded-2xl p-6 border border-black/[0.06] hover:shadow-md hover:border-[#1B4FD8]/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1B4FD8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B4FD8] group-hover:text-white transition-all duration-300">
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

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3">Feedback</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Cosa dicono i clienti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-lg hover:border-[#1B4FD8]/20 transition-all duration-300 bg-white"
              >
                <img
                  src={testimonial.screenshot}
                  alt={`Testimonial ${testimonial.platform}`}
                  className="w-full h-full object-contain"
                />
                <div className="px-4 py-3 border-t border-black/[0.06] bg-[#FAFAF8]">
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
      <section id="faq" ref={faqRef} className="py-24 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B4FD8] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">Domande frequenti</h2>
          </div>
          <div className="divide-y divide-black/[0.06]">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-semibold text-[#111827] pr-8 leading-relaxed group-hover:text-[#1B4FD8] transition-colors">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${openFaq === index ? 'bg-[#1B4FD8] text-white' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>
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
      <section className="py-32 bg-[#1B4FD8] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 mb-6">Contattami</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 max-w-2xl leading-[1.05]">
            Pronto a far crescere il tuo pubblico?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-md">Creiamo contenuti che si distinguono e convertono i viewer in fan.</p>
          <a
            href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
            target="_blank"
          >
            <button className="inline-flex items-center gap-3 bg-white text-[#1B4FD8] px-7 py-4 rounded-lg font-bold hover:bg-blue-50 active:scale-[0.97] transition-all text-base shadow-lg">
              Lavoriamo insieme
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
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
