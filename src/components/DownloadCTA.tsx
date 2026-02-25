export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Ready to let your Mac work for you?
        </h2>
        <p className="mt-4 text-text-secondary">
          Download Cyclop One and give it a task. It takes 30 seconds.
        </p>

        <a
          href="https://github.com/cyclop-one/cyclop-one/releases/download/v0.1.0/CyclopOne-0.1.0.dmg"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-lg font-semibold text-white hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20"
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
          Download for macOS
        </a>

        {/* System requirements */}
        <div className="mt-6 rounded-2xl border border-border bg-surface p-6 text-left">
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
            System Requirements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-secondary">macOS</span>
              <span className="text-text-primary font-medium">14.0 (Sonoma) or later</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-secondary">Architecture</span>
              <span className="text-text-primary font-medium">Apple Silicon &amp; Intel</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-secondary">API Key</span>
              <span className="text-text-primary font-medium">Anthropic Claude API</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-text-secondary">Permissions</span>
              <span className="text-text-primary font-medium">Accessibility + Screen Recording</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
