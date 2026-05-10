import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Layers3,
  Sparkles,
  Cpu,
  Rocket,
} from 'lucide-react'

const skills = [
  { name: 'C++', level: '80%' },
  { name: 'Java', level: '90%' },
  { name: 'HTML', level: '95%' },
  { name: 'CSS', level: '90%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'React', level: '82%' },
  { name: 'SQL', level: '85%' },
  { name: 'Spring MVC', level: '85%' },
  { name: 'Spring Boot', level: '82%' },
  { name: 'Hibernate ORM', level: '80%' },
  { name: 'REST API', level: '78%' },
]

const categories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'cyan',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'purple',
    skills: [
      'Java',
      'Spring MVC',
      'Spring Boot',
      'Hibernate ORM',
      'REST API',
    ],
  },
  {
    title: 'Database & Tools',
    icon: Database,
    color: 'pink',
    skills: [
      'SQL',
      'MySQL',
      'Git',
      'GitHub',
      'C++',
    ],
  },
]

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#020617]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full" />

      {/* Grid */}
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
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl text-cyan-300 mb-6">
            <Sparkles size={16} />

            <span className="uppercase tracking-[0.25em] text-sm">
              My Expertise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Skills &
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Technologies
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Combining frontend creativity with backend architecture
            to build scalable, fast, and modern web applications.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* SKILL CATEGORY CARDS */}
        {/* ================================================= */}

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  p-8
                  shadow-[0_0_40px_rgba(34,211,238,0.05)]
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

                {/* Icon */}
                <div
                  className={`
                    relative z-10
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-8
                    ${
                      category.color === 'cyan'
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : category.color === 'purple'
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-pink-500/10 text-pink-400'
                    }
                  `}
                >
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-2xl font-bold mb-6 relative z-10
                    ${
                      category.color === 'cyan'
                        ? 'text-cyan-400'
                        : category.color === 'purple'
                        ? 'text-purple-400'
                        : 'text-pink-400'
                    }
                  `}
                >
                  {category.title}
                </h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className={`
                        px-4 py-2 rounded-xl border text-sm font-medium
                        ${
                          category.color === 'cyan'
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                            : category.color === 'purple'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                            : 'bg-pink-500/10 text-pink-300 border-pink-500/20'
                        }
                      `}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative */}
                <Cpu
                  size={18}
                  className="absolute top-6 right-6 text-white/10"
                />
              </motion.div>
            )
          })}
        </div>

        {/* ================================================= */}
        {/* TECHNICAL PROFICIENCY */}
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
            mt-24
            rounded-[2.5rem]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-10 md:p-14
            overflow-hidden
          "
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

          {/* Heading */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5 mb-14">

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Layers3
                  className="text-cyan-400"
                  size={30}
                />
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-black">
                  Technical Proficiency
                </h3>

                <p className="text-slate-400 mt-2">
                  Expertise across frontend, backend & tools
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
              <Rocket size={18} />

              <span className="tracking-wide">
                Performance Optimized
              </span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="relative z-10 grid md:grid-cols-2 gap-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-5
                  hover:bg-white/[0.05]
                  transition-all
                  duration-300
                "
              >
                {/* Skill Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg group-hover:text-cyan-300 transition">
                    {skill.name}
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Track */}
                <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

                  {/* Progress */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-purple-500
                      shadow-[0_0_20px_rgba(34,211,238,0.5)]
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}