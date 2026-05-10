import { motion } from 'framer-motion'
import {
  ExternalLink,
  FolderKanban,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Smart Attendance System with QR Code',
    desc:
      'QR-based Smart Attendance System with role-based authentication and real-time attendance reporting using Java Full Stack technologies.',
    image: '/Images/Attendance.webp',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    live:
      'https://smart-attendance-system-using-qr-co-three.vercel.app/',
    github:
      'https://github.com/sagar-374/Smart_Attendance_System_using_QR_Code',
  },
  {
    title: 'Student Management System',
    desc:
      'Full-stack student management platform with CRUD operations, RESTful APIs, and PostgreSQL integration.',
    image: '/Images/Student.png',
    tech: ['React', 'Spring Boot', 'REST API'],
    live:
      'https://student-management-system-one-fawn.vercel.app/',
    github:
      'https://github.com/sagar-374/Student_Management_System',
  },
  {
    title: 'Personal Portfolio',
    desc:
      'Responsive developer portfolio showcasing projects, skills, and smooth interactive UI experiences.',
    image: '/Images/Portfolio.png',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    live:
      'https://sagarkate-portfolio.netlify.app/',
    github:
      'https://github.com/sagar-374/sagarkate374-portfolio',
  },
  {
    title: 'News Website',
    desc:
      'Modern responsive news website with dynamic layouts, category-based content, and smooth navigation.',
    image: '/Images/News_Website.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live:
      'https://news-website-dashboard.netlify.app/',
    github:
      'https://github.com/sagar-374/WD-News-Website',
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#020617]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full" />

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
              My Recent Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Projects
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            A collection of modern full-stack applications,
            responsive websites, and real-world development
            projects focused on clean UI and scalable systems.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                shadow-[0_0_50px_rgba(34,211,238,0.06)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="relative overflow-hidden h-[280px]">

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />

                {/* Image */}
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* Floating Icon */}
                <div className="absolute top-5 left-5 z-20 w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                  <FolderKanban
                    className="text-cyan-400"
                    size={24}
                  />
                </div>

                {/* Floating Arrow */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-5 right-5 z-20 w-12 h-12 rounded-xl bg-cyan-400 text-black flex items-center justify-center shadow-lg"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="relative z-10 p-8">

                {/* Title */}
                <h3 className="text-3xl font-black mb-4 group-hover:text-cyan-300 transition duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-7">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="
                        px-4 py-2 rounded-xl
                        border border-cyan-500/20
                        bg-cyan-500/10
                        text-cyan-300
                        text-sm
                        font-medium
                        backdrop-blur-xl
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-cyan-500/20 via-white/10 to-transparent mb-7" />

                {/* Buttons */}
                <div className="flex items-center gap-4">

                  {/* Live Demo */}
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/btn
                      flex items-center gap-3
                      px-5 py-3 rounded-2xl
                      bg-cyan-400 text-black
                      font-semibold
                      shadow-[0_10px_30px_rgba(34,211,238,0.25)]
                    "
                  >
                    <ExternalLink
                      size={18}
                      className="group-hover/btn:rotate-12 transition"
                    />

                    Live Demo
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-3
                      px-5 py-3 rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      hover:bg-white/[0.06]
                      transition
                    "
                  >
                    <FaGithub size={18} />

                    GitHub
                  </motion.a>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/0 group-hover:border-cyan-400/20 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}