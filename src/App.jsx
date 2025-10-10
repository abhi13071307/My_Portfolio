// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail"; // optional if you have it
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Router wraps Header so Header's Link components have context */}
      <Router>
        <Header />

        <main className="pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects />
                  <Experience />
                  <Education />
                  <Skills />
                  <Contact />
                </>
              }
            />

            {/* Projects list route if you have a separate page */}
            <Route path="/projects" element={<Projects />} />

            {/* Project detail route (if implemented) */}
            <Route path="/projects/:slug" element={<ProjectDetail />} />

            {/* Resume page */}
            <Route path="/resume" element={<Resume />} />

            {/* About page (optional route) */}
            <Route path="/about" element={<About />} />

            {/* Fallback to home */}
            <Route path="*" element={
              <>
                <Hero />
                <Projects />
                <Experience />
                <Education />
                <Skills />
                <Contact />
              </>
            } />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}
