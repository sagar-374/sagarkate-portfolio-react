import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Sparkles,
  MousePointer2,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center px-6 pt-28"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[#020617]" />

      <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] bg-cyan-400/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================================= */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* ========================================================= */}
        {/* LEFT SIDE */}
        {/* ========================================================= */}

        <div>

          {/* Availability Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-2xl text-cyan-300 shadow-lg shadow-cyan-500/10"
          >
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-400"
            />

            <span className="text-sm tracking-wide">
              Available for Internship & Full-Time Roles
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em]"
          >
            Crafting

            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Future-Ready
            </span>

            Digital Products
          </motion.h1>

          {/* Name */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
            className="mt-8 flex items-center gap-3"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />

            <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
              Hi, I'm
              <span className="text-cyan-400 font-semibold"> Sagar Kate</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Java Full Stack Developer focused on building
            scalable applications, premium interfaces, and
            immersive digital experiences with React,
            Spring Boot, Tailwind CSS, and modern frontend
            technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
            className="flex flex-wrap gap-5 mt-12"
          >
            {/* Projects Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold shadow-[0_10px_50px_rgba(34,211,238,0.3)]"
            >
              {/* Shine Effect */}
              <motion.div
                initial={{ x: '-120%' }}
                whileHover={{ x: '120%' }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              />

              <span className="relative flex items-center gap-3">
                Explore Projects

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </span>
            </motion.a>

            {/* Resume Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
              href="/assets/Sagar_Kate_Resume.pdf"
              download
              className="group px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 transition-all duration-300 text-white flex items-center gap-3"
            >
              Resume

              <Download
                size={18}
                className="group-hover:-translate-y-1 transition"
              />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.7}
            className="flex flex-wrap gap-12 mt-16"
          >
            {[
              {
                number: '10+',
                label: 'Projects Built',
              },
              {
                number: '1+',
                label: 'Years Learning',
              },
              {
                number: '100%',
                label: 'Responsive Design',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group"
              >
                <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  {item.number}
                </h3>

                <p className="mt-2 text-slate-400 group-hover:text-slate-300 transition">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT SIDE */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex justify-center"
        >
          {/* Main Wrapper */}
          <div className="relative">

            {/* Rotating Gradient Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 blur-md opacity-70"
            />

            {/* Orbit Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-8 rounded-full border border-cyan-400/10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full" />

              {/* Image Border */}
              <div className="relative p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.18)]">

                {/* Inner Border */}
                <div className="p-2 rounded-full bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-cyan-400/40">

                  {/* Image */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src="/Images/sk_myphoto.jpeg"
                    alt="Profile"
                    className="
                      w-[320px]
                      h-[320px]
                      md:w-[460px]
                      md:h-[460px]
                      rounded-full
                      object-cover
                      object-top
                    "
                  />
                </div>
              </div>

              {/* Floating Mini Card */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-10 -left-10 hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0f172a]/80 border border-white/10 backdrop-blur-2xl shadow-xl"
              >
                <Sparkles
                  size={18}
                  className="text-cyan-400"
                />

                <div>
                  <p className="text-sm text-white font-medium">
                    UI / UX Focused
                  </p>

                  <p className="text-xs text-slate-400">
                    Modern Interfaces
                  </p>
                </div>
              </motion.div>

              {/* Floating Mini Card */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 -right-10 hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0f172a]/80 border border-white/10 backdrop-blur-2xl shadow-xl"
              >
                <MousePointer2
                  size={18}
                  className="text-cyan-400"
                />

                <div>
                  <p className="text-sm text-white font-medium">
                    Smooth Experience
                  </p>

                  <p className="text-xs text-slate-400">
                    Fast & Responsive
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* SCROLL INDICATOR */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-slate-500">
          Scroll
        </span>

        <div className="mt-3 w-[1px] h-14 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  )
}