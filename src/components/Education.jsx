import { motion } from 'framer-motion'
import {
  GraduationCap,
  School,
  Calendar,
  BookOpen,
} from 'lucide-react'

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
            My Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Education
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-cyan-500/30 ml-4 md:ml-10 space-y-12">

          {/* Bachelor's Degree */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >

            <div className="absolute -left-[14px] top-4 w-7 h-7 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/30"></div>

            <div className="glass rounded-[2rem] p-8 border border-white/10 hover:-translate-y-2 transition duration-300">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <GraduationCap
                    className="text-cyan-400"
                    size={32}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Bachelor of Engineering
                  </h3>

                  <p className="text-slate-400">
                    Electronics & Telecommunication Engineering
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-400">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>2021 - 2025</span>
                </div>

                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Engineering Graduate</span>
                </div>

              </div>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Focused on electronics, communication systems, and software
                development while building strong programming and full stack
                development skills through academic and personal projects.
              </p>

            </div>

          </motion.div>

          {/* Higher Secondary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >

            <div className="absolute -left-[14px] top-4 w-7 h-7 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30"></div>

            <div className="glass rounded-[2rem] p-8 border border-white/10 hover:-translate-y-2 transition duration-300">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <School
                    className="text-purple-400"
                    size={32}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    Higher Secondary Education (HSC)
                  </h3>

                  <p className="text-slate-400">
                    Science
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-400">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>2020 - 2021</span>
                </div>

                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Science Stream</span>
                </div>

              </div>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Built a strong foundation in mathematics, physics,
                and analytical thinking which later supported
                software development and engineering studies.
              </p>

            </div>

          </motion.div>

          {/* Secondary School */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >

            <div className="absolute -left-[14px] top-4 w-7 h-7 rounded-full bg-pink-400 shadow-lg shadow-pink-500/30"></div>

            <div className="glass rounded-[2rem] p-8 border border-white/10 hover:-translate-y-2 transition duration-300">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                  <School
                    className="text-pink-400"
                    size={32}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-pink-400">
                    Secondary School Education (SSC)
                  </h3>

                  <p className="text-slate-400">
                    10th Standard
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-400">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>2018 - 2019</span>
                </div>

                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Secondary Education</span>
                </div>

              </div>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Developed strong academic fundamentals, discipline,
                and problem-solving abilities that became the base
                for higher education and technical learning.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}