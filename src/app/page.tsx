"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  CircleUserRound,
  Code2,
  Folder,
  Gamepad2,
  Goal,
  GraduationCap,
  Mail,
  MessageCircle,
  MoonStar,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

type Panel =
  | "projects"
  | "skills"
  | "experience"
  | "timeline"
  | "goals"
  | "contact"
  | "capicode"
  | "languages"
  | "books"
  | "certificates"
  | "basketball"
  | "games";

type PanelContent = {
  title: string;
  kicker: string;
  body: string[];
  accent: string;
};

const desktopFolders: { id: Panel; label: string; icon: ReactNode }[] = [
  { id: "projects", label: "Projects", icon: <Folder /> },
  { id: "skills", label: "Skills", icon: <Code2 /> },
  { id: "experience", label: "Experience", icon: <BriefcaseBusiness /> },
  { id: "timeline", label: "Timeline", icon: <CalendarDays /> },
  { id: "goals", label: "Goals", icon: <Goal /> },
  { id: "contact", label: "Contact", icon: <Mail /> },
];

const socialIcons = [
  { label: "Instagram", icon: <Camera />, href: "#" },
  { label: "Discord", icon: <MessageCircle />, href: "#" },
  { label: "Reddit", icon: <CircleUserRound />, href: "#" },
  { label: "Gmail", icon: <Mail />, href: "mailto:hello@shifter.dev" },
];

const panelContent: Record<Panel, PanelContent> = {
  projects: {
    title: "Projects",
    kicker: "Builder mode",
    accent: "from-cyan-300 to-violet-300",
    body: [
      "Mycelium University — AI platform for international students building realistic admission roadmaps.",
      "Pavel's Room — an interactive identity world instead of a generic portfolio.",
      "Future demos will live here with product notes, launch metrics, and real links.",
    ],
  },
  skills: {
    title: "Skills",
    kicker: "Tools I use to build",
    accent: "from-emerald-300 to-cyan-300",
    body: [
      "AI agents, automation, product thinking, research, and modern web development.",
      "Learning path: CS50x, Python, data science, Next.js, Supabase, and TypeScript.",
      "Strengths: strategy, fast learning, international perspective, and execution with AI.",
    ],
  },
  experience: {
    title: "Experience",
    kicker: "Student → builder → founder",
    accent: "from-amber-200 to-orange-300",
    body: [
      "Greek high school graduate in Germany, focused on AI, economics, data, and entrepreneurship.",
      "Building real products while preparing for international university admissions.",
    ],
  },
  timeline: {
    title: "Timeline",
    kicker: "Life journey",
    accent: "from-fuchsia-300 to-rose-300",
    body: [
      "Basketball since childhood, multilingual upbringing, and an international education path.",
      "2026 summer: IELTS, SAT, CS50x, Mycelium, personal brand, and German B1 path.",
    ],
  },
  goals: {
    title: "Goals",
    kicker: "Future founder energy",
    accent: "from-lime-200 to-emerald-300",
    body: [
      "Build Mycelium into a useful product for students worldwide.",
      "Reach strong university options in Data Science, AI, Management, or Economics.",
      "Become a one-person army with AI agents, discipline, and deep work.",
    ],
  },
  contact: {
    title: "Contact",
    kicker: "Let’s connect",
    accent: "from-sky-300 to-indigo-300",
    body: [
      "Instagram, Discord, Reddit, and Gmail links live as desktop icons inside Shifter OS.",
      "This page will become Pavel’s personal operating system and public identity hub.",
    ],
  },
  capicode: {
    title: "Agent Capicode",
    kicker: "Sleeping AI mascot",
    accent: "from-amber-200 to-cyan-200",
    body: [
      "Capicode is my personal AI agent, powered by Hermes.",
      "It helps me organize projects, research topics, automate tasks, learn skills, and manage daily life.",
      "Basically: a capybara-shaped second brain.",
    ],
  },
  languages: {
    title: "Languages",
    kicker: "International identity",
    accent: "from-violet-300 to-amber-200",
    body: [
      "Russian — C2 / native cultural knowledge.",
      "Greek — C2 / native-level daily and academic environment.",
      "English — C1 / advanced working proficiency.",
      "German — A1 / currently learning toward B1.",
    ],
  },
  books: {
    title: "Favorite Books",
    kicker: "Thinking patterns",
    accent: "from-orange-200 to-pink-300",
    body: [
      "Atomic Habits, Deep Work, Thinking Fast and Slow, Sapiens, The 5 AM Club.",
      "Later each book can open notes, quotes, and personal lessons.",
    ],
  },
  certificates: {
    title: "Certificates",
    kicker: "Achievement archive",
    accent: "from-yellow-200 to-amber-400",
    body: [
      "Academic achievements, online courses, certifications, competitions, and future accomplishments.",
      "Each certificate will have a direct verification link.",
    ],
  },
  basketball: {
    title: "Basketball",
    kicker: "Discipline and resilience",
    accent: "from-orange-300 to-red-400",
    body: [
      "I love basketball and have played since I was 10 years old.",
      "It taught me discipline, consistency, teamwork, resilience, and recovery mindset.",
    ],
  },
  games: {
    title: "Favorite Games",
    kicker: "Nostalgia corner",
    accent: "from-blue-300 to-fuchsia-300",
    body: [
      "FIFA, Brawl Stars, Apex Legends, GTA V, Red Dead Redemption 2, Ghost of Tsushima.",
      "This section shows personality, taste, and memories — not just gaming flex.",
    ],
  },
};

function PanelModal({ panel, onClose }: { panel: Panel | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {panel && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[#050611]/70 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="modal-shell relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#121426]/88 p-6 text-white shadow-2xl md:p-8"
            initial={{ y: 42, opacity: 0, scale: 0.94, rotateX: -8 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ y: 22, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 180, damping: 19 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${panelContent[panel].accent} opacity-20 blur-3xl`} />
            <button
              aria-label="Close panel"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 text-white/70 transition hover:bg-white/20 hover:text-white"
            >
              <X size={18} />
            </button>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
              {panelContent[panel].kicker}
            </p>
            <h2 className={`mb-6 bg-gradient-to-r ${panelContent[panel].accent} bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl`}>
              {panelContent[panel].title}
            </h2>
            <div className="space-y-4 text-base leading-7 text-white/80 md:text-lg">
              {panelContent[panel].body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HoverTag({ label }: { label: string }) {
  return <span className="hover-tag">{label}</span>;
}

function Hotspot({ className, label, onClick, children }: { className: string; label: string; onClick: () => void; children?: ReactNode }) {
  return (
    <button className={`${className} interactive hotspot`} onClick={onClick}>
      <HoverTag label={label} />
      {children}
      <span className="ping-ring" />
    </button>
  );
}

export default function Home() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [panel, setPanel] = useState<Panel | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 70, damping: 18 });
  const springY = useSpring(my, { stiffness: 70, damping: 18 });

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#070a1a] text-white"
      onMouseMove={(event) => {
        mx.set((event.clientX / window.innerWidth - 0.5) * 24);
        my.set((event.clientY / window.innerHeight - 0.5) * 18);
      }}
    >
      <div className="cosmic-sky" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="sun-core" />
      <div className="cloudscape cloudscape-back" />
      <div className="cloudscape cloudscape-front" />
      <div className="stars" />
      <div className="dust-field" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 md:px-8">
        <header className="top-glass flex items-center justify-between rounded-full px-4 py-3 shadow-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-white/58">Pavel&apos;s Room</p>
            <h1 className="text-lg font-black md:text-2xl">Interactive Floating World</h1>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-400/12 px-4 py-2 text-sm text-emerald-100 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_16px_#6ee7b7]" /> Building my future
          </div>
        </header>

        <div className="grid flex-1 items-center gap-6 py-7 lg:grid-cols-[250px_1fr_250px]">
          <aside className="space-y-3">
            {[
              ["Welcome", "timeline"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Goals", "goals"],
            ].map(([item, target], index) => (
              <button
                key={item}
                className="glass-button group w-full text-left"
                onClick={() => setPanel(target as Panel)}
              >
                <span className="text-white/45">0{index + 1}</span>
                <strong>{item}</strong>
                <Sparkles className="ml-auto h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </aside>

          <motion.div
            className="room-stage"
            style={{ rotateY: springX, rotateX: springY }}
          >
            <div className="island-shadow" />
            <div className="floating-island">
              <div className="island-rim" />
              <div className="room-shell">
                <div className="back-wall">
                  <div className="window mega-window left-window"><span /></div>
                  <div className="window mega-window right-window"><span /></div>
                  <div className="led-strip" />
                  <div className="poster-card poster-one">AI</div>
                  <div className="poster-card poster-two">MVP</div>
                </div>
                <div className="floor-grid" />

                <Hotspot className="language-shelf" label="Language Shelf" onClick={() => setPanel("languages")}>
                  {[
                    ["RU", "C2"],
                    ["GR", "C2"],
                    ["EN", "C1"],
                    ["DE", "A1"],
                  ].map(([lang, level]) => (
                    <span key={lang} title={`${lang} — ${level}`}>
                      <b>{lang}</b>
                      <small>{level}</small>
                    </span>
                  ))}
                </Hotspot>

                <Hotspot className="certificate" label="Certificates" onClick={() => setPanel("certificates")}>
                  <Trophy size={28} />
                </Hotspot>

                <div className="desk">
                  <Hotspot className="monitor" label="Computer" onClick={() => setDesktopOpen(true)}>
                    <div className="screen-noise" />
                    <div className="screen-glow">
                      <Code2 size={38} />
                      <p>SHIFTER OS</p>
                      <small>click to enter</small>
                    </div>
                  </Hotspot>
                  <div className="monitor-stand" />
                  <div className="keyboard"><i /><i /><i /></div>
                  <div className="mouse" />
                  <div className="desk-lamp"><span /></div>
                </div>

                <Hotspot className="ps4" label="PS4" onClick={() => setPanel("games")}>
                  <Gamepad2 size={30} />
                </Hotspot>

                <div className="bed">
                  <div className="blanket-wave" />
                  <Hotspot className="capicode" label="Agent Capicode" onClick={() => setPanel("capicode")}>
                    <span className="zzz z1">Z</span>
                    <span className="zzz z2">z</span>
                    <span className="zzz z3">z</span>
                    <span className="bubble" />
                    <span className="capy-ear" />
                    <span className="capy-head" />
                    <span className="capy-body" />
                    <span className="capy-face" />
                  </Hotspot>
                </div>

                <Hotspot className="basketball" label="Basketball" onClick={() => setPanel("basketball")} />
                <button className="book-note interactive" onClick={() => setPanel("books")}>Favorite Books</button>
                <div className="plant plant-left" />
                <div className="plant plant-right" />
                <div className="mini-rug" />
              </div>
            </div>
          </motion.div>

          <aside className="space-y-3">
            <div className="status-card">
              <Sparkles className="text-amber-200" />
              <p>Location</p>
              <strong>Somewhere above Heilbronn clouds</strong>
            </div>
            <div className="status-card">
              <Brain className="text-cyan-200" />
              <p>Identity</p>
              <strong>Builder · Student · Future Founder · AI Enthusiast</strong>
            </div>
            <div className="status-card hidden md:block">
              <MoonStar className="text-violet-200" />
              <p>Hint</p>
              <strong>Hover objects. Click the computer, capybara, shelf, ball, PS4.</strong>
            </div>
          </aside>
        </div>

        <footer className="grid gap-4 pb-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="intro-card">
            <p>Hi, I&apos;m Pavel</p>
            <strong>18 y/o international builder creating AI products for students.</strong>
          </div>
          <nav className="dock">
            {[
              ["Home", <CircleUserRound key="home" />, "timeline"],
              ["Code", <Code2 key="code" />, "skills"],
              ["Profile", <GraduationCap key="profile" />, "experience"],
              ["Goals", <Goal key="goals" />, "goals"],
              ["Contact", <Mail key="mail" />, "contact"],
            ].map(([label, icon, target]) => (
              <button key={label as string} onClick={() => setPanel(target as Panel)}>
                {icon}
                <span>{label as string}</span>
              </button>
            ))}
          </nav>
          <div className="intro-card md:text-right">
            <p>Status</p>
            <strong>Learning, shipping, and building my future.</strong>
          </div>
        </footer>
      </section>

      <AnimatePresence>
        {desktopOpen && (
          <motion.section
            className="fixed inset-0 z-40 bg-[#050611]/82 p-4 backdrop-blur-2xl md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="desktop-window mx-auto h-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#0d1328]/92 shadow-2xl"
              initial={{ scale: 0.82, y: 50, rotateX: -8 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 155, damping: 18 }}
            >
              <div className="desktop-wallpaper" />
              <div className="desktop-topbar">
                <div className="flex gap-2"><span /><span /><span /></div>
                <strong>Shifter OS</strong>
                <button onClick={() => setDesktopOpen(false)}>Close</button>
              </div>
              <div className="desktop-grid">
                <div className="desktop-icons">
                  {[...socialIcons, ...desktopFolders].map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.035 }}
                      onClick={() => ("id" in item ? setPanel(item.id) : window.open(item.href, "_blank"))}
                      className="desktop-icon"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
                <div className="desktop-note">
                  <BookOpen className="text-amber-200" />
                  <h2>Pavel&apos;s Digital Brain</h2>
                  <p>
                    This computer is the portal into projects, skills, experience, timeline,
                    goals, and contact links — designed like a personal operating system.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <PanelModal panel={panel} onClose={() => setPanel(null)} />
    </main>
  );
}
