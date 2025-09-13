'use client'

import { useEffect } from 'react'

export default function MoneyTagScript() {
  useEffect(() => {
    // Cria o elemento <script>
    const script = document.createElement('script')
    script.dataset.zone = '9867295'
    script.src = 'https://groleegni.net/vignette.min.js'
    script.async = true

    // Garante que target existe, fallback para body
    const target = [document.documentElement, document.body].filter(Boolean).pop() || document.body
    target.appendChild(script)

    // Cleanup caso o componente seja desmontado
    return () => {
      if (target.contains(script)) {
        target.removeChild(script)
      }
    }
  }, [])

  return null
}
