import { useState, useEffect, useMemo } from "react"
import { Flower } from "./Flower"

function useDocumentSize() {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: typeof window !== "undefined" ? document.documentElement.scrollWidth : 0,
    height: typeof window !== "undefined" ? document.documentElement.scrollHeight : 0,
  })

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      setSize({ width: el.scrollWidth, height: el.scrollHeight })
    }
    update()
    window.addEventListener("resize", update)
    window.addEventListener("load", update)
    const id = window.setInterval(update, 500)
    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("load", update)
      window.clearInterval(id)
    }
  }, [])

  return size
}

type FlowerSpot = {
  x: number
  y: number
  r: number
  size: number
  animationDelay: number
  animationDuration: number
}

type GenOptions = {
  width: number
  height: number
  minGap?: number
  minSize?: number
  maxSize?: number
  maxAttemptsPerFlower?: number
}

function generateNonOverlappingFlowers(
  count: number,
  {
    width,
    height,
    minGap = 50,
    minSize = 60,
    maxSize = 240,
    maxAttemptsPerFlower = 500,
  }: GenOptions
): React.ReactNode[] {
  const placed: FlowerSpot[] = []
  const nodes: React.ReactNode[] = []

  for (let i = 0; i < count; i++) {
    let attempts = 0
    let x = 0, y = 0, size = 0, r = 0

    while (attempts++ < maxAttemptsPerFlower) {
      size = minSize + Math.random() * (maxSize - minSize)
      r = size / 2

      x = r + Math.random() * Math.max(1, width - 2 * r)
      y = r + Math.random() * Math.max(1, height - 2 * r)

      const ok = placed.every(p => {
        const dx = x - p.x
        const dy = y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        return dist >= (r + p.r + minGap)
      })

      if (ok) {
        const animationDelay = Math.random() * 5
        const animationDuration = 2 + Math.random() * 4
        
        placed.push({ x, y, r, size, animationDelay, animationDuration })
        
        nodes.push(
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${y - r}px`,
              left: `${x - r}px`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          >
            <Flower style={{ width: "100%", height: "100%" }} />
          </div>
        )
        break
      }
    }
  }

  return nodes
}

export function FlowersBackground({ count = 14 }: { count?: number }) {
  const { width, height } = useDocumentSize()

  const flowers = useMemo(
    () =>
      width && height
        ? generateNonOverlappingFlowers(count, { width, height, minGap: 100 })
        : null,
    [count, width, height]
  )

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-0"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {flowers}
    </div>
  )
}