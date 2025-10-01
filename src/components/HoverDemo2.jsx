import React from "react";
import { useHover } from "../hooks/useHover";

export default function HoverDemo2() {
  const [isHovered, ref] = useHover();

  return (
    <div
      ref={ref}
      className="relative w-64 h-40 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src="https://www.thesprucepets.com/thmb/o_g7TLzhsEZi2dPxdIADKDpOn9M=/6095x0/filters:no_upscale():strip_icc()/stages-of-puppy-development-2804675-hero-d6906018203d45dfa05393bf7c27a93c.jpg"
        alt="Cute Dog"
        className="w-full h-full object-cover"
      />
      {isHovered && (
        <div className="dog absolute inset-0 bg-black flex items-center justify-center text-white font-semibold">
          Cute Dog 🐶
        </div>
      )}
    </div>
  );
}
