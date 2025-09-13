'use client'

import { useEffect } from 'react'

export default function MoneyTagScript() {
  useEffect(() => {
    const s = document.createElement('script')
    s.dataset.zone = '8892692'
    s.src = 'https://gizokraijaw.net/vignette.min.js'
    s.async = true
    document.body.appendChild(s)
    
    // Cleanup caso o componente seja desmontado
    return () => {
      document.body.removeChild(s)
    }
  }, [])

  return null
}
