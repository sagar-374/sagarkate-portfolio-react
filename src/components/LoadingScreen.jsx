import { motion } from 'framer-motion'
import {
  Globe,
  ShieldCheck,
  Wifi,
  Activity,
  Cpu,
} from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(10px)',
      }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[999] bg-[#020617] overflow-hidden flex items-center justify-center"
    >
      {/* ================= Background ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_65%)]" />

      {/* Animated Grid */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0"
      >
        <div className="w-full h-full bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:70px_70px]" />
      </motion.div>

      {/* Floating Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* ================= Main Loader ================= */}
      <div className="relative flex flex-col items-center">

        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <Wifi className="text-cyan-400" size={22} />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <ShieldCheck className="text-cyan-300" size={22} />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Cpu className="text-cyan-200" size={22} />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Activity className="text-cyan-400" size={22} />
          </div>
        </motion.div>

        {/* Pulse Rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeOut',
            }}
            className="absolute rounded-full border border-cyan-400/20"
            style={{
              width: `${170 + i * 70}px`,
              height: `${170 + i * 70}px`,
            }}
          />
        ))}

        {/* Center Core */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="relative w-40 h-40 rounded-full"
        >
          {/* Glow Layers */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl" />

          <div className="absolute inset-[10px] rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.15)]" />

          {/* Spinning Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-[20px] rounded-full border border-dashed border-cyan-300/30"
          />

          {/* Core Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Globe
                className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                size={58}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= Text ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          {/* Heading */}
          <motion.h1
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-4xl md:text-5xl font-black tracking-[0.2em] uppercase"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NETWORK SYNC
            </span>
          </motion.h1>

          {/* Subtext */}
          <p className="mt-4 text-slate-400 tracking-[0.35em] uppercase text-xs md:text-sm">
            Establishing Secure Connection
          </p>

          {/* Status */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="w-3 h-3 rounded-full bg-emerald-400"
            />

            <span className="text-cyan-300 text-sm tracking-[0.25em] uppercase">
              System Online
            </span>
          </div>

          {/* Futuristic Loading Bar */}
          <div className="relative mt-10 w-[320px] h-[5px] rounded-full overflow-hidden bg-white/5 border border-cyan-400/10">
            {/* Moving Glow */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '220%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px]"
            />

            {/* Static Base */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-300/20 to-blue-500/10" />
          </div>

          {/* Percentage */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-5 text-cyan-400 text-sm tracking-[0.4em]"
          >
            100% SECURE
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}