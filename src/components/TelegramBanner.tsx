// Telegram remote-control feature highlight panel

export default function TelegramBanner() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#2AABEE]/20 bg-[var(--color-surface)] p-10 sm:p-14">
          {/* Subtle blue glow in the background */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#2AABEE]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#2AABEE]/6 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-10">
            {/* Left: text */}
            <div className="flex-1">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2AABEE]/30 bg-[#2AABEE]/10 px-4 py-1.5 text-sm font-medium text-[#2AABEE]">
                {/* Telegram paper-plane icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.97z"/>
                </svg>
                Remote Control via Telegram
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
                Control your Mac<br />from anywhere.
              </h2>

              <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                Connect Cyclop One to your Telegram account and send commands from
                your phone — text or voice notes. Your Mac executes them while
                you're away from your desk.
              </p>

              {/* Feature bullets */}
              <ul className="mt-7 space-y-3">
                {[
                  "Send tasks as text messages or voice notes",
                  "Get screenshots and confirmations back in chat",
                  "Works over any internet connection, no VPN needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2AABEE]/15">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2.5L8 2.5" stroke="#2AABEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: mock chat UI */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden shadow-xl">
                {/* Chat header */}
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2AABEE]/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#2AABEE">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.97z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-primary)]">Cyclop One</p>
                    <p className="text-[10px] text-[#2AABEE]">● online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex flex-col gap-3 px-4 py-4 text-xs">
                  {/* User message */}
                  <div className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-[#2AABEE] px-3 py-2 text-white">
                    send an email to mom saying I'll be late tonight
                  </div>

                  {/* Bot reply */}
                  <div className="self-start max-w-[80%] rounded-2xl rounded-bl-sm bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-secondary)]">
                    Opening Gmail… composing now ✓
                  </div>

                  {/* User voice note */}
                  <div className="self-end flex items-center gap-2 rounded-2xl rounded-br-sm bg-[#2AABEE]/80 px-3 py-2 text-white">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1a4 4 0 00-4 4v7a4 4 0 008 0V5a4 4 0 00-4-4zm-1 17.93V21h2v-2.07A8.001 8.001 0 0020 11h-2a6 6 0 01-12 0H4a8.001 8.001 0 007 7.93z"/>
                    </svg>
                    <span className="opacity-80">Voice note · 0:04</span>
                  </div>

                  {/* Bot reply */}
                  <div className="self-start max-w-[80%] rounded-2xl rounded-bl-sm bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-secondary)]">
                    Done! Email sent. 📬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
