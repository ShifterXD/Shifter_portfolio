"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, Camera, FolderKanban, Mail, Medal, Sparkles } from "lucide-react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Index", "#index"],
  ["Contact", "#contact"],
];

const indexCards = [
  {
    title: "Projects",
    label: "01 / build proof",
    text: "Real systems I am building: Mycelium University, AI workflows, study tools, and public experiments.",
    Icon: FolderKanban,
  },
  {
    title: "Certificates",
    label: "02 / verified growth",
    text: "A clean place for official proof: exams, courses, language progress, and academic milestones.",
    Icon: Medal,
  },
  {
    title: "Hobbies",
    label: "03 / human layer",
    text: "Sport, learning, design taste, and the personal interests that make the portfolio feel alive.",
    Icon: Sparkles,
  },
];

const aboutPoints = [
  "18-year-old student in Germany building a serious international profile.",
  "Focused on AI, education, data, admissions clarity, English, and portfolio-ready execution.",
  "My main project direction is Mycelium University: a platform that helps international students understand their profile, requirements, and next steps.",
];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.28 });
  return <motion.div className="scroll-progress" style={{ scaleY }} aria-hidden="true" />;
}

function ChromeHeader() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-38% 0px -45% 0px", threshold: [0.18, 0.35, 0.55] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="chrome-header"
      initial={{ y: -26, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <a className="wordmark" href="#home">SHIFTER</a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => {
          const id = href.replace("#", "");
          return (
            <a key={label} href={href} className={activeSection === id ? "is-active" : ""}>
              {label}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}

function SectionShell({ id, count, eyebrow, title, children, className = "" }: {
  id: string;
  count: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial={{ opacity: 0.72, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.34 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="section-meta"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>{count}</span>
        {eyebrow && <p>{eyebrow}</p>}
      </motion.div>
      {title && (
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </motion.section>
  );
}

function PortraitSlot() {
  return (
    <motion.div
      className="portrait-stage"
      initial={{ opacity: 0, x: 48, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="portrait-orbit" aria-hidden="true" />
      <div className="portrait-card">
        <div className="photo-placeholder" aria-label="Full body photo placeholder">
          <span className="photo-head" />
          <span className="photo-body" />
          <span className="photo-leg left" />
          <span className="photo-leg right" />
        </div>
        <div className="photo-note"><Camera size={15} /> full-body photo slot</div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="page-stage">
      <ScrollProgress />
      <div className="grain-layer" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <motion.div
        className="site-frame"
        initial={{ opacity: 0, scale: 0.985, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChromeHeader />

        <SectionShell id="home" count="001 / 003" eyebrow="personal operating system" className="hero-section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker">AI × Education × Execution</p>
            <h1>Shifter</h1>
            <p className="hero-lead">
              Pavel Tagiev — building a public proof system around AI, international education, learning, and disciplined execution.
            </p>
            <div className="hero-actions">
              <a className="primary-pill" href="#about">About me <ArrowUpRight size={17} /></a>
              <a className="ghost-pill" href="#index">Explore index</a>
            </div>
          </motion.div>
          <PortraitSlot />
        </SectionShell>

        <SectionShell id="about" count="002 / 003" eyebrow="short about me" title="A builder profile, not a random portfolio." className="about-section">
          <motion.div
            className="about-panel"
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-18%" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-intro">
              <BookOpen size={24} />
              <p>
                I want the site to feel like a clean control room for my future: study direction, proof, projects, and the systems behind them.
              </p>
            </div>
            <ul>
              {aboutPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </motion.div>
        </SectionShell>

        <SectionShell id="index" count="003 / 003" eyebrow="navigation panels" title="Choose the next layer." className="index-section">
          <div className="index-grid">
            {indexCards.map(({ title, label, text, Icon }, index) => (
              <motion.article
                className="index-card"
                key={title}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className="card-topline">
                  <span>{label}</span>
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Open layer <ArrowUpRight size={16} /></a>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <section id="contact" className="contact-strip">
          <p>Want to see the work or collaborate?</p>
          <div>
            <a className="primary-pill" href="mailto:agentgmailbox@gmail.com"><Mail size={17} /> Email</a>
            <a className="ghost-pill" href="https://github.com/ShifterXD" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
