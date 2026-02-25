import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsGrid from "@/components/skills/SkillsGrid";

export const metadata: Metadata = {
  title: "Cyclop Hub — Community Skills for Cyclop One",
  description:
    "Browse and install community skills for Cyclop One. Skills teach the agent how to interact with Gmail, WhatsApp, X, and more.",
  openGraph: {
    title: "Cyclop Hub — Community Skills for Cyclop One",
    description:
      "Browse and install community skills for Cyclop One.",
    url: "https://cyclop.one/skills",
  },
};

export interface SkillEntry {
  name: string;
  version: string;
  description: string;
  author: string;
  category: string;
  tags: string[];
  verified: boolean;
  hasExecutableTools: boolean;
  skillURL: string;
  homepage: string;
  permissions: string[];
  os?: string[];
}

interface SkillsIndex {
  version: string;
  updatedAt: string;
  baseURL: string;
  skills: SkillEntry[];
}

async function getSkills(): Promise<SkillsIndex> {
  const res = await fetch(
    "https://raw.githubusercontent.com/cyclop-one/cyclop-hub/main/registry/index.json",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    return { version: "2.0", updatedAt: "", baseURL: "", skills: [] };
  }
  return res.json();
}

export default async function SkillsPage() {
  const index = await getSkills();

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Hero */}
        <section className="py-16 px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm text-[var(--color-text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand-green)] animate-pulse" />
              {index.skills.length} skills available · open source
            </div>
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight">
              Cyclop Hub
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Community skills that teach Cyclop One how to interact with your apps.
              No code required — just triggers, steps, and a description.
            </p>
            <a
              href="https://github.com/cyclop-one/cyclop-hub/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)] transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Submit a skill
            </a>
          </div>
        </section>

        {/* Grid */}
        <SkillsGrid skills={index.skills} />
      </main>
      <Footer />
    </>
  );
}
