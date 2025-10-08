// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs tracking-widest uppercase accent mb-3">Full-Stack Developer</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            I build scalable web apps with clean APIs & delightful UIs.
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Focused on React, Node/NestJS, and PostgreSQL. I design reliable schemas, clear APIs,
            and fast frontends that feel polished.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn-coral">View Projects</a>
            <a href="#contact" className="btn-coral-outline">Contact Me</a>
          </div>

          <div className="mt-6 text-xs text-slate-400">Open to SDE / Full-Stack roles — actively looking.</div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl bg-coral-gradient border border-slate-800 p-1">
            <div className="h-full w-full rounded-2xl bg-slate-900/60 grid place-items-center text-center px-6">
              <div>
                <div className="text-7xl">👨🏻‍💻</div>
                <p className="mt-3 text-sm text-slate-300">AI/ML student • Game dev enthusiast • Crypto tinkerer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
