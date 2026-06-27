"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Mouse, Share2 } from "lucide-react";
import { ReactNode, useRef } from "react";

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

const sectionReveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.28 });
  return <motion.div className="scroll-progress" style={{ scaleY }} aria-hidden="true" />;
}

function NeuralCore({ compact = false }: { compact?: boolean }) {
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
      className={`neural-core ${compact ? "neural-core-compact" : ""}`}
      initial={{ opacity: 0, scale: 0.82, rotate: -12, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <span className="core-halo halo-one" />
      <span className="core-halo halo-two" />
      <span className="core-halo halo-three" />
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
          <motion.line
            key={`${a}-${b}-${index}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            className={index % 4 === 0 ? "mesh-line line-warm" : "mesh-line"}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: index % 4 === 0 ? 0.9 : 0.45 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: index * 0.018, ease: "easeOut" }}
          />
        ))}
        {nodes.map(([x, y], index) => (
          <motion.circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index % 5 === 0 ? 1.6 : 0.95}
            className={index % 4 === 0 ? "mesh-node node-warm" : "mesh-node"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25 + index * 0.03, ease: [0.16, 1, 0.3, 1] }}
          />
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
    <motion.header
      className="chrome-header"
      initial={{ y: -26, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <a className="wordmark" href="#home">SHIFTER</a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(0, 4).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <nav className="right-nav" aria-label="Contact navigation">
        <a href="#system">System</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
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

function PremiumSection({ id, count, className, children }: { id: string; count: string; className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [42, 0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.88, 1], [0.42, 1, 1, 0.62]);

  return (
    <motion.section ref={ref} id={id} className={`slide ${className}`} style={{ opacity }}>
      <motion.div className="section-parallax" style={{ y }}>
        <span className="slide-count">{count}</span>
        <SlideDots />
        {children}
      </motion.div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="page-stage">
      <ScrollProgress />
      <div className="outer-glow" />
      <div className="grain-layer" aria-hidden="true" />
      <motion.div
        className="site-frame"
        initial={{ opacity: 0, scale: 0.985, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <ChromeHeader />

        <PremiumSection id="home" count="001 / 005" className="hero-slide">
          <motion.div className="hero-copy-block" variants={stagger} initial="hidden" animate="visible">
            <motion.p className="kicker" variants={sectionReveal} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>AI × education × execution</motion.p>
            <motion.h1 variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              Building clarity systems for students.
            </motion.h1>
            <motion.p className="hero-lead" variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              I’m Pavel “Shifter” Tagiev — building Mycelium University, AI workflows, and proof-driven learning systems for international education.
            </motion.p>
          </motion.div>
          <motion.div className="hero-action-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}>
            <a className="primary-pill" href="#work">Enter the system <ArrowUpRight size={17} /></a>
            <a className="ghost-pill" href="#system">View method</a>
          </motion.div>
          <NeuralCore />
        </PremiumSection>

        <PremiumSection id="work" count="002 / 005" className="work-slide">
          <motion.div className="section-split-heading" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }}>
            <motion.h2 variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Discover the work</motion.h2>
            <motion.p variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Three active systems, not random portfolio decorations.</motion.p>
          </motion.div>
          <motion.div className="work-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-12%" }}>
            {workCards.map((card) => (
              <motion.article className="work-card" key={card.title} variants={sectionReveal} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -10, scale: 1.012 }}>
                <ServiceOrb kind={card.shape} />
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </PremiumSection>

        <PremiumSection id="system" count="003 / 005" className="system-slide">
          <NeuralCore compact />
          <motion.div className="system-copy" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-18%" }}>
            <motion.p className="kicker" variants={sectionReveal} transition={{ duration: 0.75 }}>operating layer</motion.p>
            <motion.h2 variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>AI is the workflow, not the headline.</motion.h2>
            <motion.p variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Kapicode is my practical agent layer: research, notes, code, execution, review. The point is not to look futuristic — it is to make better decisions faster.</motion.p>
          </motion.div>
        </PremiumSection>

        <PremiumSection id="path" count="004 / 005" className="path-slide">
          <motion.div className="section-split-heading" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }}>
            <motion.h2 variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Pathway map</motion.h2>
            <motion.p variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>International study direction translated into concrete systems and proof.</motion.p>
          </motion.div>
          <motion.div className="path-map" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-18%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            {pathItems.map((item, index) => <motion.span key={item} style={{ "--i": index } as React.CSSProperties} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.62, delay: 0.14 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}>{item}</motion.span>)}
          </motion.div>
        </PremiumSection>

        <PremiumSection id="contact" count="005 / 005" className="contact-slide">
          <motion.div className="contact-block" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-18%" }}>
            <motion.p className="kicker" variants={sectionReveal} transition={{ duration: 0.75 }}>next signal</motion.p>
            <motion.h2 variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>For universities, builders, and collaborators.</motion.h2>
            <motion.p variants={sectionReveal} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>If the work connects to AI, education, admissions clarity, or student systems — this is the public entrance.</motion.p>
            <motion.div className="contact-row" variants={sectionReveal} transition={{ duration: 0.75 }}>
              <a className="primary-pill" href="mailto:agentgmailbox@gmail.com"><Mail size={17} /> Email</a>
              <a className="ghost-pill" href="https://github.com/ShifterXD" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            </motion.div>
          </motion.div>
        </PremiumSection>

        <FrameFooter />
      </motion.div>
    </main>
  );
}
