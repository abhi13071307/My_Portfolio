import React from "react";
export default function Education() {
  const education = [
    {
      level: "Master's Degree",
      degree: "Master of Computer Applications",
      specialization:
        "Specialization in Artificial Intelligence and Machine Learning",
      university: "University of Petroleum and Energy Studies, Dehradun",
      duration: "2022 - 2024",
      grade: "CGPA: 8.53",
      topics: [
        "Data Structures",
        "Web Development",
        "Artificial Intelligence",
        "Deep Learning",
        "Machine Learning",
      ],
      color: "blue",
    },
    {
      level: "Bachelor's Degree",
      degree: "Bachelor of Computer Applications",
      specialization: "Computer Applications",
      university: "Bangalore University, Bangalore",
      duration: "2018 - 2021",
      grade: "CGPA 8.5",
      topics: [
        "Data Structures",
        "Algorithms",
        "Database Management",
        "Web Development",
        "Computer Networks",
      ],
      color: "green",
    },
    {
      level: "Class 12th (CBSE)",
      degree: "Intermediate - PCM with Computer Science",
      specialization: "Science Stream",
      university: "Army Public School, Lucknow",
      duration: "2017-2018",
      grade: "Percentage: 78%",
      topics: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English",
      ],
      color: "purple",
    },
  ];
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Education
        </h2>
        <div className="mx-auto mt-3 w-20 md:w-28 h-0.5 bg-slate-700 rounded"></div>
      </div>

      <div className="flex flex-col gap-10">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-slate-800 p-6 md:p-8 bg-slate-950/60 shadow-[0_0_20px_rgba(255,107,107,0.05)] hover:bg-slate-900/70 transition`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 grid place-items-center rounded-md ${
                    edu.color === "blue"
                      ? "bg-blue-900/40 text-blue-400"
                      : edu.color === "green"
                      ? "bg-green-900/40 text-green-400"
                      : "bg-purple-900/40 text-purple-400"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.6}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.944M12 14L5.84 10.578A12.083 12.083 0 006 20.944M12 14v7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {edu.level}
                  </h3>
                  <p className="text-sm text-slate-300">{edu.degree}</p>
                  <p className="text-xs text-slate-400">{edu.specialization}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {edu.university} • {edu.duration}
                  </p>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-300">
                {edu.grade}
              </div>
            </div>
            <div className="h-px bg-slate-800 my-4"></div>
            {edu.highlight && (
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <span className="text-[var(--coral)]">🏅</span> Key Highlights:
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-400 mt-1">
                  <li>{edu.highlight}</li>
                </ul>
              </div>
            )}
            {edu.topics && (
              <div>
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <span className="text-[var(--coral)]">📘</span> Topics Learned:
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`px-3 py-1 text-xs font-medium rounded-md border ${
                        edu.color === "blue"
                          ? "bg-blue-950/50 border-blue-800 text-blue-300"
                          : edu.color === "green"
                          ? "bg-green-950/50 border-green-800 text-green-300"
                          : "bg-purple-950/50 border-purple-800 text-purple-300"
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
