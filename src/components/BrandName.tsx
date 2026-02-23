export default function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-semibold">Cyclop</span>
      <span className="font-light text-brand-blue">.</span>
      <span className="font-light">One</span>
    </span>
  );
}
