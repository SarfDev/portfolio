"use client"

import { useEffect, useState } from 'react'

export interface ShortVideo {
  title: string
  youtubeId?: string
  instagramId?: string
  vimeoId?: string
  /** Optional custom cover image in /public (e.g. "/shorts/reel-1.jpg") */
  poster?: string
}

interface ShortCardProps {
  video: ShortVideo
  className?: string
}

const platformIcons = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38c.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
      <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
      <circle cx="18.41" cy="5.59" r="1.44" />
    </svg>
  ),
  vimeo: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.185-3.876 3.446-5.755 6.785-5.65 2.479.06 3.646 1.664 3.502 4.82z" />
    </svg>
  ),
}

function resolve(video: ShortVideo) {
  if (video.vimeoId) {
    return {
      platform: 'vimeo' as const,
      label: 'Reel',
      src: `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&playsinline=1`,
      allow: 'autoplay; fullscreen; picture-in-picture',
    }
  }
  if (video.instagramId) {
    return {
      platform: 'instagram' as const,
      label: 'Reel',
      src: `https://www.instagram.com/reel/${video.instagramId}/embed/captioned`,
      allow: 'autoplay; encrypted-media; picture-in-picture',
    }
  }
  return {
    platform: 'youtube' as const,
    label: 'Short',
    src: `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1`,
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  }
}

export default function ShortCard({ video, className = "" }: ShortCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  // maxresdefault doesn't exist for every video — step down to hqdefault, then to the gradient cover
  const [thumbStep, setThumbStep] = useState(0)
  const { platform, label, src, allow } = resolve(video)

  // Vimeo has no predictable thumbnail URL: oEmbed hands it over, but only for
  // videos that aren't private. Private ones simply keep the gradient cover.
  const [vimeoCover, setVimeoCover] = useState<string | null>(null)
  useEffect(() => {
    if (platform !== 'vimeo' || video.poster) return
    const controller = new AbortController()
    fetch(
      `https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F${video.vimeoId}&width=720`,
      { signal: controller.signal },
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data?.thumbnail_url && setVimeoCover(data.thumbnail_url))
      .catch(() => {})
    return () => controller.abort()
  }, [platform, video.poster, video.vimeoId])

  const youtubeThumbs = ['maxresdefault', 'hqdefault']
  const cover = video.poster ?? vimeoCover ?? (platform === 'youtube' && thumbStep < youtubeThumbs.length
    ? `https://img.youtube.com/vi/${video.youtubeId}/${youtubeThumbs[thumbStep]}.jpg`
    : null)

  return (
    <div
      className={`group relative aspect-[9/16] overflow-hidden rounded-[20px] border border-black/[0.08] bg-[#0B0F0D] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2A4F3C]/30 hover:shadow-[0_24px_50px_-20px_rgba(42,79,60,0.45)] ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={src}
          title={video.title}
          className="absolute inset-0 h-full w-full"
          scrolling="no"
          allow={allow}
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${video.title}`}
          className="absolute inset-0 h-full w-full cursor-pointer text-left"
        >
          {/* Cover */}
          {cover ? (
            <img
              key={cover}
              src={cover}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              onError={() => setThumbStep((step) => step + 1)}
            />
          ) : (
            <div
              className={`absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06] ${
                platform === 'instagram'
                  ? 'bg-[linear-gradient(140deg,#833AB4_0%,#E1306C_55%,#F77737_100%)]'
                  : 'bg-[linear-gradient(150deg,#1E3A2C_0%,#2A4F3C_45%,#0B0F0D_100%)]'
              }`}
            >
              <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:14px_14px]" />
              <div className="absolute -right-8 -bottom-6 w-32 text-white/10">
                {platformIcons[platform]}
              </div>
            </div>
          )}

          {/* Legibility scrim */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.28)_100%)]" />

          {/* Platform badge */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md ring-1 ring-white/15">
            <span className="w-3.5 h-3.5">{platformIcons[platform]}</span>
            {label}
          </span>

          {/* Play affordance */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-xl ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:scale-110 group-active:scale-95 md:h-16 md:w-16">
              <svg className="ml-0.5 h-5 w-5 text-[#2A4F3C] md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>

          {/* Title */}
          <span className="absolute inset-x-0 bottom-0 block p-3 md:p-4">
            <span className="block text-[13px] font-semibold leading-snug text-white drop-shadow-sm md:text-[15px]">
              {video.title}
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
