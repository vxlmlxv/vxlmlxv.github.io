import { useEffect, useRef } from "react";

type LenisInstance = {
  destroy(): void;
  raf(time: number): void;
  scrollTo(
    target: HTMLElement | string,
    options?: {
      duration?: number;
      offset?: number;
    },
  ): void;
};

export function useLenis() {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    let animationFrameId = 0;
    let disposed = false;

    const initLenis = async (): Promise<void> => {
      const { default: Lenis } = await import("lenis");

      if (disposed) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis as LenisInstance;

      const raf = (time: number): void => {
        lenis.raf(time);
        animationFrameId = window.requestAnimationFrame(raf);
      };

      animationFrameId = window.requestAnimationFrame(raf);
    };

    void initLenis();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrameId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
