"use client"

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import YouTubeEmbed from '@/components/YouTubeEmbed'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const heroRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)
  const longFormRef = useRef<HTMLDivElement>(null)
  const shortFormRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)


  // Client data
  const clients = [
    {
      name: "Alessio Piacentini",
      image: "/clienti/alessio.jpg"
    },
    {
      name: "Andrew Watt",
      image: "/clienti/ginger.jpg"
    },
    {
      name: "Marco Cappelli",
      image: "/clienti/marco.jpg"
    }
  ]

  // Long form videos data
  const longFormVideos = [
    {
      title: "Creare un sito web con lAI non è mai stato così facile [ Tutorial completo ]",
      youtubeId: "8i4lXshL6j0"
    },
    {
      title: "SAAS",
      youtubeId: "3bisHVntWPU"
    },
    {
      title: "Corporate Training Series",
      youtubeId: "JylQH3O-27Q"
    },
    {
      title: "Product Launch Event",
      youtubeId: "YtFnBwO16_s"
    }
  ]

  // Short form videos data
  const shortFormVideos = [
    {
      title: "Social Media Ad",
      youtubeId: "G4OXdW-W9g8"
    },
    {
      title: "TikTok Trend",
      youtubeId: "KYtCxRwzkT4"
    },
    {
      title: "Instagram Reel",
      youtubeId: "PvlpLH0dQP0"
    },
    {
      title: "YouTube Short",
      youtubeId: "leqVl-6jWik"
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
    const sections = [clientsRef, longFormRef, shortFormRef, testimonialsRef]
    
    sections.forEach((sectionRef, index) => {
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
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">King Osei</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#long-form" className="hover:text-primary transition-colors">Long Form</a>
            <a href="#short-form" className="hover:text-primary transition-colors">Short Form</a>
          </div>
          {/* Mobile menu button */}
          

            <button 
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#long-form" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Long Form</a>
              <a href="#short-form" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Short Form</a>
            </div>
          </div>
        )}
      </nav>

      {/* Landing Page */}
      <section id="home" ref={heroRef} className="pt-24 pb-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Distinguiti nella tua nicchia
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Fai crescere il tuo brand con un editing che funziona.
            </p>
            <a href="https://calendly.com/kingsarfo/chiamata-conoscitiva" target="_blank">
            <Button size="lg" className="text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] transition-all duration-300">
              Lavorare con me
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lavorato Con */}
      <section ref={clientsRef} className="py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-lg font-thin text-center mb-6 text-muted-foreground">Lavorato con</h2>
          
          <div className="flex items-center justify-center space-x-16">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src={client.image} alt={client.name} className="w-full h-full object-cover rounded-3xl" />
                </div>
                <h3 className="font-semibold text-lg">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Form Videos */}
      <section id="long-form" ref={longFormRef} className="py-16 bg-secondary/30">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Long Form Videos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {longFormVideos.map((video, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
      <section id="short-form" ref={shortFormRef} className="py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Short Form Videos</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {shortFormVideos.map((video, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Testimonianze */}
      <section ref={testimonialsRef} className="py-16 bg-secondary/30">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonianze</h2>
          
          <div className=" md:gap-0 md:flex-row flex flex-col gap-4  justify-center space-x-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <p className="text-muted-foreground">
            © 2025 King Osei
          </p>
        </div>
      </footer>
    </div>
  )
}
