"use client";

import React from "react";

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 600,
  className = "",
  alt = "Placeholder",
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="w-32 h-32 bg-yellow-600/30 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-yellow-700/40 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-800/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
