'use client'
import React from "react";

const DecorativeCircle = ({ className = "", size = 100, opacity = 0.5 }) => {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        zIndex: 0,
      }}
    />
  );
};

export default DecorativeCircle;
