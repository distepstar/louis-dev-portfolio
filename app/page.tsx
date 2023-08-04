"use client";

import React, { useEffect } from "react";
import { About, Hero, Projects, WorkExperience } from "@/components";
import { Element } from "react-scroll";
import { useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <main>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 "
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <Element className="w-full" name="home">
        <Hero />
      </Element>
      <Element className="w-full" name="about">
        <About />
      </Element>
      <Element className="w-full" name="work">
        <WorkExperience />
      </Element>
      <Element className="w-full" name="projects">
        <Projects />
      </Element>
    </main>
  );
}
