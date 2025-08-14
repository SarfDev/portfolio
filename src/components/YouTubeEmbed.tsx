"use client"

import { useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

export default function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className={`w-full h-full ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full cursor-pointer group ${className}`} onClick={handlePlay}>
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
        onError={(e) => {
          // Fallback to medium quality if maxresdefault doesn't exist
          const target = e.target as HTMLImageElement
          target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        }}
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      
      {/* YouTube logo */}
      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
        YouTube
      </div>
    </div>
  )
}
