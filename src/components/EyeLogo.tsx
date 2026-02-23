export default function EyeLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sclera */}
      <circle cx="50" cy="50" r="45" fill="url(#sclera-grad)" />
      {/* Iris */}
      <circle cx="50" cy="50" r="26" fill="url(#iris-grad)" />
      {/* Pupil */}
      <circle cx="50" cy="50" r="11" fill="url(#pupil-grad)" />
      {/* Specular */}
      <circle cx="62" cy="38" r="5" fill="white" opacity="0.8" />
      <defs>
        <radialGradient id="sclera-grad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e8e8f0" />
          <stop offset="100%" stopColor="#c8c8d8" />
        </radialGradient>
        <radialGradient id="iris-grad" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </radialGradient>
        <radialGradient id="pupil-grad" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="60%" stopColor="#0a0a12" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>
    </svg>
  );
}
