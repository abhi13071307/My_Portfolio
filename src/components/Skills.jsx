import { useState } from "react";
const SKILLS = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "SQL", "Java", "C#"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Chakra UI", "Vite"],
  Backend: ["Node.js", "Express.js", "NestJS", "Prisma"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "APIs & Tools": ["REST APIs", "Swagger", "Prisma ORM", "Git / GitHub", "Docker", "CI/CD"],
  Other: ["Data Structures & Algorithms", "OOPs", "Agile Development", "Unity (Game Dev)", "Machine Learning", "GEN AI", "LLM"],
};
const CATEGORIES = [
  "All Skills",
  "Programming Languages",
  "Frontend",
  "Backend",
  "Databases",
  "APIs & Tools",
  "Other",
];
function IconBase({ children }) {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      {children}
    </svg>
  );
}
function IconFor(raw) {
  if (typeof raw !== "string") return null;
  const name = raw.toLowerCase();
  if (["javascript", "js"].some((k) => name.includes(k)))
    return (
      <IconBase>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 8v8M16 8v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
  if (["typescript", "ts"].some((k) => name.includes(k)))
    return (
      <IconBase>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 8h6M9 8v8M16 8v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
  if (name.includes("python"))
    return (
      <IconBase>
        <circle cx="8" cy="8" r="2" fill="currentColor" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <path d="M6 12h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
  if (name.includes("sql"))
    return (
      <IconBase>
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 7v10a7 3 0 0 0 14 0V7" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name === "java")
    return (
      <IconBase>
        <path d="M8 6c2 2 6 2 8 0M6 12h12M7 16c3 1 7 1 10 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
  if (name.includes("c#") || name === "c#")
    return (
      <IconBase>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 8v8M13 10h4M13 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
    if (name.includes("llm"))
    return (
      <IconBase>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 8v8M13 10h4M13 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
  if (name.includes("react"))
    return (
      <IconBase>
        <circle cx="12" cy="12" r="1.1" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.2" />
      </IconBase>
    );
  if (name.includes("html"))
    return (
      <IconBase>
        <path d="M4 4h16l-2 14-6 2-6-2L4 4z" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("css"))
    return (
      <IconBase>
        <path d="M4 4h16l-2 14-6 2-6-2 2-14z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 9h6M8 13h8" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("tailwind"))
    return (
      <IconBase>
        <path d="M5 10c3-6 6-6 9 0 3 6 6 6 9 0" stroke="currentColor" strokeWidth="1.3" />
        <path d="M0 14c3-6 6-6 9 0 3 6 6 6 9 0" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("chakra"))
    return (
      <IconBase>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("vite"))
    return (
      <IconBase>
        <path d="M12 3l8 5-8 13L4 8l8-5z" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("node"))
    return (
      <IconBase>
        <path d="M12 3l8 5v8l-8 5-8-5V8l8-5z" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("express"))
    return (
      <IconBase>
        <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("nestjs"))
    return (
      <IconBase>
        <path d="M12 4c4 0 7 3 7 7s-3 7-7 7-7-3-7-7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 4v14" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("django"))
    return (
      <IconBase>
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 9v6M15 9v6" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("prisma"))
    return (
      <IconBase>
        <path d="M7 18l5-13 5 9-5 4-5 0z" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("postgres"))
    return (
      <IconBase>
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 7v10a7 3 0 0 0 14 0V7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 11v8" stroke="currentColor" strokeWidth="1.1" />
      </IconBase>
    );
  if (name.includes("mysql"))
    return (
      <IconBase>
        <ellipse cx="12" cy="8" rx="7" ry="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 8v9a7 3 0 0 0 14 0V8" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("mongo"))
    return (
      <IconBase>
        <path d="M12 4c3 3 4 6 4 8s-1 4-4 8c-3-4-4-6-4-8s1-5 4-8z" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("rest"))
    return (
      <IconBase>
        <path d="M4 12h16M8 8l-4 4 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </IconBase>
    );
  if (name.includes("swagger"))
    return (
      <IconBase>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("graphql"))
    return (
      <IconBase>
        <polygon points="12,4 20,8 20,16 12,20 4,16 4,8" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </IconBase>
    );
  if (name.includes("git"))
    return (
      <IconBase>
        <path d="M6 6l12 12M10 10l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </IconBase>
    );
  if (name.includes("docker"))
    return (
      <IconBase>
        <rect x="6" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
        <rect x="11" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M3 15h18" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("ci/cd") || name.includes("ci") || name.includes("cd"))
    return (
      <IconBase>
        <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 12h4" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("gen ai"))
    return (
      <IconBase>
        <path d="M6 9c4-3 8-3 12 0M6 15c4 3 8 3 12 0" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("data structures") || name.includes("algorithms"))
    return (
      <IconBase>
        <path d="M4 6h8M12 6l8 4-8 4-8-4 8-4zM4 18h16" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("oops"))
    return (
      <IconBase>
        <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("agile"))
    return (
      <IconBase>
        <path d="M5 15a7 7 0 1 1 2 4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7 17h4" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  if (name.includes("unity"))
    return (
      <IconBase>
        <polygon points="12,4 18,8 18,16 12,20 6,16 6,8" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </IconBase>
    );
  if (name.includes("machine learning"))
    return (
      <IconBase>
        <path d="M5 9h14M7 15h10M9 6v12M15 6v12" stroke="currentColor" strokeWidth="1.3" />
      </IconBase>
    );
  return (
    <IconBase>
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconBase>
  );
}
function SkillTile({ name }) {
  return (
    <div
      className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-slate-800 p-4 bg-slate-900/40 hover:bg-slate-900/60 transition transform hover:-translate-y-1"
      role="article"
      aria-label={name}
    >
      <div
        className="w-10 h-10 rounded-md grid place-items-center"   // ⬅️ reduced from 14×14 → 10×10 (≈30% smaller)
        style={{
          background:
            "linear-gradient(180deg, rgba(255,107,107,0.08), rgba(255,138,138,0.02))",
          color: "var(--coral)",
        }}
      >
        <div className="scale-75">{IconFor(name)}</div>  {/* ⬅️ 25 % smaller icon inside */}
      </div>

      <div className="text-sm font-medium text-slate-200 text-center">{name}</div>
    </div>
  );
}
export default function Skills() {
  const [active, setActive] = useState("All Skills");
  const ORDER = [
    "Programming Languages",
    "Frontend",
    "Backend",
    "Databases",
    "APIs & Tools",
    "Other",
  ];
  const renderTiles = (arr) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {arr.map((s) => (
        <SkillTile key={s} name={s} />
      ))}
    </div>
  );
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Skills & Technologies</h2>
        <div className="mx-auto mt-3 w-20 md:w-28 h-0.5 bg-slate-700 rounded"></div>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          My technical toolkit spans across modern web development, technologies, and machine learning.
        </p>
      </div>
      <div className="flex items-center gap-3 flex-wrap justify-center mb-8">
        {CATEGORIES.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-sm px-4 py-2 rounded-full border ${
                isActive
                  ? "btn-coral shadow-lg text-slate-900"
                  : "border-slate-800 text-slate-300 bg-transparent hover:bg-slate-800"
              }`}
              aria-pressed={isActive}
            >
              {c}
            </button>
          );
        })}
      </div>
      {active === "All Skills" ? (
        <>
          {ORDER.map((section) => (
            <div key={section} className="mb-10">
              <div className="mb-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-slate-800 grid place-items-center text-slate-200">
                  {section === "Programming Languages" ? "</>" : "</>"}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{section}</h3>
                  <p className="text-sm text-slate-400">
                    {section === "Programming Languages"
                      ? "Core programming languages I work with"
                      : section === "Frontend"
                      ? "Frontend frameworks, libraries and UI tools"
                      : section === "Backend"
                      ? "Backend frameworks and server-side tooling"
                      : section === "Databases"
                      ? "Relational and NoSQL databases"
                      : section === "APIs & Tools"
                      ? "APIs, tooling and developer workflows"
                      : "Other technical skills and concepts"}
                  </p>
                </div>
              </div>
              {renderTiles(SKILLS[section] || [])}
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-slate-800 grid place-items-center text-slate-200">
              {active === "Programming Languages" ? "</>" : "</>"}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{active}</h3>
              <p className="text-sm text-slate-400">
                {active === "All Skills" ? "All skills listed" : `Core items under ${active}.`}
              </p>
            </div>
          </div>

          {renderTiles(SKILLS[active] || [])}
        </>
      )}
    </section>
  );
}
