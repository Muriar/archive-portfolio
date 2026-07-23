export function HeroGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(26,26,26,0.4),transparent_60%),radial-gradient(800px_circle_at_80%_30%,rgba(26,26,26,0.3),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(26,26,26,0.3),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}
