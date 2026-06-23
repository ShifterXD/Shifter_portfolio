"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Brain,
  Code2,
  Dumbbell,
  ExternalLink,
  FolderKanban,
  Mail,
  Map,
  MessageCircle,
  Monitor,
  MoonStar,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import type { ReactNode } from "react";

type RoomModuleId = "desk" | "shelf" | "map" | "core" | "sport" | "window" | "contact";

type RoomModule = {
  id: RoomModuleId;
  object: string;
  title: string;
  short: string;
  icon: ReactNode;
  accent: string;
  bullets: string[];
};

const modules: RoomModule[] = [
  {
    id: "desk",
    object: "Desk / Monitor",
    title: "Projects Desk",
    short: "AI products and proof of work.",
    icon: <Monitor />,
    accent: "#38bdf8",
    bullets: [
      "Mycelium University — an AI platform for international students who need realistic admission roadmaps.",
      "This portfolio is part of the proof: a custom interface, not a recycled template.",
      "Principle: every project should explain the problem, the system, and the evidence.",
    ],
  },
  {
    id: "shelf",
    object: "Bookshelf",
    title: "Learning Shelf",
    short: "Academic path and technical growth.",
    icon: <BookOpen />,
    accent: "#f59e0b",
    bullets: [
      "Preparing for English-taught international programs through SAT, IELTS, CS50x, and applied projects.",
      "Learning direction: data science, AI products, business analytics, and economics/management.",
      "The goal is not collecting badges — it is building enough skill to solve real student problems.",
    ],
  },
  {
    id: "map",
    object: "Wall Map",
    title: "University Roadmap",
    short: "From Germany to global programs.",
    icon: <Map />,
    accent: "#a78bfa",
    bullets: [
      "Exploring realistic English-taught programs in Europe and Asia, including TUM Heilbronn, Nagoya G30, JADS, and UC3M.",
      "The research focuses on fit, requirements, fees, outcomes, and execution — not prestige fantasy.",
      "Mycelium University comes from this need: students deserve clarity before they commit years of effort.",
    ],
  },
  {
    id: "core",
    object: "Kapicode Core",
    title: "AI Agent System",
    short: "A practical layer for research and building.",
    icon: <Brain />,
    accent: "#22c55e",
    bullets: [
      "Kapicode is my AI workflow layer for research, planning, coding, notes, and project execution.",
      "The room shows the idea visually: tools are connected into one operating environment.",
      "AI is presented as leverage for disciplined work — not as decoration or a buzzword.",
    ],
  },
  {
    id: "sport",
    object: "Discipline Corner",
    title: "Discipline Corner",
    short: "Consistency beyond the screen.",
    icon: <Dumbbell />,
    accent: "#fb7185",
    bullets: [
      "The corner represents discipline, recovery, and long-term consistency — the human side of building.",
      "It keeps the site grounded: ambition is not only technical, it is behavioral.",
      "For a professional audience, it signals resilience without turning the portfolio into a diary.",
    ],
  },
  {
    id: "window",
    object: "Window",
    title: "Outside World",
    short: "A room aimed outward.",
    icon: <MoonStar />,
    accent: "#60a5fa",
    bullets: [
      "The window stands for the transition from local student life to international study, collaboration, and independence.",
      "The room is calm and focused, but the direction is outward: universities, teams, users, and real-world impact.",
      "The visual mood is night focus, warm light, and a future that feels reachable rather than exaggerated.",
    ],
  },
  {
    id: "contact",
    object: "Door / Signal",
    title: "Contact Signal",
    short: "For universities, builders, and future collaborators.",
    icon: <Mail />,
    accent: "#2dd4bf",
    bullets: [
      "This site is designed for people who want to understand who I am, what I build, and why it matters.",
      "If the work connects to AI, education, admissions, or student systems, I am open to conversations.",
      "Public links are intentionally focused: GitHub is live, private demos and direct contact are shared on request.",
    ],
  },
];

const projects = [
  {
    name: "Mycelium University",
    status: "flagship",
    text: "AI platform for international students: profile analysis, realistic university fit, requirements, and admission roadmaps.",
  },
  {
    name: "Kapicode Agent System",
    status: "AI workflow",
    text: "A practical agent layer for research, planning, coding, notes, and execution — built to increase output quality.",
  },
  {
    name: "SAT Math Mastery",
    status: "learning system",
    text: "Structured SAT preparation with practice, visual notes, and progress tracking toward stronger quantitative readiness.",
  },
  {
    name: "Shifter's Room",
    status: "portfolio",
    text: "This website: a custom symbolic room interface built to communicate identity without a generic template or heavy 3D model.",
  },
];

const storySteps = [
  {
    label: "01 · who",
    title: "I’m Pavel Tagiev — Shifter.",
    text: "An 18-year-old student in Germany building at the intersection of AI, international education, and personal systems.",
  },
  {
    label: "02 · problem",
    title: "The problem I keep seeing: unclear paths.",
    text: "Students often face vague university lists, confusing requirements, and unrealistic plans. I want to make that path clearer.",
  },
  {
    label: "03 · build",
    title: "So I’m building Mycelium University.",
    text: "An AI platform that helps international students understand fit, requirements, and the next actions they should take.",
  },
  {
    label: "04 · proof",
    title: "This room is the interface to the work.",
    text: "The desk, shelf, map, and AI core are not decoration — they show the systems behind my projects, learning, and direction.",
  },
];

const learning = ["SAT", "IELTS", "CS50x", "Data Science", "AI Products", "Global Education"];

function ModulePanel({ module }: { module: RoomModule }) {
  return (
    <section id={`panel-${module.id}`} className="module-overlay">
      <a className="module-backdrop" href="#room" aria-label="Close panel" />
      <article className="module-panel relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/14 bg-[#09111f]/94 p-6 shadow-2xl md:p-8" style={{ "--panel-accent": module.accent } as React.CSSProperties}>
        <div className="panel-glow" />
        <a className="close-button" href="#room" aria-label="Close panel">
          <X size={18} />
        </a>
        <div className="mb-6 flex items-start gap-4">
          <div className="panel-icon">{module.icon}</div>
          <div>
            <p className="eyebrow">{module.object}</p>
            <h2>{module.title}</h2>
            <p className="mt-2 max-w-xl text-base leading-7 text-slate-300">{module.short}</p>
          </div>
        </div>
        <div className="space-y-3">
          {module.bullets.map((bullet) => (
            <p key={bullet} className="panel-line">
              {bullet}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}

function Hotspot({ module, className }: { module: RoomModule; className: string }) {
  return (
    <a
      className={`room-hotspot ${className}`}
      href={`#panel-${module.id}`}
      style={{ "--hotspot": module.accent } as React.CSSProperties}
      aria-label={`Open ${module.title}`}
    >
      <span className="hotspot-pulse" />
      <span className="hotspot-label">
        <strong>{module.object}</strong>
        <small>{module.short}</small>
      </span>
    </a>
  );
}

function DesktopRoom() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 70, damping: 20 });
  const springY = useSpring(my, { stiffness: 70, damping: 20 });
  const backX = useTransform(springX, (v) => v * 0.25);
  const midX = useTransform(springX, (v) => v * 0.55);
  const frontX = useTransform(springX, (v) => v * 0.9);
  const backY = useTransform(springY, (v) => v * 0.22);
  const midY = useTransform(springY, (v) => v * 0.48);
  const frontY = useTransform(springY, (v) => v * 0.75);

  const byId = Object.fromEntries(modules.map((item) => [item.id, item])) as Record<RoomModuleId, RoomModule>;

  return (
    <section
      className="desktop-room-shell"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 28);
        my.set(((event.clientY - rect.top) / rect.height - 0.5) * 18);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="room-frame">
        <motion.div className="room-layer room-back" style={{ x: backX, y: backY }}>
          <div className="night-window">
            <div className="city-line" />
            <div className="moon" />
          </div>
          <div className="wall-map">
            <span>TUM</span>
            <span>Nagoya</span>
            <span>JADS</span>
            <span>UC3M</span>
          </div>
          <div className="mission-board">
            <b>MISSION</b>
            <span>Build Mycelium</span>
            <span>SAT → 1400</span>
            <span>IELTS → 7.5</span>
          </div>
          <div className="shelf-rail">
            {learning.slice(0, 5).map((item) => (
              <i key={item}>{item.split(" ")[0]}</i>
            ))}
          </div>
        </motion.div>

        <motion.div className="room-layer room-mid" style={{ x: midX, y: midY }}>
          <div className="desk-illustration">
            <div className="desk-lamp"><span /></div>
            <div className="main-monitor">
              <div className="screen-grid" />
              <strong>MYCELIUM</strong>
              <small>admission roadmap engine</small>
            </div>
            <div className="laptop-slab" />
            <div className="keyboard-row" />
          </div>
          <div className="kapicode-core">
            <span className="core-ring" />
            <Brain size={26} />
          </div>
          <div className="sports-corner">
            <div className="ball" />
            <div className="band" />
            <div className="dumbbell" />
          </div>
          <div className="door-signal">
            <Mail size={22} />
            <span>OPEN SIGNAL</span>
          </div>
        </motion.div>

        <motion.div className="room-layer room-front" style={{ x: frontX, y: frontY }}>
          <div className="floor-perspective" />
          <div className="rug" />
          <div className="chair" />
          <div className="room-caption">
            <p>This is not a 3D model.</p>
            <strong>It is a symbolic room interface.</strong>
          </div>
        </motion.div>

        <Hotspot module={byId.desk} className="hotspot-desk" />
        <Hotspot module={byId.shelf} className="hotspot-shelf" />
        <Hotspot module={byId.map} className="hotspot-map" />
        <Hotspot module={byId.core} className="hotspot-core" />
        <Hotspot module={byId.sport} className="hotspot-sport" />
        <Hotspot module={byId.window} className="hotspot-window" />
        <Hotspot module={byId.contact} className="hotspot-contact" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="site-shell text-white">
      <div className="ambient-grid" />
      <div className="ambient-light ambient-a" />
      <div className="ambient-light ambient-b" />
      {modules.map((module) => (
        <ModulePanel key={module.id} module={module} />
      ))}

      <header className="site-nav">
        <a href="#room" className="brand-mark">
          <span>SR</span>
          <div>
            <strong>Shifter&apos;s Room</strong>
            <small>Pavel Tagiev</small>
          </div>
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#system">System</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="room" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">18 · Germany · AI × education × systems</p>
          <h1>
            From a student room <span>to an AI education platform.</span>
          </h1>
          <p className="hero-lead">
            I’m Pavel “Shifter” Tagiev — an international student in Germany building Mycelium University: a clearer way for students to understand university fit, requirements, and their next steps.
          </p>
          <div className="hero-actions">
            <a href="#story">Read the 2-minute story <ArrowUpRight size={18} /></a>
            <a href="#projects">View proof of work <Sparkles size={18} /></a>
          </div>
        </div>

        <div className="desktop-only">
          <DesktopRoom />
        </div>

        <div className="mobile-room-card">
          <p className="eyebrow">The room metaphor</p>
          <h2>One place for the story.</h2>
          <p>The room is a simple way to explain the work: a desk for projects, a shelf for learning, a map for universities, and an AI core for execution.</p>
        </div>
      </section>

      <section id="story" className="story-section" aria-label="Two minute story">
        <div className="section-heading story-heading">
          <p className="eyebrow">2-minute story</p>
          <h2>From who I am to why this matters.</h2>
          <p>Designed for universities, future collaborators, and people who want the signal without reading a long personal diary.</p>
        </div>
        <div className="story-grid">
          {storySteps.map((step) => (
            <article key={step.label}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Desk / proof of work</p>
          <h2>Projects that make the room real.</h2>
          <p>Not decorative portfolio cards — each project is a system I’m building or using.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name}>
              <div className="project-status">{project.status}</div>
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <a href="#contact">Details on request <ExternalLink size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="system-section">
        <div className="system-card wide">
          <p className="eyebrow">Execution system</p>
          <h2>AI is the workflow, not the headline.</h2>
          <p>
            I use AI agents, structured notes, research workflows, and project roadmaps to move from idea to implementation. The goal is simple: better decisions, faster iteration, and visible proof.
          </p>
        </div>
        <div className="system-card">
          <Activity />
          <strong>Research loop</strong>
          <span>sources, notes, analysis, next actions</span>
        </div>
        <div className="system-card">
          <Target />
          <strong>Admission roadmap</strong>
          <span>fit, requirements, fees, deadlines</span>
        </div>
        <div className="system-card">
          <FolderKanban />
          <strong>Builder pipeline</strong>
          <span>problem → prototype → proof → users</span>
        </div>
      </section>

      <section className="learning-strip" aria-label="Learning targets">
        {learning.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Door / signal</p>
          <h2>Building in AI, education, or student systems?</h2>
          <p>Let’s connect. This room is the public entrance to the work behind it.</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:agentgmailbox@gmail.com"><Mail size={18} /> Email</a>
          <a href="#contact"><MessageCircle size={18} /> Telegram / LinkedIn on request</a>
          <a href="https://github.com/ShifterXD" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
        </div>
      </section>

    </main>
  );
}
