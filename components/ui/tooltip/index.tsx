"use client";
import React, { useState } from "react";

interface TooltipProps {
  text: string;
  description?: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, description }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "max-content",
            backgroundColor: "#f5f5f5",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontSize: "0.75rem",
            zIndex: 1,
            opacity: 0, // Initial opacity
            animation: "pop 0.3s ease-in-out forwards", // Add animation
          }}
        >
          <p className="text-xs font-medium">{text}</p>
          <p className="text-xs text-neutral-500">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;

