import React from "react";

const contacts = [
  {
    label: "GitHub",
    username: "@abhi13071307",
    href: "https://github.com/abhi13071307",
    desc: "Check out my open-source projects and contributions.",
    color: "text-slate-300",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.8 5.5.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.5 0-.3 0-1.1 0-2.0-3.1.7-3.7-.8-3.9-1.5-.1-.4-.7-1.5-1.2-1.8-.4-.2-1-.8-.01-.8.9-.01 1.6.9 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1.0.1-.8.4-1.3.7-1.6-2.8-.3-5.7-1.4-5.7-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.3.9-.3 2-.4 3.1-.4 1 0 2 .1 3.1.4 2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.2.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.7 6.1.4.3.8 1.0.8 2.1 0 1.6 0 2.9 0 3.2 0 .3.2.6.8.5 4.4-1.5 7.6-5.6 7.6-10.5C23.2 5.5 18.3.5 12 .5z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    username: "Abhishek Kumar",
    href: "https://linkedin.com/in/abhishek1307",
    desc: "Connect professionally and explore opportunities.",
    color: "text-blue-400",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.4 4.5 5.5V24h-4V15.6c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    username: "abhi.kr.1307@gmail.com",
    href: "mailto:abhi.kr.1307@gmail.com",
    desc: "Let’s discuss opportunities and collaborations.",
    color: "text-red-400",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    username: "+91 8210580073",
    href: "tel:+918210580073",
    desc: "Feel free to reach out directly for collaboration.",
    color: "text-green-400",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.73 2 2 0 0 1-.45 2L8.09 9.91a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2-.45 12.44 12.44 0 0 0 2.73.7A2 2 0 0 1 22 16.92z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    username: "@rahulxxw",
    href: "https://www.instagram.com/rahulxxw",
    desc: "Behind-the-scenes of my projects and life.",
    color: "text-pink-500",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.12 1.12 0 1 1-2.25 0 1.12 1.12 0 0 1 2.25 0z"
        />
      </svg>
    ),
  },
  {
    label: "Itch.io",
    username: "abhishek1307.itch.io",
    href: "https://abhishek1307.itch.io/",
    desc: "Explore the indie games I’ve built and published.",
    color: "text-orange-400",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          fill="currentColor"
          d="M2 4h20l2 4v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8l2-4zm2 4v10h16V8H4zm8 9a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Let’s Connect
        </h2>
        <div className="mx-auto mt-3 w-24 h-0.5 bg-slate-700 rounded"></div>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Ready to collaborate, discuss opportunities, or just chat tech?  
          Feel free to connect with me through any platform below.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="contact-card group rounded-2xl border border-slate-800 p-6 bg-slate-950/60 hover:bg-slate-900/70 transition relative"
          >
            <div className={`flex flex-col items-center text-center gap-3 ${c.color}`}>
              <div className="icon-wrap group-hover:scale-110 transition">
                {c.icon}
              </div>
              <p className="font-semibold text-white group-hover:text-[var(--coral)] transition">
                {c.username}
              </p>
              <p className="text-sm text-slate-400">{c.label}</p>
              <p className="text-xs text-slate-500 mt-1">{c.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
