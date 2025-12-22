import React from "react";

export type PlacedFlowerProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;

  size?: number | string;
  rotation?: number;
  opacity?: number;
  className?: string;
  zIndex?: number;

  children?: React.ReactNode;
};

export const PlacedFlower: React.FC<PlacedFlowerProps> = ({
  top,
  left,
  right,
  bottom,
  size = 120,
  rotation = 0,
  opacity = 1,
  className = "",
  zIndex = 0,
  children
}) => {
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
        width: sizeValue,
        height: sizeValue,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        zIndex,
      }}
    >
      {children}
    </div>
  );
};
