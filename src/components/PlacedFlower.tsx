import React from "react";
import { Flower } from "./Flower";

export type PlacedFlowerProps = {
  /** Позиция: можно задавать top/left/right/bottom как "20%" или "100px" */
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;

  /** Размер цветка: число (px) или строка ("10rem", "150px") */
  size?: number | string;

  /** Поворот в градусах */
  rotation?: number;

  /** Прозрачность (0–1) */
  opacity?: number;

  /** Доп. классы Tailwind */
  className?: string;

  /** z-index, если нужно */
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
