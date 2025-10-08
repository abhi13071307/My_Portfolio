// src/components/Projects.jsx
import React from "react";

/**
 * Local projects list — change/add more projects here later.
 * We included your Store Rater project pulled from your GitHub.
 */
const projects = [
  {
    title: "Store Rater",
    stack: ["React", "Express", "PostgreSQL", "Prisma", "JWT", "bcryptjs"],
    desc:
      "Full-stack store rating platform with role-based access (Admin / Store Owner / User); users can register, log in, and rate stores 1–5.",
    links: { demo: "N/A", code: "https://github.com/abhi13071307/Store_rater_Full_Stack" },
  },
];

function ProjectCard({ p }) {
  return (
    <article className="group surface transition hover:scale-[1.01]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
        </div>

        <div className="flex gap-2 items-start">
          <a
            href={p.links.demo === "N/A" ? "#" : p.links.demo}
            target="_blank"
            rel="noreferrer"
            className={`text-xs rounded-lg px-2 py-1 border ${p.links.demo === "N/A" ? "border-slate-700 text-slate-400" : "border-slate-700 hover:bg-slate-800"}`}
            aria-label={`${p.title} demo`}
            onClick={(e) => p.links.demo === "N/A" && e.preventDefault()}
          >
            Demo
          </a>
          <a
            href={p.links.code}
            target="_blank"
            rel="noreferrer"
            className="text-xs rounded-lg px-2 py-1 border border-slate-700 hover:bg-slate-800"
            aria-label={`${p.title} code`}
          >
            Code
          </a>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="text-[11px] rounded-md border border-slate-700 px-2 py-1 text-slate-300">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
        <a
          href="https://github.com/abhi13071307"
          target="_blank"
          rel="noreferrer"
          className="text-sm btn-coral-ghost hover:underline"
        >
          GitHub →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
