import EyeLogo from "./EyeLogo";
import BrandName from "./BrandName";

export default function Navbar() {
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <EyeLogo size={28} />
          <BrandName className="text-lg text-text-primary" />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yuvalsuede/cyclop-one"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white hover:bg-brand-blue/90 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
