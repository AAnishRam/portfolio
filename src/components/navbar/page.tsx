"use client";

import { motion } from "framer-motion";
import {
  TwitterIcon,
  GitlabIcon,
  LinkedinIcon,
  VideoIcon,
  InstagramIcon,
} from "lucide-react";

export default function Navbar() {
  return (
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
        Anish .
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
        {[TwitterIcon, GitlabIcon, LinkedinIcon, VideoIcon, InstagramIcon].map(
          (Icon, index) => (
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
          )
        )}
      </motion.div>
    </motion.nav>
  );
}
