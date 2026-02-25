"use client";

import { useState } from "react";
import type { SkillEntry } from "@/app/skills/page";

const OS_ICONS: Record<string, string> = {
  macos: "🍎",
  windows: "🪟",
  linux: "🐧",
};

const CATEGORY_COLORS: Record<string, string> = {
  communication: "var(--color-brand-blue)",
  social: "var(--color-brand-cyan)",
  productivity: "var(--color-brand-green)",
  browser: "var(--color-brand-amber)",
  files: "var(--color-brand-amber)",
  other: "var(--color-text-secondary)",
};

function SkillCard({ skill }: { skill: SkillEntry }) {
  const color = CATEGORY_COLORS[skill.category] ?? CATEGORY_COLORS.other;

  return (
    <div className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col gap-4 hover:border-[var(--color-brand-blue)]/50 transition-all duration-200">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full border"
          style={{
            color,
            borderColor: color + "40",
            backgroundColor: color + "10",
          }}
        >
          {skill.category}
        </span>
        {skill.verified && (
          <span className="flex items-center gap-1 text-xs text-[var(--color-brand-green)]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            verified
          </span>
        )}
      </div>

      {/* Name + description */}
      <div>
        <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-brand-blue)] transition-colors">
          {skill.name}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* OS badges */}
      {skill.os && skill.os.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {skill.os.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              {OS_ICONS[platform] ?? "💻"} {platform}
            </span>
          ))}
        </div>
      )}

      {/* Tags + link */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <a
          href={skill.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-brand-blue)] transition-colors shrink-0 ml-2"
        >
          View →
        </a>
      </div>
    </div>
  );
}

const ALL = "all";

export default function SkillsGrid({ skills }: { skills: SkillEntry[] }) {
  const categories = [ALL, ...Array.from(new Set(skills.map((s) => s.category)))];
  const allOS = Array.from(
    new Set(skills.flatMap((s) => s.os ?? ["macos"]))
  ).sort();
  const [active, setActive] = useState(ALL);
  const [activeOS, setActiveOS] = useState(ALL);
  const [query, setQuery] = useState("");

  const filtered = skills.filter((s) => {
    const matchesCategory = active === ALL || s.category === active;
    const skillOS = s.os ?? ["macos"];
    const matchesOS = activeOS === ALL || skillOS.includes(activeOS);
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesOS && matchesQuery;
  });

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
            >
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search skills…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] pl-8 pr-4 py-2 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-blue)] transition-colors"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-lg px-3 py-1.5 text-sm capitalize transition-all ${
                  active === cat
                    ? "bg-[var(--color-brand-blue)] text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* OS filter row */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--color-text-secondary)] shrink-0">Platform:</span>
          <div className="flex flex-wrap gap-2">
            {[ALL, ...allOS].map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveOS(platform)}
                className={`rounded-lg px-3 py-1 text-xs capitalize transition-all ${
                  activeOS === platform
                    ? "bg-[var(--color-brand-blue)] text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)]/50"
                }`}
              >
                {platform === ALL ? "All" : `${OS_ICONS[platform] ?? "💻"} ${platform}`}
              </button>
            ))}
            {allOS.length === 1 && allOS[0] === "macos" && (
              <span className="text-xs text-[var(--color-text-secondary)] self-center ml-1 opacity-60">
                · Windows &amp; Linux coming soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center text-[var(--color-text-secondary)]">
          <p className="text-lg mb-2">No skills found</p>
          <a
            href="https://github.com/cyclop-one/cyclop-hub/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-brand-blue)] hover:underline"
          >
            Be the first to add one →
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      )}

      {/* Submit CTA */}
      <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
          Have a skill to share?
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-5 text-sm">
          Skills are just two files — a JSON manifest and a Markdown description.
          No code required for UI automation skills.
        </p>
        <a
          href="https://github.com/cyclop-one/cyclop-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-brand-blue)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-brand-blue)]/90 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          Contribute on GitHub
        </a>
      </div>
    </section>
  );
}
