"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Button } from "./ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        setShouldRender(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <Button
      variant="default"
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 transition-transform ring ring-border ring-offset-3 ring-offset-background duration-400 ${
        isVisible
          ? "animate-in fade-in slide-in-from-bottom-8"
          : "animate-out fade-out slide-out-to-bottom-8"
      }`}
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="size-5" />
    </Button>
  );
}
