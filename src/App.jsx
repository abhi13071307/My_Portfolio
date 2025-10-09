// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";



export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // demo client-only behavior; we'll wire an API later
    console.log("Contact submit", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="pt-20">
        <Hero />
        <Projects />

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="surface">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Software Engineer Intern — Scopely</h3>
                  <p className="text-xs text-slate-400">Oct 2024</p>
                </div>
                <span className="chip">Intern</span>
              </div>

              <ul className="mt-4 list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Built backend features and REST APIs; optimized DB queries.</li>
                <li>Improved performance and reliability across services.</li>
              </ul>
            </div>

            <div className="surface">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Personal Projects & Freelance</h3>
                  <p className="text-xs text-slate-400">2023 — Present</p>
                </div>
                <span className="chip">Freelance</span>
              </div>

              <ul className="mt-4 list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Designed full-stack apps using React, Node, and PostgreSQL.</li>
                <li>Implemented auth, payments, and deployment pipelines.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 p-6 bg-slate-900/50 grid gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="input"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="input"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="input"
              required
            />
            <div className="flex items-center gap-3">
              <button type="submit" className="btn-coral">
                {sent ? "Message Sent" : "Send Message"}
              </button>
              <p className="text-xs text-slate-400">This demo form is client-side only. We'll wire an API later.</p>
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </div>
  );
}
