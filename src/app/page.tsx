"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
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

const desktopFolders: { id: Panel; label: string; icon: React.ReactNode }[] = [
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

const panelContent: Record<Panel, { title: string; kicker: string; body: string[] }> = {
  projects: {
    title: "Projects",
    kicker: "Builder mode",
    body: [
      "Mycelium University — AI platform for international students.",
      "Portfolio Lab — this interactive floating room experience.",
      "More projects will be added with links, demos, and build notes.",
    ],
  },
  skills: {
    title: "Skills",
    kicker: "Tools I use to build",
    body: [
      "AI agents, automation, product thinking, research, and web development.",
      "Learning path: CS50x, Python, data science, Next.js, Supabase, TypeScript.",
      "Strengths: strategy, fast learning, international perspective, execution with AI.",
    ],
  },
  experience: {
    title: "Experience",
    kicker: "Student → builder → founder",
    body: [
      "Greek high school graduate in Germany, focused on AI, economics, data, and entrepreneurship.",
      "Building real products while preparing for international university admissions.",
    ],
  },
  timeline: {
    title: "Timeline",
    kicker: "Life journey",
    body: [
      "Basketball since childhood, multilingual upbringing, international education path.",
      "2026 summer: IELTS, SAT, CS50x, Mycelium, personal brand, German B1 path.",
    ],
  },
  goals: {
    title: "Goals",
    kicker: "Future founder energy",
    body: [
      "Build Mycelium into a useful product for students worldwide.",
      "Reach strong university options in Data Science, AI, Management, or Economics.",
      "Become a one-person army with AI agents, discipline, and deep work.",
    ],
  },
  contact: {
    title: "Contact",
    kicker: "Let’s connect",
    body: [
      "Instagram, Discord, Reddit, and Gmail links will live as desktop icons.",
      "This page will become Pavel’s personal operating system and public identity hub.",
    ],
  },
  capicode: {
    title: "Agent Capicode",
    kicker: "Sleeping AI mascot",
    body: [
      "Capicode is my personal AI agent, powered by Hermes.",
      "It helps me organize projects, research topics, automate tasks, learn skills, and manage daily life.",
      "Basically: a capybara-shaped second brain.",
    ],
  },
  languages: {
    title: "Languages",
    kicker: "International identity",
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
    body: [
      "Atomic Habits, Deep Work, Thinking Fast and Slow, Sapiens, The 5 AM Club.",
      "Later each book can open notes, quotes, and personal lessons.",
    ],
  },
  certificates: {
    title: "Certificates",
    kicker: "Achievement archive",
    body: [
      "Academic achievements, online courses, certifications, competitions, and future accomplishments.",
      "Each certificate will have a direct verification link.",
    ],
  },
  basketball: {
    title: "Basketball",
    kicker: "Discipline and resilience",
    body: [
      "I love basketball and have played since I was 10 years old.",
      "It taught me discipline, consistency, teamwork, resilience, and recovery mindset.",
    ],
  },
  games: {
    title: "Favorite Games",
    kicker: "Nostalgia corner",
    body: [
      "FIFA, Brawl Stars, Apex Legends, GTA V, Red Dead Redemption 2, Ghost of Tsushima.",
      "This section shows personality, taste, and memories — not just gaming flex.",
    ],
  },
};

function PanelModal({ panel, onClose }: { panel: Panel | null; onClose: () => void }) {
  if (!panel) return null;
  const content = panelContent[panel];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center bg-[#120b1d]/60 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.article
          className="panel-card relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#19152a]/90 p-6 text-white shadow-2xl"
          initial={{ y: 30, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
        >
          <button
            aria-label="Close panel"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <X size={18} />
          </button>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/80">
            {content.kicker}
          </p>
          <h2 className="mb-5 text-3xl font-black tracking-tight md:text-5xl">{content.title}</h2>
          <div className="space-y-3 text-base leading-7 text-white/82">
            {content.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}

function HoverTag({ label }: { label: string }) {
  return <span className="hover-tag">{label}</span>;
}

export default function Home() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [panel, setPanel] = useState<Panel | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#8ab8ff] text-white">
      <div className="sky-gradient" />
      <div className="sun" />
      <div className="cloud cloud-a" />
      <div className="cloud cloud-b" />
      <div className="cloud cloud-c" />
      <div className="particles" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 md:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Pavel&apos;s Room</p>
            <h1 className="text-lg font-black md:text-2xl">Interactive Floating World</h1>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm text-emerald-100 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Building my future
          </div>
        </header>

        <div className="grid flex-1 items-center gap-6 py-8 lg:grid-cols-[240px_1fr_240px]">
          <aside className="space-y-3">
            {["Welcome", "Projects", "Skills", "More"].map((item, index) => (
              <motion.button
                key={item}
                className="glass-button w-full text-left"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setPanel(item === "Welcome" ? "timeline" : item === "More" ? "goals" : (item.toLowerCase() as Panel))}
              >
                <span className="text-white/55">0{index + 1}</span>
                <strong>{item}</strong>
              </motion.button>
            ))}
          </aside>

          <motion.div
            className="room-wrap"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="room-shadow" />
            <div className="room">
              <div className="window left-window"><span /></div>
              <div className="window right-window"><span /></div>
              <div className="led-strip" />

              <button className="language-shelf interactive" onClick={() => setPanel("books")}>
                <HoverTag label="Language Shelf" />
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
              </button>

              <button className="certificate interactive" onClick={() => setPanel("certificates")}>
                <HoverTag label="Certificates" />
                <Trophy size={28} />
              </button>

              <div className="desk">
                <button className="monitor interactive" onClick={() => setDesktopOpen(true)}>
                  <HoverTag label="Computer" />
                  <div className="screen-glow">
                    <Code2 size={34} />
                    <p>SHIFTER OS</p>
                  </div>
                </button>
                <div className="keyboard" />
                <div className="mouse" />
              </div>

              <button className="ps4 interactive" onClick={() => setPanel("games")}>
                <HoverTag label="PS4" />
                <Gamepad2 size={28} />
              </button>

              <div className="bed">
                <button className="capicode interactive" onClick={() => setPanel("capicode")}>
                  <HoverTag label="Agent Capicode" />
                  <span className="zzz">Zzz</span>
                  <span className="bubble" />
                  <span className="capy-head" />
                  <span className="capy-body" />
                </button>
              </div>

              <button className="basketball interactive" onClick={() => setPanel("basketball")}>
                <HoverTag label="Basketball" />
              </button>

              <div className="plant plant-left" />
              <div className="plant plant-right" />
            </div>
          </motion.div>

          <aside className="space-y-3">
            <div className="status-card">
              <Sparkles className="text-amber-200" />
              <p className="text-sm text-white/65">Location</p>
              <strong>Somewhere above Heilbronn clouds</strong>
            </div>
            <div className="status-card">
              <Brain className="text-cyan-200" />
              <p className="text-sm text-white/65">Identity</p>
              <strong>Builder · Student · Future Founder · AI Enthusiast</strong>
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
              ["Home", <CircleUserRound key="home" />],
              ["Code", <Code2 key="code" />],
              ["Profile", <GraduationCap key="profile" />],
              ["Goals", <Goal key="goals" />],
              ["Contact", <Mail key="mail" />],
            ].map(([label, icon]) => (
              <button key={label as string} onClick={() => setPanel(label === "Code" ? "skills" : label === "Contact" ? "contact" : label === "Goals" ? "goals" : "timeline")}>
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
            className="fixed inset-0 z-40 bg-[#080b18]/80 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="desktop-window mx-auto h-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#111827]/90 shadow-2xl"
              initial={{ scale: 0.88, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
            >
              <div className="desktop-topbar">
                <div className="flex gap-2"><span /><span /><span /></div>
                <strong>Shifter OS</strong>
                <button onClick={() => setDesktopOpen(false)}>Close</button>
              </div>
              <div className="desktop-grid">
                <div className="desktop-icons">
                  {[...desktopFolders, ...socialIcons].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => "id" in item ? setPanel(item.id) : undefined}
                      className="desktop-icon"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
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
