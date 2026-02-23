export default function Eye() {
  return (
    <div className="eye-container relative flex items-center justify-center" aria-hidden="true">
      {/* Glow ring */}
      <div className="eye-glow-ring" />
      {/* Sclera */}
      <div className="eye-sclera">
        {/* Iris */}
        <div className="eye-iris">
          {/* Spinning overlay */}
          <div className="eye-iris-spin" />
          {/* Pupil */}
          <div className="eye-pupil" />
        </div>
        {/* Specular highlight */}
        <div className="eye-specular" />
      </div>
    </div>
  );
}
