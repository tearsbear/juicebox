import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  delayAfterFinish?: number; // Delay in milliseconds before restarting
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delayAfterFinish = 3000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0); // Used to force re-render and restart animation

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = text.split(" ");
    container.innerHTML = "";

    const animateWords = () => {
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.style.opacity = "0.3";
        span.style.transition = "opacity 1s ease";
        container.appendChild(span);

        setTimeout(() => {
          span.style.opacity = "1";
        }, index * 120);
      });

      // Schedule the next animation cycle
      setTimeout(() => {
        setKey((prevKey) => prevKey + 1); // Force re-render to restart animation
      }, words.length * 120 + delayAfterFinish);
    };

    animateWords();
  }, [text, delayAfterFinish, key]);

  return <div ref={containerRef} className="animated-text" key={key}></div>;
};

export default AnimatedText;
