// src/components/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-20 text-center text-slate-300">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <p>Sorry, this project doesn’t exist.</p>
        <Link
          to="/#projects"
          className="inline-block mt-6 text-[var(--coral)] hover:underline"
        >
          ← Back to Projects
        </Link>
      </section>
    );
  }
  const { title, summary, tech, repo, details } = project;
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-slate-300">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          {title}
        </h1>
        <p className="text-slate-400">{summary}</p>
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm text-[var(--coral)] hover:underline"
          >
            View on GitHub →
          </a>
        )}
      </div>
      {details?.overview && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
          <p className="text-slate-400 leading-relaxed">{details.overview}</p>
        </div>
      )}
      {details?.features && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            {details.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}
      {details?.challenges && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            {details.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      {details?.outcomes && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Outcomes & Learnings</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            {details.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
      {tech?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-white mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs border border-slate-800 bg-slate-900/40 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="mt-12">
        <Link
          to="/#projects"
          className="text-sm text-[var(--coral)] hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
