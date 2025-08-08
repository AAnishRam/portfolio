"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profile from "@/assests/profile.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
  },
};

export default function Portfolio() {
  return (
    <div className="flex items-center min-h-[calc(100vh-100px)] px-8">
      {/* Left Side - Vertical Text */}
      <motion.div
        className="hidden lg:flex flex-col items-center space-y-8 mr-8 self-start pt-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div
          className="text-sm text-gray-500 transform -rotate-90 whitespace-nowrap font-light tracking-widest uppercase"
          style={{ transformOrigin: "center" }}
          whileHover={{ color: "#374151", scale: 1.05 }}
        >
          download cv
        </motion.div>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.div
          className="text-sm text-gray-500 transform -rotate-90 whitespace-nowrap font-light tracking-widest uppercase"
          style={{ transformOrigin: "center" }}
          whileHover={{ color: "#374151", scale: 1.05 }}
        >
          view reviews
        </motion.div>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        <motion.div
          className="text-sm text-gray-500 transform -rotate-90 whitespace-nowrap font-light tracking-widest uppercase"
          style={{ transformOrigin: "center" }}
          whileHover={{ color: "#374151", scale: 1.05 }}
        >
          my process
        </motion.div>
      </motion.div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center lg:justify-between max-w-7xl mx-auto">
        {/* Hero Image and Text */}
        <motion.div
          className="relative flex items-center self-start pt-3 pl-45"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vertical helper near image */}
          <motion.div
            className="absolute -right-55 top-1/2 transform rotate--180 text-sm text-gray-400 whitespace-nowrap font-light tracking-widest uppercase z-30"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 90 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            missed out on my newsletter
          </motion.div>

          {/* Profile Image + Frame */}
          <motion.div
            className="relative z-10"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
                animate={{
                  background: [
                    "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)",
                    "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #22d3ee 100%)",
                    "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-4 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl overflow-hidden">
                <Image
                  src={profile}
                  alt="anish"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-80 shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-80 shadow-lg"
              animate={{ y: [0, 10, 0], x: [0, 5, 0], scale: [1, 0.9, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-60 shadow-lg"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 max-w-lg lg:ml-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 font-poppins leading-tight"
            variants={itemVariants}
          >
            Why Me
          </motion.h1>

          <motion.div className="space-y-4 mb-8" variants={itemVariants}>
            <div className="h-80 overflow-hidden relative scroll-container">
              <div className="absolute animate-scroll w-full">
                <div className="space-y-8 cursor-default">
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    I speak in semicolons, dream in design,
                    <br /> Where logic and beauty perfectly align.
                    <br /> Not just a coder, but a craftsman of flow,
                    <br /> Turning fleeting ideas into products that glow.
                    <br />
                    <br /> I see the spark in every brief,
                    <br /> The silent need, the hidden grief.
                    <br /> From frontend charm to backend might,
                    <br /> I weave user dreams into seamless delight.
                    <br />
                    <br /> APIs whisper, and pixels respond,
                    <br /> In every line, a deeper bond.
                    <br /> Frameworks bend to thought and feel,
                    <br /> While servers hum with purpose real.
                    <br />
                    <br /> I&apos;m not just here to build what&apos;s due,
                    <br /> But to shape bold futures, code them true.
                    <br /> Tech with a soul — clean, precise,
                    <br /> Where function dances with device.
                    <br />
                    <br /> So <b>Why Me?</b>
                    <br /> Because I craft with clarity and grace,
                    <br /> A human touch in every interface.
                    <br /> Innovation, heart, and clarity —
                    <br /> That&apos;s the blend you&apos;ll find in me.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    I speak in semicolons, dream in design,
                    <br /> Where logic and beauty perfectly align.
                    <br /> Not just a coder, but a craftsman of flow,
                    <br /> Turning fleeting ideas into products that glow.
                    <br />
                    <br /> I see the spark in every brief,
                    <br /> The silent need, the hidden grief.
                    <br /> From frontend charm to backend might,
                    <br /> I weave user dreams into seamless delight.
                    <br />
                    <br /> APIs whisper, and pixels respond,
                    <br /> In every line, a deeper bond.
                    <br /> Frameworks bend to thought and feel,
                    <br /> While servers hum with purpose real.
                    <br />
                    <br /> I&apos;m not just here to build what&apos;s due,
                    <br /> But to shape bold futures, code them true.
                    <br /> Tech with a soul — clean, precise,
                    <br /> Where function dances with device.
                    <br />
                    <br /> So <b>Why Me?</b>
                    <br /> Because I craft with clarity and grace,
                    <br /> A human touch in every interface.
                    <br /> Innovation, heart, and clarity —
                    <br /> That&apos;s the blend you&apos;ll find in me.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.button
            className="group flex items-center cursor-pointer space-x-3 border-2 border-gray-800 px-8 py-4 hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium tracking-wide uppercase text-sm"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>schedule a call</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
