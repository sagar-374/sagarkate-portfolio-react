import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(window.scrollY > 300)
    })
  }, [])

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-cyan-500 p-4 rounded-full shadow-lg"
      >
        <ArrowUp />
      </button>
    )
  )
}