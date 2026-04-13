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
  // Revisioni Illimitate — refresh loop
  <svg key="refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 4v6h6M23 20v-6h-6" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>,
  // Focus su Hook — target
  <svg key="target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Storyboard Personalizzato — layout grid
  <svg key="layout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // Supporto Diretto — message
  <svg key="message" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Consegna Veloce — clock
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>,
  // Strumenti Pro — sliders
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
  const longFormVideos = portfolioData.longFormVideosIT
  const shortFormVideos = portfolioData.shortFormVideosIT

  const features = [
    {
      title: "Revisioni Illimitate",
      description: "Lavoriamo insieme finché non sei soddisfatto al 100% del risultato"
    },
    {
      title: "Focus su Hook",
      description: "Primi 3 secondi ottimizzati per catturare l'attenzione e aumentare la retention"
    },
    {
      title: "Storyboard Personalizzato",
      description: "Creato su misura per l'avatar del tuo brand e la strategia dei contenuti"
    },
    {
      title: "Supporto Diretto",
      description: "Comunicazione WhatsApp/Telegram per risposte rapide"
    },
    {
      title: "Consegna Veloce",
      description: "Long form: 2–7 giorni · Reels: 3h–1 giorno in base alla complessità"
    },
    {
      title: "Strumenti Pro",
      description: "Premiere Pro, After Effects, DaVinci Resolve"
    }
  ]

  const faqs = [
    {
      question: "Quali sono i tempi di consegna?",
      answer: "Video long form: 5–7 giorni per animazioni complesse, 2–3 giorni per edit più semplici. Reels/Shorts: 1 giorno per animazioni complesse, 3 ore per video semplici."
    },
    {
      question: "Quali software utilizzi?",
      answer: "Utilizzo strumenti professionali standard del settore: Adobe Premiere Pro per il montaggio, After Effects per motion graphics e animazioni, e DaVinci Resolve per il color grading."
    },
    {
      question: "Offri revisioni?",
      answer: "Sì. Le revisioni illimitate sono incluse. Continuerò a lavorare sul tuo video finché non sarai completamente soddisfatto del risultato."
    },
    {
      question: "Come collaboriamo?",
      answer: "Mi invii i file raw tramite SwissTransfer o Google Drive insieme al brief e ai reference. Edito il video e lo carico su Frame.io per revisioni veloci ed efficaci."
    },
    {
      question: "Come restiamo in contatto?",
      answer: "Comunichiamo tramite WhatsApp o Telegram per una comunicazione veloce e diretta durante tutto il progetto."
    },
    {
      question: "Qual è il prezzo?",
      answer: "Il prezzo dipende dalla complessità e dai requisiti del progetto. Offro anche pacchetti per collaborazioni a lungo termine. Contattami per un preventivo."
    }
  ]

  const testimonials = [
    {
      platform: "WhatsApp",
      screenshot: "/testimonials/primo.png",
      description: "Messaggio WhatsApp"
    },
    {
      platform: "Instagram",
      screenshot: "/testimonials/secondo.png",
      description: "Direct Message"
    },
    {
      platform: "Email",
      screenshot: "/testimonials/terzo.png",
      description: "Recensione Email"
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
            <a href="#features" className="text-[#888] hover:text-[#F0EFED] transition-colors text-sm">Servizi</a>
            <a href="#faq" className="text-[#888] hover:text-[#F0EFED] transition-colors text-sm">FAQ</a>
          </div>

          <a
            href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#C49A45] active:scale-[0.97] transition-all"
          >
            Lavoriamo insieme
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-[#888] hover:text-[#F0EFED] transition-colors"
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
          <div className="mt-2 bg-[#111111]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 space-y-1">
            <a href="#home" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#portfolio" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#features" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Servizi</a>
            <a href="#faq" className="block py-2.5 text-[#888] hover:text-[#F0EFED] transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A0A0A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C49A45] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lavoriamo insieme
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
              Distinguiti<br />
              nella tua<br />
              nicchia.
            </h1>
            <p className="text-lg text-[#888] max-w-sm mb-10 leading-relaxed">
              Fai crescere il tuo brand con un editing che funziona.
            </p>
            <a
              href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
              target="_blank"
            >
              <button className="inline-flex items-center gap-3 bg-[#D4A853] text-[#0A0A0A] px-7 py-4 rounded-full font-semibold hover:bg-[#C49A45] active:scale-[0.97] transition-all text-base">
                Lavoriamo insieme
                <span className="w-6 h-6 rounded-full bg-[#0A0A0A]/15 flex items-center justify-center text-sm leading-none">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Lavorato con */}
      <section ref={clientsRef} className="py-20 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#555] text-center mb-12">
            Lavorato con
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
            <p className="text-[#888] mt-2">Contenuti coinvolgenti che mantengono l'attenzione del tuo pubblico</p>
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
            <p className="text-[#888] mt-2">Contenuti verticali per la crescita sui social</p>
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">Servizi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">Cosa offro</h2>
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-3">Feedback</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">Cosa dicono i clienti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 bg-[#111111]"
              >
                <img
                  src={testimonial.screenshot}
                  alt={`Testimonial ${testimonial.platform}`}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#F0EFED] tracking-tight">Domande frequenti</h2>
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
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A853] mb-6">Contattami</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F0EFED] tracking-tight mb-10 max-w-2xl leading-[1.05]">
            Pronto a far crescere il tuo pubblico?
          </h2>
          <a
            href="https://calendly.com/kingsarfo/chiamata-conoscitiva"
            target="_blank"
          >
            <button className="inline-flex items-center gap-3 bg-[#D4A853] text-[#0A0A0A] px-7 py-4 rounded-full font-semibold hover:bg-[#C49A45] active:scale-[0.97] transition-all text-base">
              Lavoriamo insieme
              <span className="w-6 h-6 rounded-full bg-[#0A0A0A]/15 flex items-center justify-center text-sm leading-none">→</span>
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <p className="text-xs text-[#555]">© 2025 King Osei</p>
          <p className="text-xs text-[#555] font-mono">Video Editor</p>
        </div>
      </footer>
    </div>
  )
}
