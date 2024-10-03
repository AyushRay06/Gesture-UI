"use client"

import React, { useEffect } from "react"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const SpaceAura = () => {
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [])

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-5xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl sm:text-5xl md:text-7xl font-medium  text-transparent  ">
          A library for animated UI components.
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          This is a website where you can discover pre written animated
          components for you website. All you need to do is copy the code in
          your projects
        </p>
        <motion.button
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          style={{
            border,
            boxShadow,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Get started for free
          <ArrowRight className="transotion" />
        </motion.button>
      </div>
    </motion.section>
  )
}
