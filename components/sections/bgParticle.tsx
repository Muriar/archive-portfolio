import Particles from "@/components/Particles";

type BgParticleProps = {
  getScrollTop?: () => number;
};

export default function BgParticle({ getScrollTop }: BgParticleProps) {
  return (
<div className="absolute inset-0 h-full w-full pointer-events-none">

      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        getScrollTop={getScrollTop}
      />
    </div>
  );
}