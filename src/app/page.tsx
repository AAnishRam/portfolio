"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  GitlabIcon,
  LinkedinIcon,
  VideoIcon,
  InstagramIcon,
  ArrowRight,
  Download,
} from "lucide-react";
import PlaceholderImage from "../components/PlaceholderImage";
import AnimatedBackground from "../components/AnimatedBackground";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-center justify-between px-8 py-6 backdrop-blur-sm"
        >
          <motion.div
            className="text-3xl font-bold text-gray-800 font-poppins cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Anish.
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["portfolio", "about me", "my blog", "reviews", "contact me"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className={`text-gray-600 hover:text-gray-800 transition-all relative font-medium tracking-wide ${
                    item === "portfolio" ? "text-gray-800" : ""
                  }`}
                  whileHover={{ y: -2, color: "#1f2937" }}
                >
                  {item}
                  {item === "portfolio" && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    />
                  )}
                </motion.a>
              )
            )}
          </div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              TwitterIcon,
              GitlabIcon,
              LinkedinIcon,
              VideoIcon,
              InstagramIcon,
            ].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/70 backdrop-blur-sm rounded-full transition-all cursor-pointer group"
              >
                <Icon
                  size={20}
                  className="text-gray-600 group-hover:text-gray-800 transition-colors"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>

        {/* Main Content */}
        <div className="flex items-center min-h-[calc(100vh-100px)] px-8">
          {/* Left Side - Vertical Text */}
          <motion.div
            className="hidden lg:flex flex-col items-center space-y-8 fixed left-8 top-1/2 transform -translate-y-1/2 z-10"
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
              className="relative flex items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Large "anish" Text */}
              <motion.div
                className="absolute -left-20 top-1/2 transform -translate-y-1/2 -rotate-90 text-6xl lg:text-8xl font-bold text-gray-200 select-none font-poppins"
                initial={{ opacity: 0, rotate: -135, scale: 0.8 }}
                animate={{ opacity: 1, rotate: -90, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 1.2,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                anish
              </motion.div>

              {/* Profile Image */}
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
                    <PlaceholderImage alt="anish" className="w-full h-full" />
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
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-80 shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    x: [0, 5, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-60 shadow-lg"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
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
              {/* Vertical "missed out on my" text */}
              <motion.div
                className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-sm text-gray-400 whitespace-nowrap hidden xl:block font-light tracking-widest uppercase"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 90 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                missed out on my newsletter
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 font-poppins leading-tight"
                variants={itemVariants}
              >
                Why Me
              </motion.h1>

              <motion.div className="space-y-4 mb-8" variants={itemVariants}>
                <div className="h-80 overflow-hidden relative scroll-container">
                  <div className="absolute animate-scroll w-full">
                    <div className="space-y-8">
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        Because I craft with care, not just code or design,
                        <br /> Each pixel placed, each thought a line.
                        <br /> Not chasing trends that fade too fast,
                        <br /> But building things that truly last.
                        <br />
                        <br /> Because I listen — not just hear —
                        <br /> To dreams you hold, to goals held dear.
                        <br /> I bridge your vision with my skill,
                        <br /> Turning quiet hopes into something real.
                        <br />
                        <br /> Because I seek the soul in art,
                        <br /> The human pulse in every part.
                        <br /> Not just to build, but to ignite,
                        <br /> To shape your story into light.
                        <br />
                        <br /> So why me?
                        <br /> Because I blend the mind and heart,
                        <br /> In every project, I live my part.
                        <br /> Not just a maker, but a muse —
                        <br /> To craft the path that you would choose.
                      </p>
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        Because I craft with care, not just code or design,
                        <br /> Each pixel placed, each thought a line.
                        <br /> Not chasing trends that fade too fast,
                        <br /> But building things that truly last.
                        <br />
                        <br /> Because I listen — not just hear —
                        <br /> To dreams you hold, to goals held dear.
                        <br /> I bridge your vision with my skill,
                        <br /> Turning quiet hopes into something real.
                        <br />
                        <br /> Because I seek the soul in art,
                        <br /> The human pulse in every part.
                        <br /> Not just to build, but to ignite,
                        <br /> To shape your story into light.
                        <br />
                        <br /> So why me?
                        <br /> Because I blend the mind and heart,
                        <br /> In every project, I live my part.
                        <br /> Not just a maker, but a muse —
                        <br /> To craft the path that you would choose.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  At missed advice my it no sister. Miss told ham dull knew see
                  she spot near can. Spirit her entire her called. Detract yet
                  delight written farther his general.
                </p>
              </motion.div>

              <motion.button
                className="group flex items-center space-x-3 border-2 border-gray-800 px-8 py-4 hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium tracking-wide uppercase text-sm"
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

              {/* Latest Work Section */}
              <motion.div className="mt-16" variants={itemVariants}>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 font-poppins">
                  Latest Work
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item, index) => (
                    <motion.div
                      key={item}
                      className="aspect-square bg-gray-200 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.6 + index * 0.1,
                        duration: 0.4,
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                      }}
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-yellow-500 transition-all duration-500 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="#"
                  className="inline-block mt-6 text-cyan-500 hover:text-cyan-600 transition-colors font-medium tracking-wide"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.4 }}
                >
                  view all →
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default Portfolio;
