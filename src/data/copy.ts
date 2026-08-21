export interface Testimonial {
  screenshot: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface PortfolioCopy {
  ctaLink: string
  navCta: string
  hero: {
    badge: string
    titleStart: string
    titleAccent: string
    subtitle: string
    videoTitle: string
    videoCaption: string
    cta: string
  }
  clients: {
    eyebrow: string
    title: string
  }
  stats: Stat[]
  work: {
    eyebrow: string
    title: string
    subtitle: string
  }
  testimonials: {
    eyebrow: string
    title: string
    subtitle: string
    items: Testimonial[]
  }
  finalCta: {
    eyebrow: string
    title: string
    subtitle: string
    button: string
    note: string
  }
  footer: {
    copyright: string
    role: string
  }
}

export const copyIT: PortfolioCopy = {
  ctaLink: "https://calendly.com/kingsarfo/chiamata-conoscitiva",
  navCta: "Lavoriamo insieme",
  hero: {
    badge: "Disponibile per nuovi progetti",
    titleStart: "Montaggi che rendono il tuo brand",
    titleAccent: "impossibile da scrollare.",
    subtitle:
      "Editing long form per creator e founder — hook che catturano in 3 secondi e un ritmo che trattiene fino alla fine.",
    videoTitle: "VSL recente",
    videoCaption: "Edit VSL recente",
    cta: "Prenota una call",
  },
  clients: {
    eyebrow: "Scelto da creator e founder",
    title: "Brand con cui ho lavorato",
  },
  stats: [
    { value: "50+", label: "Video consegnati" },
    { value: "9", label: "Brand serviti" },
    { value: "3h", label: "Consegna più rapida" },
    { value: "100%", label: "Tasso di soddisfazione" },
  ],
  work: {
    eyebrow: "Portfolio",
    title: "Long form che trattiene l'attenzione",
    subtitle: "Edit story-driven che tengono il pubblico incollato fino alla fine.",
  },
  testimonials: {
    eyebrow: "Feedback",
    title: "Cosa dicono i clienti",
    subtitle: "Messaggi reali da creator e brand con cui ho lavorato.",
    items: [
      { screenshot: "/testimonials/primo.png", description: "Messaggio WhatsApp" },
      { screenshot: "/testimonials/secondo.png", description: "Direct Message" },
      { screenshot: "/testimonials/terzo.png", description: "Recensione Email" },
    ],
  },
  finalCta: {
    eyebrow: "Contattami",
    title: "Rendiamo il tuo prossimo video il migliore di sempre.",
    subtitle: "Raccontami il tuo progetto — ti mostro esattamente come posso aiutarti a crescere.",
    button: "Prenota una call",
    note: "Nessun impegno · Risposta entro 24h",
  },
  footer: {
    copyright: "© 2026 King Osei",
    role: "Video Editor",
  },
}
