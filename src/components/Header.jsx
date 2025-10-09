// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LEFT: Brand (avatar + name) */}
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--coral)] to-[#FF8A8A] grid place-items-center text-sm font-semibold text-[var(--coral-contrast)]">
            AK
          </div>
          <a href="#home" className="font-semibold text-sm text-white hover:opacity-90">
            Abhishek Kumar
          </a>
        </div>

        {/* CENTER: Navigation (hidden on small screens) */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#home" className="text-slate-300 hover:text-white">Home</a>
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <a href="#experience" className="text-slate-300 hover:text-white">Experience</a>
          <a href="#education" className="text-slate-300 hover:text-white">Education</a>
          <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>

        {/* RIGHT: Icons + Resume button (collapses into menu on mobile) */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/abhi13071307"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md hover:bg-slate-800"
            >
              {/* GitHub SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                <path fill="currentColor" d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.88 3.16 9.02 7.56 10.48.55.1.75-.24.75-.53 0-.26-.01-1.12-.01-2.03-3.08.67-3.73-.76-3.97-1.46-.13-.36-.7-1.46-1.2-1.76-.41-.24-1-.83-.01-.84.93-.01 1.59.86 1.81 1.22 1.06 1.83 2.75 1.31 3.42 1 .11-.78.41-1.31.75-1.61-2.76-.31-5.66-1.38-5.66-6.14 0-1.36.48-2.48 1.27-3.36-.13-.31-.55-1.56.12-3.25 0 0 1.03-.33 3.37 1.28  .98-.27 2.03-.4 3.07-.4 1.04 0 2.09.14 3.07.4 2.33-1.61 3.36-1.28 3.36-1.28.67 1.69.25 2.94.12 3.25.79.88 1.27 2 1.27 3.36 0 4.77-2.9 5.83-5.66 6.14.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.22 0 .29.2.64.76.53 4.4-1.46 7.56-5.6 7.56-10.48C23.25 5.48 18.27.5 12 .5z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek1307"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-slate-800"
            >
              {/* LinkedIn SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.4 4.5 5.5V24h-4V15.6c0-2.0 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z"/>
              </svg>
            </a>

            <a
              href="mailto:abhi.kr.1307@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md hover:bg-slate-800"
            >
              {/* Mail SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Resume CTA */}
          <a
            href="#resume"
            className="ml-2 btn-coral hidden sm:inline-flex"
            aria-label="Download Resume"
          >
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            className="sm:hidden ml-2 inline-flex items-center justify-center rounded-md p-2 border border-slate-700 text-slate-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown (small screens) */}
      {open && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-900/75">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#home" onClick={() => setOpen(false)} className="py-2">Home</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="py-2">Experience</a>
            <a href="#education" onClick={() => setOpen(false)} className="py-2">Education</a>
            <a href="#skills" onClick={() => setOpen(false)} className="py-2">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/abhi13071307" target="_blank" rel="noreferrer" className="py-2">GitHub</a>
              <a href="https://www.linkedin.com/in/abhishek1307" target="_blank" rel="noreferrer" className="py-2">LinkedIn</a>
              <a href="#resume" onClick={() => setOpen(false)} className="btn-coral">Resume</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
