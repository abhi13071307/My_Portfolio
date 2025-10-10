// src/components/Resume.jsx
import React from "react";

const PDF_PATH = "/resume/Abhishek_Kumar_Resume.pdf"; // put your PDF in public/resume/

export default function Resume() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Resume</h1>
          <p className="text-slate-400 mt-1">View and download my professional resume</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noreferrer"
            className="btn-coral-outline"
          >
            Open in New Tab
          </a>
          <a
            href={PDF_PATH}
            download="Abhishek_Kumar_Resume.pdf"
            className="btn-coral"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/60">
        <object
          data={`${PDF_PATH}#view=FitH`}
          type="application/pdf"
          className="w-full"
          style={{ height: "80vh" }}
        >
          <iframe
            title="Resume PDF"
            src={`${PDF_PATH}#toolbar=1&navpanes=0`}
            className="w-full"
            style={{ height: "80vh" }}
          />
        </object>
      </div>

      <p className="text-xs text-slate-500 mt-3">
        If the viewer doesn’t load, use the buttons above to open or download the PDF.
      </p>
    </section>
  );
}
