'use client'

import { motion } from 'framer-motion'

export default function Geometry3DAnimation() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="w-full max-w-xs"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Wheel circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#123A6B"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 100 + 60 * Math.cos(rad)
          const y1 = 100 + 60 * Math.sin(rad)
          const x2 = 100 + 60 * Math.cos(rad + Math.PI)
          const y2 = 100 + 60 * Math.sin(rad + Math.PI)

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F39C12"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            />
          )
        })}

        {/* Center hub */}
        <motion.circle
          cx="100"
          cy="100"
          r="15"
          fill="#F39C12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
        />

        {/* 3D axis lines */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          {/* X axis */}
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="#123A6B"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
          />
          {/* Y axis */}
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="#123A6B"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
          />
        </motion.g>

        {/* Rotating animation */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <circle
            cx="100"
            cy="20"
            r="8"
            fill="#F39C12"
            opacity="0.8"
          />
        </motion.g>
      </motion.svg>
    </div>
  )
}

