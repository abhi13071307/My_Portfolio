// src/components/Hero.jsx
import About from "./About";
import React from "react";

/**
 * Hero with left = About-card (compact) and right = big framed square (visual)
 * Keeps coral theme and responsive layout.
 */

export default function Hero() {
  const TAGS = ["Backend Development", "Algorithmic Trading", "Full-Stack Web Apps"];

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-3 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: About-card (compact) */}
        <div>
          <div className="inline-block text-xs tracking-widest uppercase text-[var(--coral)]/90 mb-3">
            Full-Stack Developer
          </div>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              I build scalable web apps with clean APIs & delightful UIs.
            </h1>
            <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">
              Focused on React, Node/NestJS, and PostgreSQL. I design reliable schemas, clear APIs,
              and fast frontends that feel polished.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <a href="#projects" className="btn-coral">View Projects</a>
            <a href="#contact" className="btn-coral-outline">Contact Me</a>
          </div>
        </div>

        {/* RIGHT: Large framed square (visual) */}
       {/* RIGHT: About section integrated */}
        <About />

      </div>
    </section>
  );
}
