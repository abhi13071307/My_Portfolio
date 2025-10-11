import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
        isAvailable ? "hover:bg-slate-800 text-slate-300" : "cursor-not-allowed text-slate-700"
      } transition`}
      title={isAvailable ? "View Repository" : "Repository unavailable"}
      onClick={(e) => { if (!isAvailable) e.preventDefault(); }}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.73.5.8 5.5.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.5 0-.3 0-1.1 0-2-.3.1-.7.2-1.1.2-2.1 0-2.5-1.7-2.7-2.2-.1-.3-.7-1.5-1.2-1.8-.4-.2-1-.8-.01-.8.9-.01 1.6.9 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.8-.3-5.7-1.4-5.7-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.3.9-.3 2-.4 3.1-.4 1 0 2 .1 3.1.4 2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.2.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.7 6.1.4.3.8 1 .8 2.1 0 1.6 0 2.9 0 3.2 0 .3.2.6.8.5 4.4-1.5 7.6-5.6 7.6-10.5C23.2 5.5 18.27.5 12 .5z" />
      </svg>
    </a>
  );
}
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: [0.2, 0.9, 0.2, 1] } },
  exit: { opacity: 0, y: -8, scale: 0.995, transition: { duration: 0.22 } },
};
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(() => (showAll ? projects : projects.slice(0, 4)), [showAll]);
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Projects</h2>
        <div className="mx-auto mt-3 w-20 md:w-28 h-0.5 bg-slate-700 rounded"></div>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          Some of my favorite development projects across web, AI, and games.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {visibleProjects.map((p) => (
            <motion.article
              key={p.slug}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="rounded-2xl border border-slate-800 p-6 bg-slate-950/60 hover:bg-slate-900/60 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  <Link to={`/projects/${p.slug}`} className="hover:text-[var(--coral)] transition">
                    {p.title}
                  </Link>
                </h3>
                <GithubIcon repo={p.repo} />
              </div>
              <p
                className="text-sm text-slate-400 mb-4"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                aria-hidden={false}
              >
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {(p.tech || []).slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs border border-slate-800 bg-slate-900/40 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
                {p.tech && p.tech.length > 4 && (
                  <span className="px-2 py-1 text-xs text-slate-500">+{p.tech.length - 4} more</span>
                )}
              </div>
              <Link to={`/projects/${p.slug}`} className="text-sm text-[var(--coral)] hover:underline">
                Read more →
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      {projects.length > 4 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--coral)] hover:underline"
            aria-expanded={showAll}
            aria-controls="projects-grid"
          >
            {showAll ? "Show less" : `More… (${projects.length - 4} more)`}
          </button>
        </div>
      )}
    </section>
  );
}
