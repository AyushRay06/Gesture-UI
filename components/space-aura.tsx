"use client"
import React, { useEffect } from "react"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"

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
      <div className="flex w-full items-center justify-center">
        <h1 className="text-5xl font-bold">
          Component Library For web Morden Website
        </h1>
        <motion.button
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{ scale: 0.985 }}
        >
          Start free trail
        </motion.button>
      </div>
    </motion.section>
  )
}
