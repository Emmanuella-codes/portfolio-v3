import { useEffect, useRef, useState } from "react"

export function useNarrow<T extends Element>(threshold = 760) {
  const ref = useRef<T>(null)
  const [narrow, setNarrow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      if (w < threshold !== narrow) setNarrow(w < threshold)
    })
    ro.observe(el)
    return () => ro.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold])

  return { ref, narrow }
}
