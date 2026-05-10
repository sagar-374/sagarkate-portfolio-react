import { motion } from 'framer-motion'
import {
  Code2,
  Layout,
  Rocket,
  Sparkles,
  Layers3,
  ShieldCheck,
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

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing scalable, maintainable, and optimized code using modern development standards.',
    color: 'cyan',
  },
  {
    icon: Layout,
    title: 'Modern UI Design',
    desc: 'Designing smooth, interactive, and visually engaging interfaces with premium UX.',
    color: 'purple',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    desc: 'Building high-performance applications optimized for speed and responsiveness.',
    color: 'pink',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================================================= */}
        {/* SECTION HEADING */}
        {/* ================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          className="text-center mb-24"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 backdrop-blur-2xl mb-6">
            <Sparkles size={16} />

            <span className="tracking-[0.25em] uppercase text-sm">
              Get To Know Me
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            About
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {' '}Me
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about crafting scalable applications,
            modern user experiences, and visually polished
            digital products with clean architecture.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* MAIN CONTAINER */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            rounded-[2.5rem]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            overflow-hidden
            shadow-[0_0_80px_rgba(34,211,238,0.08)]
          "
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/10 pointer-events-none" />

          {/* Floating Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16 p-10 md:p-16 items-center">

            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <div>

              {/* Small Intro */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.2}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <Layers3
                  size={16}
                  className="text-cyan-400"
                />

                <span className="text-sm text-slate-300 tracking-wide">
                  Full Stack Developer
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.3}
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight"
              >
                Crafting
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}Modern
                </span>

                <br />

                Digital Experiences
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.4}
                className="mt-8 text-slate-400 leading-relaxed text-lg"
              >
                I am a passionate Java Full Stack Developer focused on
                building responsive, scalable, and visually engaging
                applications. I enjoy transforming ideas into modern
                digital experiences through clean architecture and
                creative UI systems.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.5}
                className="mt-6 text-slate-400 leading-relaxed text-lg"
              >
                My expertise includes React.js, Tailwind CSS,
                Java, Spring Boot, REST APIs, and modern frontend
                technologies. I continuously improve my skills
                through real-world projects and innovative design.
              </motion.p>

              {/* Mini Stats */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.6}
                className="grid grid-cols-3 gap-5 mt-12"
              >
                {[
                  {
                    value: '10+',
                    label: 'Projects',
                  },
                  {
                    value: '1+',
                    label: 'Experience',
                  },
                  {
                    value: '100%',
                    label: 'Responsive',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-5
                      text-center
                    "
                  >
                    <h4 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ================================================= */}
            {/* RIGHT FEATURES */}
            {/* ================================================= */}

            <div className="space-y-6">

              {features.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-2xl
                      p-8
                      transition-all
                      duration-500
                    "
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

                    <div className="relative z-10 flex gap-6 items-start">

                      {/* Icon */}
                      <div
                        className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center
                          ${
                            feature.color === 'cyan'
                              ? 'bg-cyan-500/10 text-cyan-400'
                              : feature.color === 'purple'
                              ? 'bg-purple-500/10 text-purple-400'
                              : 'bg-pink-500/10 text-pink-400'
                          }
                        `}
                      >
                        <Icon size={30} />
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-2xl font-bold mb-3 text-white">
                          {feature.title}
                        </h4>

                        <p className="text-slate-400 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <ShieldCheck
                      size={18}
                      className="absolute top-6 right-6 text-cyan-400/20"
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}