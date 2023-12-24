"use client";
import tickSound from "../../../public/audio/tick.mp3";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";

interface TooltipProps {
  text: string;
  description?: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right" | undefined;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  description,
  position = "top",
}) => {
  const [play] = useSound(tickSound, { preload: true });

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  const getTooltipStyle = () => {
    const positionStyles = {
      bottom: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "100%",
      },
      left: {
        position: "absolute",
        right: "100%",
        top: "50%",
        transform: "translateY(-50%)",
      },
      right: {
        position: "absolute",
        left: "100%",
        top: "50%",
        transform: "translateY(-50%)",
      },
      top: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "100%",
      },
    };
    return positionStyles[position];
  };

  useEffect(() => {
    if (showTooltip === true) {
      play();
    }
  }, [showTooltip]);

  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {showTooltip && !isSmallScreen && (
          <div
            style={{
              width: "max-content",
              backgroundColor: "#262626",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.75rem",
              zIndex: 1,
              opacity: 0, // Initial opacity
              animation: "pop 0.3s ease-in-out forwards",
              ...(getTooltipStyle() as React.CSSProperties),
            }}
          >
            <p className="text-xs font-semibold">{text}</p>
            {description && (
              <p className="text-xs text-neutral-400">{description}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;

