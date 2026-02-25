import Eye from "./Eye";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center text-center gap-8 max-w-3xl">
        {/* Animated eye */}
        <div className="animate-fade-in-up">
          <Eye />
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up-delay-1">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-text-primary">
            Your Mac, on autopilot.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto">
            An AI agent that sees your screen, thinks with Claude, and takes real
            desktop actions — so you don&apos;t have to.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="https://github.com/cyclop-one/cyclop-one/releases/download/v0.1.0/CyclopOne-0.1.0.dmg"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-base font-semibold text-white hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download for Mac
          </a>
          <a
            href="https://github.com/cyclop-one/cyclop-one"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-base font-semibold text-text-primary hover:bg-surface-elevated transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Source
          </a>
        </div>

        {/* Badge */}
        <p className="text-sm text-text-secondary animate-fade-in-up-delay-3">
          macOS 14+ &middot; MIT License &middot; Zero Dependencies
        </p>
      </div>
    </section>
  );
}
