// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
  ];

  const resources = [
    { label: "Resume", href: "/Abhishek_Kumar.pdf" },
    { label: "Get in Touch", href: "#contact" },
    { label: "Source Code", href: "https://github.com/abhi13071307" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/abhi13071307", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek1307", icon: "linkedin" },
    { label: "Email", href: "mailto:abhi.kr.1307@gmail.com", icon: "mail" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Blurb */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--coral)] to-[#FF8A8A] grid place-items-center text-xs font-semibold text-[var(--coral-contrast)]">
                AK
              </div>
              <div>
                <h3 className="text-white font-semibold">Abhishek Kumar</h3>
                <p className="text-xs text-slate-400">Full-Stack Developer — building scalable web apps and APIs.</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-400 max-w-sm">
              Software Engineer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a className="text-slate-300 hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {resources.map((r) => (
                <li key={r.label}>
                  <a
                    className="text-slate-300 hover:text-white"
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <p className="text-sm text-slate-400 mb-4">Let's build something amazing together.</p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-md hover:bg-slate-900 transition"
                >
                  {/* small icon SVGs */}
                  {s.icon === "github" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                      <path fill="currentColor" d="M12 .5C5.7.5.8 5.5.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.5 0-.3 0-1.1 0-2.0-3.1.7-3.7-.8-3.9-1.5-.1-.4-.7-1.5-1.2-1.8-.4-.2-1-.8-.01-.8.9-.01 1.6.9 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1.0.1-.8.4-1.3.7-1.6-2.8-.3-5.7-1.4-5.7-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.3.9-.3 2-.4 3.1-.4 1 0 2 .1 3.1.4 2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.2.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.7 6.1.4.3.8 1.0.8 2.1 0 1.6 0 2.9 0 3.2 0 .3.2.6.8.5 4.4-1.5 7.6-5.6 7.6-10.5C23.2 5.5 18.3.5 12 .5z"/>
                    </svg>
                  )}
                  {s.icon === "linkedin" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                      <path fill="currentColor" d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.4 4.5 5.5V24h-4V15.6c0-2.0 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z"/>
                    </svg>
                  )}
                  {s.icon === "mail" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-300">
                      <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} Abhishek Kumar. Built with care.</p>
            <p className="text-xs text-slate-400">Designed & Developed with passion • Open Source</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
