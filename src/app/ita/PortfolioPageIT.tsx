import YouTubeEmbed from '@/components/YouTubeEmbed'
import portfolioData from '@/data/portfolio.json'

// Stessa struttura della pagina inglese (src/app/page.tsx), copy in italiano.
// La CTA punta alla call conoscitiva, che e' il canale del mercato italiano.
const CTA_LINK = "https://calendly.com/kingsarfo/chiamata-conoscitiva"

const TESTIMONIALS = [
  "/testimonials/primo.png",
  "/testimonials/secondo.png",
  "/testimonials/terzo.png",
]

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

export default function PortfolioPageIT() {
  const work = portfolioData.longFormVideosIT
  const shorts = portfolioData.shortFormVideos
  const clients = portfolioData.clients

  return (
    <div className="min-h-[100dvh] bg-[#FAFAF8] text-[#111827]">

      <header className="max-w-6xl mx-auto px-6 py-5">
        <span className="font-bold tracking-tight text-base">King Osei</span>
      </header>

      {/* Above the fold: nome e una sola azione a sinistra, il video a destra */}
      <section className="relative overflow-hidden px-6 pb-16">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-[0.8fr_1.7fr] gap-10 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
              Sono <span className="text-gradient">King Osei</span>
            </h1>
            <a href={CTA_LINK} target="_blank">
              <button className="inline-flex items-center gap-3 bg-[#2A4F3C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A2C] transition-colors text-base shadow-lg shadow-emerald-800/30">
                Lavoriamo insieme
                <ArrowIcon />
              </button>
            </a>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden border border-black/[0.08] hero-glow bg-black">
            <iframe
              src={`https://player.vimeo.com/video/${portfolioData.heroVimeoId}?title=0&byline=0&portrait=0`}
              title="Edit recente"
              className="w-full h-full"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Clienti: nome e reach, nessun link che porti via dalla pagina */}
      <section className="px-6 py-16 bg-white border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
            Creator per cui ho montato
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
            {clients.map((client) => (
              <div key={client.name} className="text-center w-28">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-white border border-black/[0.08]">
                  <img src={client.image} alt={client.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold leading-snug">{client.handle || client.name}</p>
                {client.subs && <p className="text-xs text-[#6B7280] mt-0.5">{client.subs}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lavori recenti */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">Lavori recenti</h2>

          <div className="space-y-16">
            {work.map((item, index) => {
              // Righe alternate: video a sinistra, poi cliente a sinistra, e cosi' via
              const videoOnLeft = index % 2 === 0
              return (
                <div key={item.youtubeId || item.vimeoId} className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  <div className={`aspect-video rounded-2xl overflow-hidden border border-black/[0.06] bg-black ${videoOnLeft ? 'md:order-1' : 'md:order-2'}`}>
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

                  <div className={videoOnLeft ? 'md:order-2' : 'md:order-1'}>
                    {item.logo ? (
                      <img src={item.logo} alt={item.heading} className="h-10 md:h-12 w-auto" />
                    ) : (
                      <div className="flex items-center gap-4">
                        {item.avatar && (
                          <img
                            src={item.avatar}
                            alt={item.heading}
                            loading="lazy"
                            className="w-16 h-16 rounded-full object-cover border border-black/[0.08] flex-shrink-0"
                          />
                        )}
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{item.heading}</h3>
                          {item.meta && <p className="text-[#6B7280] mt-1 text-lg">{item.meta}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Short form: verticali, per i clienti che cercano reel e short */}
      {shorts.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">Short e reel</h2>
            <p className="text-center text-[#6B7280] text-lg mb-14">Montaggi verticali pensati per il feed.</p>

            {/* Griglia tipo feed: due colonne sul telefono, quattro da desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {shorts.map((item) => (
                <div key={item.vimeoId}>
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-black/[0.06] bg-black">
                    <iframe
                      src={`https://player.vimeo.com/video/${item.vimeoId}?title=0&byline=0&portrait=0`}
                      title={item.heading}
                      className="w-full h-full"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="flex items-center gap-2.5 mt-3">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.heading}
                        loading="lazy"
                        className="w-8 h-8 rounded-full object-cover border border-black/[0.08] flex-shrink-0"
                      />
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug truncate">{item.heading}</p>
                      {item.meta && <p className="text-xs text-[#6B7280] truncate">{item.meta}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial: strisce larghe, una colonna sola per tenerle leggibili */}
      <section className="px-6 py-20 bg-white border-y border-black/[0.06]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">Cosa dicono i clienti</h2>
          <div className="space-y-8">
            {TESTIMONIALS.map((screenshot) => (
              <div key={screenshot} className="rounded-2xl overflow-hidden border border-black/[0.06] bg-[#FAFAF8]">
                <img src={screenshot} alt="Messaggio di un cliente" loading="lazy" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[#2A4F3C] text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4">
            Facciamo il tuo prossimo video.
          </h2>
          <p className="text-emerald-100 text-lg mb-10">Prenota una call e raccontami a cosa stai lavorando.</p>
          <a href={CTA_LINK} target="_blank">
            <button className="inline-flex items-center gap-3 bg-white text-[#2A4F3C] px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-base shadow-lg">
              Prenota una call
              <ArrowIcon />
            </button>
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 bg-white border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-sm text-[#9CA3AF]">© 2026 King Osei</p>
          <p className="text-sm text-[#9CA3AF] font-medium">Video Editor</p>
        </div>
      </footer>
    </div>
  )
}
