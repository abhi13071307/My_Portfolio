// src/components/About.jsx
import React from "react";

/**
 * Compact About section — photo + professional journey only.
 * The Technical Skills panel is removed and spacing adjusted.
 * Works great inside Hero as the right column.
 */

const TAGS = ["Backend Development", "Algorithmic Trading", "Full-Stack Web Apps"];

export default function About() {
  return (
    <section id="about" className="flex justify-center items-center py-10 px-4">
      {/* Outer coral gradient frame */}
      <div className="max-w-4xl w-full bg-gradient-to-br from-[rgba(255,107,107,0.3)] to-[rgba(255,107,107,0.1)] p-[2px] rounded-3xl shadow-[0_0_40px_rgba(255,107,107,0.05)]">
        {/* Inner dark card */}
        <div className="bg-slate-950/80 rounded-[1.4rem] px-6 md:px-10 py-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Me</h2>
            <div className="mx-auto mt-3 w-20 md:w-28 h-0.5 bg-slate-700 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Column: Photo & summary */}
            <div className="flex flex-col items-center text-center">
              <div
                className="relative rounded-full p-1"
                style={{
                  background:
                    "radial-gradient(120px 120px at 10% 10%, rgba(255,107,107,0.14), rgba(0,0,0,0))",
                  borderRadius: "9999px",
                  padding: "6px",
                }}
              >
                <div className="rounded-full overflow-hidden w-40 h-40 md:w-48 md:h-48 bg-slate-900 border border-slate-800">
                  <img
                    src="/abhi-photo.jpg"
                    alt="Abhishek Kumar"
                    className="w-full h-full object-cover block rounded-full animate-float"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                AI/ML student • Game dev enthusiast
              </h3>
              <p className="mt-2 text-sm text-slate-400 max-w-xs">
                Crypto tinkerer • Building full-stack apps with a focus on scalable APIs and polished frontends.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {TAGS.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Professional Journey */}
            <article className="surface">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">Professional Journey</h4>
                  <p className="text-xs text-slate-400">A quick look at my experience</p>
                </div>
                
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                I’m an engineer with a strong foundation in backend development. I’ve built APIs,
                designed resilient PostgreSQL schemas, and developed automation workflows for
                trading systems. My focus is on crafting high-performance applications that blend
                data-driven logic with clean, efficient design.
              </p>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                My work bridges backend architecture, algorithmic logic, and polished UI/UX
                development — bringing together code quality and creativity.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <button className="btn-coral-ghost">Backend Development</button>
                <button className="btn-coral-ghost">Algorithmic Trading</button>
                <button className="btn-coral-ghost">AI/ML Engineering</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
