import EyeLogo from "./EyeLogo";
import BrandName from "./BrandName";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <EyeLogo size={24} />
          <BrandName className="text-sm text-text-secondary" />
        </div>

        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <a
            href="https://github.com/yuvalsuede/cyclop-one"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            Anthropic
          </a>
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            MIT License
          </a>
        </div>

        <p className="text-xs text-text-secondary/60">
          No tracking. No telemetry. Your Mac, your data.
        </p>
      </div>
    </footer>
  );
}
