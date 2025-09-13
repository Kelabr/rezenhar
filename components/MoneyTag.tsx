'use client'

import { useEffect } from 'react'

export default function MoneyTag() {
  useEffect(() => {
    const script = document.createElement('script')
    script.dataset.zone = '8892599'
    script.src = 'https://forfrogadiertor.com/tag.min.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup caso o componente seja desmontado
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
