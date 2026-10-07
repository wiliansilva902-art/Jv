"use client"

import { useEffect } from "react"

export function SiteProtection() {
  useEffect(() => {
    const prevent = (event: Event) => event.preventDefault()
    const preventShortcuts = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && ["c", "s", "u", "p"].includes(event.key.toLowerCase())) {
        event.preventDefault()
      }
    }

    document.addEventListener("contextmenu", prevent)
    document.addEventListener("copy", prevent)
    document.addEventListener("cut", prevent)
    document.addEventListener("dragstart", prevent)
    document.addEventListener("keydown", preventShortcuts)

    return () => {
      document.removeEventListener("contextmenu", prevent)
      document.removeEventListener("copy", prevent)
      document.removeEventListener("cut", prevent)
      document.removeEventListener("dragstart", prevent)
      document.removeEventListener("keydown", preventShortcuts)
    }
  }, [])

  return null
}
