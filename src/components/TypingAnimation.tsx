"use client";

import { TypeAnimation } from "react-type-animation";

interface TypingAnimationProps {
  sequence: (string | number)[];
}

export const TypingAnimation = ({ sequence }: TypingAnimationProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      repeat={Infinity}
      wrapper="span"
      speed={40}
      style={{ fontSize: "1.5em", display: "inline-block" }}
    />
  );
};
