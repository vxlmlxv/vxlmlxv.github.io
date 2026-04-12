import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";

import CategoryDetailView from "./CategoryDetailView";
import ContactSection from "./ContactSection";
import Loader from "./Loader";
import ManifestoSection from "./ManifestoSection";
import Navigation from "./Navigation";
import ThreeScene from "./3d/ThreeScene";
import BiomeListSection from "./biomes/BiomeListSection";
import HeroSection from "./hero/HeroSection";
import CustomCursor from "./ui/CustomCursor";
import ProjectPreview from "./ui/ProjectPreview";
import { biomeData } from "../lib/data/biomes";
import { useBodyLanguage } from "../lib/hooks/useBodyLanguage";
import { useClock } from "../lib/hooks/useClock";
import { useLenis } from "../lib/hooks/useLenis";
import type { BiomeKey, Language } from "../lib/types";

const DEFAULT_ACCENT = "#b8a2ff";

export default function PortfolioExperience() {
  const [language, setLanguage] = useState<Language>("en");
  const [hoveredBiome, setHoveredBiome] = useState<BiomeKey | null>(null);
  const [renderedCategory, setRenderedCategory] = useState<BiomeKey | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const viewHomeRef = useRef<HTMLDivElement>(null);
  const viewCategoryRef = useRef<HTMLDivElement>(null);
  const pendingOpenRef = useRef<BiomeKey | null>(null);
  const pendingScrollTargetRef = useRef<string | null>(null);

  const lenisRef = useLenis();
  const clock = useClock();

  useBodyLanguage(language);

  const scrollToId = useCallback(
    (id: string) => {
      const element = document.getElementById(id);

      if (!element) return;

      const lenis = lenisRef.current;

      if (lenis) {
        lenis.scrollTo(element, { duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenisRef],
  );

  const openCategory = useCallback((key: BiomeKey) => {
    pendingOpenRef.current = key;
    setHoveredBiome(null);
    setRenderedCategory(key);
  }, []);

  const backToHome = useCallback(
    (scrollTarget?: string) => {
      if (!renderedCategory || !viewHomeRef.current || !viewCategoryRef.current) {
        if (scrollTarget) scrollToId(scrollTarget);
        return;
      }

      pendingScrollTargetRef.current = scrollTarget ?? null;
      setHoveredBiome(null);

      gsap.to(viewCategoryRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (!viewHomeRef.current || !viewCategoryRef.current) return;

          viewCategoryRef.current.style.display = "none";
          viewCategoryRef.current.style.visibility = "hidden";
          viewHomeRef.current.style.display = "block";

          gsap.to(viewHomeRef.current, {
            opacity: 1,
            duration: 0.5,
            pointerEvents: "all",
            onComplete: () => {
              if (pendingScrollTargetRef.current) {
                const target = pendingScrollTargetRef.current;
                pendingScrollTargetRef.current = null;
                scrollToId(target);
              }
            },
          });

          gsap.to(":root", { "--accent": DEFAULT_ACCENT, duration: 1 });
          setRenderedCategory(null);
        },
      });
    },
    [renderedCategory, scrollToId],
  );

  const handleNavigate = useCallback(
    (id: "about" | "biomes" | "contact") => {
      if (renderedCategory) {
        backToHome(id);
        return;
      }

      scrollToId(id);
    },
    [backToHome, renderedCategory, scrollToId],
  );

  const handleBackButton = useCallback(() => {
    if (renderedCategory) {
      backToHome();
    }
  }, [backToHome, renderedCategory]);

  const handleBiomeEnter = useCallback(
    (key: BiomeKey) => {
      setHoveredBiome(key);
      gsap.to(":root", { "--accent": biomeData[key].color, duration: 0.5 });
    },
    [],
  );

  const handleBiomeLeave = useCallback(() => {
    setHoveredBiome(null);
    gsap.to(":root", { "--accent": DEFAULT_ACCENT, duration: 0.5 });
  }, []);

  const handleToggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "ko" : "en"));
  }, []);

  useLayoutEffect(() => {
    let context: gsap.Context | null = null;
    let active = true;

    const initAnimations = async (): Promise<void> => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!active || !rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const timeline = gsap.timeline();

        timeline
          .to(".loader-text span", {
            y: 0,
            duration: 1,
            ease: "power4.out",
          })
          .to(".loader", {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.5,
          })
          .fromTo(
            "#webgl-container",
            { opacity: 0 },
            { opacity: 1, duration: 1.5 },
            "-=0.5",
          )
          .to(
            ".hero-line span",
            {
              y: 0,
              duration: 1.2,
              stagger: 0.2,
              ease: "power4.out",
            },
            "-=1",
          )
          .to(
            ".fade-in-up",
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
            },
            "-=0.8",
          );

        gsap.utils.toArray<HTMLElement>("#view-home section").forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                scrub: false,
              },
            },
          );
        });
      }, rootRef);
    };

    void initAnimations();

    return () => {
      active = false;
      context?.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const pendingCategory = pendingOpenRef.current;

    if (!pendingCategory || !viewHomeRef.current || !viewCategoryRef.current) {
      return;
    }

    const cards = viewCategoryRef.current.querySelectorAll<HTMLElement>(
      ".category-project-card",
    );

    gsap.set(cards, { opacity: 0 });
    pendingOpenRef.current = null;

    gsap.to(viewHomeRef.current, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
      onComplete: () => {
        if (!viewHomeRef.current || !viewCategoryRef.current) return;

        viewHomeRef.current.style.display = "none";
        viewCategoryRef.current.style.display = "block";
        viewCategoryRef.current.style.visibility = "visible";

        gsap.to(viewCategoryRef.current, { opacity: 1, duration: 0.5 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          startAt: { y: 20 },
        });
        gsap.to(":root", {
          "--accent": biomeData[pendingCategory].color,
          duration: 1,
        });
      },
    });
  }, [renderedCategory]);

  return (
    <div ref={rootRef} className="app-shell">
      <Loader />
      <CustomCursor />
      <ThreeScene />
      <ProjectPreview hoveredBiome={hoveredBiome} />
      <Navigation
        language={language}
        onBackToHome={handleBackButton}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />

      <div id="view-home" ref={viewHomeRef} className="smooth-wrapper view-section">
        <HeroSection
          language={language}
          onScrollToAbout={() => scrollToId("about")}
        />
        <ManifestoSection language={language} />
        <BiomeListSection
          language={language}
          onHoverBiome={handleBiomeEnter}
          onLeaveBiome={handleBiomeLeave}
          onOpenCategory={openCategory}
        />
        <ContactSection language={language} clock={clock} />
      </div>

      <CategoryDetailView
        ref={viewCategoryRef}
        categoryKey={renderedCategory}
        language={language}
        onBackToHome={() => backToHome()}
      />
    </div>
  );
}
