// src/components/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";

function GithubIcon({ repo }) {
  const isAvailable = !!repo;

  return (
    <a
      href={isAvailable ? repo : undefined}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub repository"
      className={`p-2 rounded-md ${
        isAvailable
          ? "hover:bg-slate-800 text-slate-300"
          : "cursor-not-allowed text-slate-700"
      } transition`}
      title={isAvailable ? "View Repository" : "Repository unavailable"}
      onClick={(e) => {
        if (!isAvailable) e.preventDefault();
      }}
    >
      {/* GitHub SVG */}
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 .5C5.73.5.8 5.5.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.5 0-.3 0-1.1 0-2-.3.1-.7.2-1.1.2-2.1 0-2.5-1.7-2.7-2.2-.1-.3-.7-1.5-1.2-1.8-.4-.2-1-.8-.01-.8.9-.01 1.6.9 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1.0.1-.8.4-1.3.7-1.6-2.8-.3-5.7-1.4-5.7-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.3.9-.3 2-.4 3.1-.4 1 0 2 .1 3.1.4 2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.2.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.7 6.1.4.3.8 1.0.8 2.1 0 1.6 0 2.9 0 3.2 0 .3.2.6.8.5 4.4-1.5 7.6-5.6 7.6-10.5C23.2 5.5 18.27.5 12 .5z" />
      </svg>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Projects</h2>
        <div className="mx-auto mt-3 w-20 md:w-28 h-0.5 bg-slate-700 rounded"></div>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          A curated collection of my professional and academic projects (summaries taken from my resume).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-slate-800 p-6 bg-slate-950/60 hover:shadow-xl transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  <Link to={`/projects/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h3>
              </div>
              {/* GitHub icon top-right */}
              <GithubIcon repo={p.repo} />
            </div>

            <p className="mt-4 text-slate-300">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {(p.tech || []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs border border-slate-800 bg-slate-900/40 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to={`/projects/${p.slug}`}
                className="text-sm text-[var(--coral)] hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
