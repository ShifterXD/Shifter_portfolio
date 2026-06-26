"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Mouse, Share2 } from "lucide-react";

const navItems = [
  ["Home", "#home"],
  ["Work", "#work"],
  ["System", "#system"],
  ["Path", "#path"],
  ["Contact", "#contact"],
];

const workCards = [
  {
    title: "Mycelium University",
    label: "admission clarity",
    text: "AI platform for international students: profile analysis, realistic university fit, requirements, and next-step roadmaps.",
    shape: "orb-ring",
  },
  {
    title: "Kapicode System",
    label: "agent workflow",
    text: "A personal AI operating layer for research, planning, coding, notes, and execution without losing the human direction.",
    shape: "orb-triangle",
  },
  {
    title: "SAT Math Mastery",
    label: "learning proof",
    text: "A structured study project that turns preparation into visible systems: practice, visual cards, tracking, and iteration.",
    shape: "orb-diamond",
  },
];

const pathItems = ["Germany", "AI education", "Data science", "Admissions", "English-taught programs", "Builder portfolio"];

function NeuralCore() {
  const nodes = [
    [50, 14], [69, 20], [82, 38], [78, 62], [62, 79], [39, 78], [20, 63], [15, 40], [31, 22],
    [51, 39], [62, 50], [43, 57], [35, 43], [56, 64], [70, 36], [27, 61],
  ];
  const lines = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],
    [8,9],[9,10],[10,14],[10,11],[11,12],[12,15],[11,13],[13,4],[15,6],[14,2],[9,13],[12,8],[5,11],
  ];

  return (
    <motion.div
      className="neural-core"
      initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <span className="core-halo halo-one" />
      <span className="core-halo halo-two" />
      <svg viewBox="0 0 100 100" className="mesh-svg">
        <defs>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="1.35" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines.map(([a, b], index) => (
          <line
            key={`${a}-${b}-${index}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            className={index % 4 === 0 ? "mesh-line line-warm" : "mesh-line"}
          />
        ))}
        {nodes.map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={index % 5 === 0 ? 1.6 : 0.95} className={index % 4 === 0 ? "mesh-node node-warm" : "mesh-node"} />
        ))}
      </svg>
      <div className="core-fire">
        <span />
        <span />
        <span />
      </div>
    </motion.div>
  );
}

function ServiceOrb({ kind }: { kind: string }) {
  return (
    <div className={`service-orb ${kind}`} aria-hidden="true">
      <span className="orb-shadow" />
      <span className="orb-glow" />
      <i />
      <i />
      <i />
    </div>
  );
}

function ChromeHeader() {
  return (
    <header className="chrome-header">
      <a className="wordmark" href="#home">SHIFTER</a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(0, 4).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <nav className="right-nav" aria-label="Contact navigation">
        <a href="#system">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function SlideDots() {
  return <div className="slide-dots" aria-hidden="true"><span /><span /></div>;
}

function FrameFooter() {
  return (
    <div className="frame-footer" aria-hidden="true">
      <div className="mouse-chip"><Mouse size={18} /></div>
      <div className="share-chip"><Share2 size={16} /><span>Share</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-stage">
      <div className="outer-glow" />
      <div className="site-frame">
        <ChromeHeader />

        <section id="home" className="slide hero-slide">
          <span className="slide-count">001 / 005</span>
          <SlideDots />
          <div className="hero-copy-block">
            <motion.h1 initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              Building clarity systems for students.
            </motion.h1>
            <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.08 }}>
              I’m Pavel “Shifter” Tagiev — building Mycelium University, AI workflows, and proof-driven learning systems for international education.
            </motion.p>
          </div>
          <div className="hero-action-row">
            <a className="primary-pill" href="#work">Enter the system <ArrowUpRight size={17} /></a>
            <a className="ghost-pill" href="#system">View method</a>
          </div>
          <NeuralCore />
          <p className="hero-side-note">A portfolio as an operating surface: projects, learning, admissions research, and agent workflows under one visual system.</p>
        </section>

        <section id="work" className="slide work-slide">
          <span className="slide-count">002 / 005</span>
          <SlideDots />
          <div className="section-split-heading">
            <h2>Discover the work</h2>
            <p>Three active systems, not random portfolio decorations.</p>
          </div>
          <div className="work-grid">
            {workCards.map((card) => (
              <article className="work-card" key={card.title}>
                <ServiceOrb kind={card.shape} />
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="system" className="slide system-slide">
          <span className="slide-count">003 / 005</span>
          <SlideDots />
          <NeuralCore />
          <div className="system-copy">
            <h2>AI is the workflow, not the headline.</h2>
            <p>Kapicode is my practical agent layer: research, notes, code, execution, review. The point is not to look futuristic — it is to make better decisions faster.</p>
          </div>
        </section>

        <section id="path" className="slide path-slide">
          <span className="slide-count">004 / 005</span>
          <SlideDots />
          <div className="section-split-heading">
            <h2>Pathway map</h2>
            <p>International study direction translated into concrete systems and proof.</p>
          </div>
          <div className="path-map">
            {pathItems.map((item, index) => <span key={item} style={{ "--i": index } as React.CSSProperties}>{item}</span>)}
          </div>
        </section>

        <section id="contact" className="slide contact-slide">
          <span className="slide-count">005 / 005</span>
          <SlideDots />
          <div className="contact-block">
            <h2>For universities, builders, and collaborators.</h2>
            <p>If the work connects to AI, education, admissions clarity, or student systems — this is the public entrance.</p>
            <div className="contact-row">
              <a className="primary-pill" href="mailto:agentgmailbox@gmail.com"><Mail size={17} /> Email</a>
              <a className="ghost-pill" href="https://github.com/ShifterXD" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            </div>
          </div>
        </section>

        <FrameFooter />
      </div>
    </main>
  );
}
