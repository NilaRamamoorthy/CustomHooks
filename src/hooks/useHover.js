import { useRef, useState, useEffect } from "react";

export function useHover() {

  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);
    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  
  return [isHovered, ref];
}
