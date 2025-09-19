"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Download, Menu, X } from "lucide-react";
import SkillBadge from "./components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import { experiences, projects, skills } from "@/data/portfolioData";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      {/* <AnimatedBackground /> */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary-gradient">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-muted hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-muted hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-muted hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-muted hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-muted hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-b border-border">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <a
                href="#about"
                className="text-muted hover:text-primary transition-colors py-2"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted hover:text-primary transition-colors py-2"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted hover:text-primary transition-colors py-2"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-muted hover:text-primary transition-colors py-2"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-muted hover:text-primary transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Hero Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-primary-gradient">Lauren Coker</span>
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
              Senior Full-Stack Software Engineer with 6+ years of experience
              leading the development of scalable SaaS products. Drives
              technical strategy, modernizes legacy systems, and delivers
              complex full-stack solutions using Vue/Laravel and
              React/Next.js/Nest.js.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-gradient text-primary-foreground rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Get In Touch
              </a>
              <a
                href="/lauren_coker_resume.pdf"
                download
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-light transition-colors flex items-center"
              >
                <Download size={18} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary-gradient">Work Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-card p-6 md:p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl text-primary-gradient font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <p className="text-muted mt-2 md:mt-0">{exp.period}</p>
                </div>

                <ul className="list-disc list-inside mb-6 text-muted space-y-2">
                  {exp.description.map((item, index) => (
                    // <li key={index}>{item}</li>
                    <li key={index}>
                      <span className="font-semibold">{item.short}: </span>
                      {item.long}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary-gradient">Featured Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary-gradient">Skills & Technologies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl text-primary-gradient font-bold mb-4">
                Frontend
              </h3>
              {frontendSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} />
              ))}
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl text-primary-gradient font-bold mb-4">
                Backend
              </h3>
              {backendSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} />
              ))}
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl text-primary-gradient font-bold mb-4">
                Tools & Platforms
              </h3>
              {toolsSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} />
              ))}
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl text-primary-gradient font-bold mb-4">
                Other
              </h3>
              {otherSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary-gradient">Get In Touch</span>
          </h2>

          <div className="bg-card p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <p className="text-muted text-center mb-8">
              I&apos;m currently looking for new opportunities. Whether you have
              a question or just want to say hi, I&apos;ll get back to you as
              soon as possible!
            </p>

            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="mailto:your.email@example.com"
                className="text-muted hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Lauren Coker. All rights reserved.</p>
          <a
            href="https://www.flaticon.com/free-icons/computer"
            title="computer icons"
          >
            Computer icons created by Freepik - Flaticon
          </a>
        </div>
      </footer>
    </div>
  );
}
