import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScroll(progress)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-cyan-400 z-[999]"
      style={{ width: `${scroll}%` }}
    />
  )
}