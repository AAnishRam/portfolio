"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/navbar/page";
import Portfolio from "@/components/portfolio/page";

export default function Page() {
  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Navbar />
        <Portfolio />
      </div>
    </AnimatedBackground>
  );
}
