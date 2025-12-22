import React, { useState } from "react";
import { Flower } from "./Flower";

type FlowerConfig = {
  id: number;
  top: number;      // %
  left: number;     // %
  size: number;     // px
};

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateFlowers(): FlowerConfig[] {
  const count = Math.floor(randomBetween(8, 20));
  const arr: FlowerConfig[] = [];

  for (let i = 0; i < count; i++) {
    arr.push({
      id: i,
      top: randomBetween(0, 100),
      left: randomBetween(0, 100),
      size: randomBetween(60, 200)
    });
  }

  return arr;
}

export const BackgroundFlowers: React.FC = () => {
  const [flowers] = useState<FlowerConfig[]>(generateFlowers);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute"
          style={{
            top: `${flower.top}%`,
            left: `${flower.left}%`,
            width: `${flower.size}px`,
            height: `${flower.size}px`
          }}
        >
          <Flower style={{ width: "100%", height: "100%" }} />
        </div>
      ))}
    </div>
  );
};
