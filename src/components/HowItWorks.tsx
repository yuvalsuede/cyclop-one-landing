const steps = [
  {
    number: "01",
    title: "Tell it what to do",
    description:
      "Type a natural-language command or send a voice note. No scripts, no syntax.",
    color: "text-brand-blue",
    borderColor: "border-brand-blue/30",
  },
  {
    number: "02",
    title: "Watch it think and act",
    description:
      "The eye cycles through states — observing your screen, reasoning about what to do, then executing actions.",
    color: "text-brand-amber",
    borderColor: "border-brand-amber/30",
  },
  {
    number: "03",
    title: "Verify and approve",
    description:
      "Every completed task is verified with vision. You stay in control with tiered permissions and an exit lock.",
    color: "text-brand-green",
    borderColor: "border-brand-green/30",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-primary">
          How it works
        </h2>
        <p className="mt-3 text-center text-text-secondary">
          Three steps. Zero configuration.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-2xl border ${step.borderColor} bg-surface p-8`}
            >
              <span className={`text-4xl font-bold ${step.color} opacity-30`}>
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
