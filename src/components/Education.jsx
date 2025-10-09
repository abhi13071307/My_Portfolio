// src/components/Education.jsx
export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Education</h2>
        <p className="mt-3 text-slate-400 max-w-2xl">Formal academic qualifications and relevant coursework.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="surface">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Masters in Computer Applications</h3>
              <p className="text-sm text-slate-400">University of Petroleum and Energy Studies — 2022 – 2024</p>
              <p className="mt-3 text-sm text-slate-300">Subject Electives: Artificial Intelligence and Machine Learning. CGPA: 8.53</p>
            </div>
            <div className="chip">MCA</div>
          </div>
        </div>

        <div className="surface">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Bachelors in Computer Applications</h3>
              <p className="text-sm text-slate-400">Bangalore University — 2018 – 2021</p>
              <p className="mt-3 text-sm text-slate-300">CGPA: 8.5</p>
            </div>
            <div className="chip">BCA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
