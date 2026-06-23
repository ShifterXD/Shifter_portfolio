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
    short: "AI products, demos, and proof of work.",
    icon: <Monitor />,
    accent: "#38bdf8",
    bullets: [
      "Mycelium University — AI platform for international students building realistic admission roadmaps.",
      "Portfolio lab — this room becomes the public interface for my identity and work.",
      "Shipping rule: every project needs a real link, clear problem, and visible proof.",
    ],
  },
  {
    id: "shelf",
    object: "Bookshelf",
    title: "Learning Shelf",
    short: "SAT, IELTS, CS50x, German, Data/AI.",
    icon: <BookOpen />,
    accent: "#f59e0b",
    bullets: [
      "SAT → 1400 target with math mastery and timed practice.",
      "IELTS → 7.0–7.5+ for international English-taught programs.",
      "CS50x, Python, data science, AI, business analytics, and German B1/B2 path.",
    ],
  },
  {
    id: "map",
    object: "Wall Map",
    title: "University Roadmap",
    short: "Germany → global universities → international life.",
    icon: <Map />,
    accent: "#a78bfa",
    bullets: [
      "Targets include TUM Heilbronn, Nagoya G30, JADS, UC3M, and other English-taught options.",
      "The goal is not fantasy prestige — it is realistic fit, requirements, fees, and execution plan.",
      "Mycelium University is built from this exact problem: students need clarity, not random lists.",
    ],
  },
  {
    id: "core",
    object: "Kapicode Core",
    title: "AI Agent System",
    short: "Personal AI assistant layer for planning and automation.",
    icon: <Brain />,
    accent: "#22c55e",
    bullets: [
      "Kapicode helps with planning, research, Obsidian, coding, screen-time data, and daily reports.",
      "The website shows the idea visually: my room is not decoration, it is an operating system.",
      "AI is used as leverage — not as a generic buzzword or robot mascot.",
    ],
  },
  {
    id: "sport",
    object: "Sports Corner",
    title: "Discipline Corner",
    short: "Basketball, strength, ACL recovery, routine.",
    icon: <Dumbbell />,
    accent: "#fb7185",
    bullets: [
      "Basketball since childhood and a long-term dunk / strength goal.",
      "ACL recovery and symmetry work turned training into a discipline system.",
      "This corner keeps the site human: ambition is physical, not just digital.",
    ],
  },
  {
    id: "window",
    object: "Window",
    title: "Outside World",
    short: "Heilbronn now. International future next.",
    icon: <MoonStar />,
    accent: "#60a5fa",
    bullets: [
      "The window represents the outside path: Germany, universities, community, independence.",
      "The room is calm, but it is aimed outward — building a life, not just a website.",
      "Visual mood: night focus, warm lamp, city lights, and a future that feels reachable.",
    ],
  },
  {
    id: "contact",
    object: "Door / Signal",
    title: "Contact Signal",
    short: "For builders, students, AI and education people.",
    icon: <Mail />,
    accent: "#2dd4bf",
    bullets: [
      "If you build in AI, education, admissions, student tools, or personal systems — connect.",
      "The contact area should feel like opening the door from the room to the outside world.",
      "Public links are intentionally minimal for now: GitHub is live, private demos and direct contact are shared on request.",
    ],
  },
];

const projects = [
  {
    name: "Mycelium University",
    status: "flagship",
    text: "AI platform helping international students understand realistic university options, requirements, and admission roadmaps.",
  },
  {
    name: "Kapicode Agent System",
    status: "private OS",
    text: "Personal AI agent workflows for planning, Obsidian, health/screen-time data, reminders, and research.",
  },
  {
    name: "SAT Math Mastery",
    status: "active",
    text: "30-day SAT math practice system with notes, visual cards, and mastery tracking toward 1400 SAT.",
  },
  {
    name: "Shifter's Room",
    status: "portfolio",
    text: "This website: a symbolic 2.5D room instead of a generic developer template or painful 3D model.",
  },
];

const learning = ["SAT 1400", "IELTS 7.5", "CS50x", "German B1/B2", "Data Science", "AI Products"];

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
          <p className="eyebrow">18 · Germany · AI × education × discipline</p>
          <h1>
            Enter my room. <span>Every object is a part of the system I am building.</span>
          </h1>
          <p className="hero-lead">
            I’m Pavel “Shifter” Tagiev — building Mycelium University, preparing for global universities, and using AI agents to turn ambition into routines, projects, and proof.
          </p>
          <div className="hero-actions">
            <a href="#projects">View proof of work <ArrowUpRight size={18} /></a>
            <a href="#panel-core">Open Kapicode Core <Sparkles size={18} /></a>
          </div>
        </div>

        <div className="desktop-only">
          <DesktopRoom />
        </div>

        <div className="mobile-room-card">
          <div className="mobile-room-visual">
            <div className="mini-window" />
            <div className="mini-monitor" />
            <div className="mini-shelf" />
            <div className="mini-orb" />
          </div>
          <p className="eyebrow">Mobile room index</p>
          <h2>Shifter’s Room</h2>
          <p>Tap a module. Mobile is designed like a native personal dashboard, not a squeezed desktop scene.</p>
        </div>
      </section>

      <section className="mobile-index" aria-label="Room modules">
        {modules.map((module, index) => (
        <a key={module.id} href={`#panel-${module.id}`} style={{ "--module": module.accent } as React.CSSProperties}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>{module.icon}</div>
          <strong>{module.object}</strong>
          <small>{module.short}</small>
        </a>
        ))}
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
          <p className="eyebrow">Kapicode Core</p>
          <h2>My personal operating system is part of the story.</h2>
          <p>
            Obsidian, AI agents, health data, screen-time tracking, SAT/IELTS planning, and Mycelium research are connected into one loop: plan → execute → measure → improve.
          </p>
        </div>
        <div className="system-card">
          <Activity />
          <strong>Daily telemetry</strong>
          <span>sleep, steps, screen time, routines</span>
        </div>
        <div className="system-card">
          <Target />
          <strong>Admission roadmap</strong>
          <span>SAT, IELTS, CS50x, universities</span>
        </div>
        <div className="system-card">
          <FolderKanban />
          <strong>Builder pipeline</strong>
          <span>ideas → MVP → proof → community</span>
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
