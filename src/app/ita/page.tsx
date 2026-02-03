"use client"

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import portfolioData from '@/data/portfolio.json'
import { ChevronDown } from 'lucide-react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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

  // Import data from JSON
  const clients = portfolioData.clients
  const longFormVideos = portfolioData.longFormVideosIT
  const shortFormVideos = portfolioData.shortFormVideosIT

  // Features data
  const features = [
    {
      icon: "♾️",
      title: "Revisioni Illimitate",
      description: "Lavoriamo insieme finché non sei soddisfatto al 100% del risultato"
    },
    {
      icon: "🎯",
      title: "Focus su Hook",
      description: "Primi 3 secondi ottimizzati per catturare l'attenzione e aumentare la retention"
    },
    {
      icon: "🎨",
      title: "Storyboard Personalizzato",
      description: "Creato su misura per l'avatar del tuo brand e la strategia dei contenuti"
    },
    {
      icon: "💬",
      title: "Supporto Diretto",
      description: "Comunicazione WhatsApp/Telegram per risposte rapide"
    },
    {
      icon: "⚡",
      title: "Consegna Veloce",
      description: "Long form: 2-7 giorni | Reels: 3h-1 giorno in base alla complessità"
    },
    {
      icon: "🎬",
      title: "Strumenti Pro",
      description: "Premiere Pro, After Effects, DaVinci Resolve"
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: "Quali sono i tempi di consegna?",
      answer: "Video long form: 5-7 giorni per animazioni complesse, 2-3 giorni per edit più semplici. Reels/Shorts: 1 giorno per animazioni complesse, 3 ore per video semplici."
    },
    {
      question: "Quali software utilizzi?",
      answer: "Utilizzo strumenti professionali standard del settore: Adobe Premiere Pro per il montaggio, After Effects per motion graphics e animazioni, e DaVinci Resolve per il color grading."
    },
    {
      question: "Offri revisioni?",
      answer: "Sì! Le revisioni illimitate sono incluse. Continuerò a lavorare sul tuo video finché non sarai completamente soddisfatto del risultato."
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
      answer: "Il prezzo dipende dalla complessità e dai requisiti del progetto. Offro anche pacchetti per collaborazioni a lungo termine. Contattami per un preventivo personalizzato!"
    }
  ]

  // Testimonials data
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
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power2.out"
        }
      )
    }

    // Section animations
    const sections = [clientsRef, longFormRef, shortFormRef, featuresRef, testimonialsRef, faqRef]
    
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
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
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="text-2xl font-bold text-white">King Osei</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors font-medium">Home</a>
            <a href="#portfolio" className="text-white hover:text-blue-400 transition-colors font-medium">Portfolio</a>
            <a href="#features" className="text-white hover:text-blue-400 transition-colors font-medium">Servizi</a>
            <a href="#faq" className="text-white hover:text-blue-400 transition-colors font-medium">FAQ</a>
          </div>
          
          <button 
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-3">
              <a href="#home" className="block py-2 text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#portfolio" className="block py-2 text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
              <a href="#features" className="block py-2 text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>Servizi</a>
              <a href="#faq" className="block py-2 text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="pt-32 pb-24 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-8">
            
            {/* 🎬 LOTTIE ANIMATION CONTAINER */}
            <div 
              id="lottie-container" 
              className="w-full max-w-2xl mx-auto mb-8 h-64 flex items-center justify-center"
            >
              {/* Inserisci qui la tua animazione Lottie */}
              <div className="text-gray-400 text-sm">
                {/* Placeholder - La tua animazione Lottie andrà qui */}
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white tracking-tight">
              Distinguiti nella <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                tua nicchia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Fai crescere il tuo brand con un editing che funziona.
            </p>
            
            <a href="https://calendly.com/kingsarfo/chiamata-conoscitiva" target="_blank">
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:shadow-[0_0_60px_rgba(37,99,235,0.8)] transition-all duration-300 transform hover:scale-105"
              >
                Lavoriamo insieme
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section ref={clientsRef} className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-sm font-medium text-gray-500 text-center mb-12 tracking-wider uppercase">Lavorato con</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-base md:text-lg text-white group-hover:text-blue-400 transition-colors">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Form Videos */}
      <section id="portfolio" ref={longFormRef} className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Long Form Videos</h2>
            <p className="text-lg text-gray-400">Contenuti coinvolgenti che mantengono l'attenzione del tuo pubblico</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {longFormVideos.map((video, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.02]"
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
      <section ref={shortFormRef} className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Short Form Videos</h2>
            <p className="text-lg text-gray-400">Contenuti virali per la crescita sui social media</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {shortFormVideos.map((video, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.05]"
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

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cosa Offro</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Video editing professionale che porta risultati
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cosa Dicono i Clienti</h2>
            <p className="text-lg text-gray-400">Feedback reale da persone reali</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.03] bg-gradient-to-br from-gray-800 to-gray-900"
              >
                <img 
                  src={testimonial.screenshot} 
                  alt={`Testimonial ${testimonial.platform}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Domande Frequenti</h2>
            <p className="text-lg text-gray-400">Tutto quello che devi sapere</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-750 transition-colors"
                >
                  <span className="font-semibold text-lg text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto a far crescere i tuoi contenuti?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Creiamo qualcosa di straordinario insieme
          </p>
          <a href="https://calendly.com/kingsarfo/chiamata-conoscitiva" target="_blank">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.7)] transition-all duration-300 transform hover:scale-105"
            >
              Lavoriamo insieme
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-gray-400 font-medium">
            © 2025 King Osei. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  )
}