import { useEffect, useRef } from "react";

import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current || !outlineRef.current) return;

    const xToDot = gsap.quickTo(dotRef.current, "x", {
      duration: 0.1,
      ease: "power3",
    });
    const yToDot = gsap.quickTo(dotRef.current, "y", {
      duration: 0.1,
      ease: "power3",
    });
    const xToOutline = gsap.quickTo(outlineRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yToOutline = gsap.quickTo(outlineRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMouseMove = (event: MouseEvent): void => {
      xToDot(event.clientX);
      yToDot(event.clientY);
      xToOutline(event.clientX);
      yToOutline(event.clientY);
    };

    const handleMouseOver = (event: MouseEvent): void => {
      const target = event.target;

      if (target instanceof HTMLElement && target.closest(".hoverable")) {
        document.body.classList.add("hovering");
      } else {
        document.body.classList.remove("hovering");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("hovering");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-outline" ref={outlineRef} />
    </>
  );
}
