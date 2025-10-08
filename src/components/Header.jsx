// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 bg-slate-900/60 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-lg text-white accent">Abhishek Kumar</a>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#resume" className="hover:text-white btn-coral-outline">Resume</a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/70">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm text-slate-200">
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#resume" onClick={() => setOpen(false)} className="btn-coral-outline">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
