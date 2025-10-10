// src/components/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl text-white">Project not found</h2>
        <p className="mt-4 text-slate-400">Try going back to the projects list.</p>
        <div className="mt-6">
          <Link to="/projects" className="text-[var(--coral)] hover:underline">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
          <div className="text-sm text-slate-400">{new Date(project.date).toLocaleDateString()}</div>
        </div>
        <div className="text-sm text-slate-400">Views: N/A</div>
      </div>

      <div className="rounded-2xl border border-slate-800 p-6 bg-slate-950/60">
        <p className="text-slate-300 leading-relaxed whitespace-pre-line">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(project.tech || []).map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-md text-xs border border-slate-800 bg-slate-900/40 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn-coral">
              Repository
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-coral-outline">
              Live Demo
            </a>
          )}
          <Link
  to="/"
  onClick={() => {
    // slight delay so the page can render before scrolling
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
  className="text-sm text-slate-400 hover:underline"
>
  Back to projects
</Link>

        </div>
      </div>
    </section>
  );
}
