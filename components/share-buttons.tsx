"use client"

import { Share2 } from "lucide-react"

export default function ShareButtons() {
  return (
    <div>
      <h3 className="font-bold mb-1">Share this article</h3>
      <div className="flex space-x-4">
        <button 
          className="text-navy hover:text-gold" 
          aria-label="Share on Facebook"
          onClick={() => window.open('https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank')}
        >
          <Share2 className="h-5 w-5" />
        </button>
        <button 
          className="text-navy hover:text-gold" 
          aria-label="Share on Twitter"
          onClick={() => window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank')}
        >
          <Share2 className="h-5 w-5" />
        </button>
        <button 
          className="text-navy hover:text-gold" 
          aria-label="Share on LinkedIn"
          onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href), '_blank')}
        >
          <Share2 className="h-5 w-5" />
        </button>
        <button 
          className="text-navy hover:text-gold" 
          aria-label="Share via Email"
          onClick={() => window.open('mailto:?subject=Check out this article&body=' + encodeURIComponent(window.location.href), '_blank')}
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
} 