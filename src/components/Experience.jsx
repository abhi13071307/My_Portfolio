// src/components/Experience.jsx
import React from "react";

/**
 * Experience section — interactive cards with subtle lift/scale on hover.
 * Content taken from uploaded resume.
 */

const experiences = [
  {
    company: "Pi42 (Crypto Exchange)",
    role: "Quantitative Development / Backend Development Intern",
    location: "Remote",
    period: "2024 (internship)",
    bullets: [
      "Built CRUD APIs with NestJS, Prisma ORM, and PostgreSQL.",
      "Worked on data modeling, API integration, and backtesting algorithms.",
      "Contributed to team projects in agile workflows and participated in testing & debugging.",
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "APIs", "Backtesting"],
    color: "violet",
  },
  {
    company: "Phemesoftware Pvt Ltd (IBM mentorship)",
    role: "Machine Learning Intern",
    location: "Remote",
    period: "2023 (internship)",
    bullets: [
      "Developed a Python-based AI recommendation system under IBM mentorship.",
      "Designed modular, testable code and documented solution workflows.",
      "Implemented ML pipelines and validated results with real data.",
    ],
    tags: ["Python", "Machine Learning", "Recommendation Systems"],
    color: "teal",
  },
];

function Chip({ children, color = "slate" }) {
  const colorMap = {
    violet: "bg-violet-950/40 border-violet-800 text-violet-300",
    teal: "bg-emerald-950/40 border-emerald-800 text-emerald-300",
    slate: "bg-slate-900/40 border-slate-800 text-slate-300",
  };
  return (
    <span
      className={`chip-pill px-3 py-1 rounded-md text-xs font-medium border ${colorMap[color] || colorMap.slate}`}
    >
      {children}
    </span>
  );
}

export default function Experience() {
  const gotoContact = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }
  };

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Work Experience</h2>
        <div className="mx-auto mt-3 w-20 md:w-28 h-0.5 bg-slate-700 rounded"></div>
      </div>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            /* note: added 'group interactive-card' classes for hover/focus effects */
            className="interactive-card group rounded-2xl border border-slate-800 p-6 md:p-8 bg-slate-950/60"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-md grid place-items-center text-white shrink-0"
                  style={{
                    background:
                      exp.color === "violet"
                        ? "linear-gradient(180deg,#2b1055,#4c1d95)"
                        : "linear-gradient(180deg,#064e3b,#066d45)",
                  }}
                >
                  <svg className="w-6 h-6 opacity-90" viewBox="0 0 24 24" fill="none">
                    <path fill="currentColor" d="M3 7a2 2 0 012-2h4V4a2 2 0 012-2h2a2 2 0 012 2v1h4a2 2 0 012 2v2H3V7z" />
                    <path fill="currentColor" d="M3 11h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{exp.company}</h3>
                  <div className="text-sm text-slate-400">
                    {exp.location} • {exp.period}
                  </div>
                </div>
              </div>

              <div className="chip text-xs">Professional</div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
              <p className="mt-3 text-slate-300 leading-relaxed">{exp.bullets[0]}</p>

              <ul className="mt-4 list-inside list-disc text-slate-300 space-y-2">
                {exp.bullets.slice(1).map((b, i) => (
                  <li key={i} className="text-sm">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <Chip key={t} color={exp.color === "violet" ? "violet" : "teal"}>
                    {t}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        ))}

        <p className="text-center text-slate-400 mt-4">
          Building the future of crypto derivatives trading with cutting-edge technology &amp; innovative solutions.
        </p>

        <div className="text-center mt-2">
          <a
            href="#contact"
            onClick={gotoContact}
            className="inline-block mt-2 text-sm text-[var(--coral)] hover:underline font-medium"
          >
            Get in touch to learn more about my work →
          </a>
        </div>
      </div>
    </section>
  );
}
