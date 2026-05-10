import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <main>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}