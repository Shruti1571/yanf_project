import RotatingGlobe from "@/components/RotatingGlobe";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Stars */}
      <div className="stars" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="float-animation">
          <RotatingGlobe />
        </div>

        <div className="text-center space-y-3 mt-4">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-glow text-foreground tracking-tight">
            Y𝑜𝓊𝓉𝒽A𝓈N𝒶𝓉𝒾𝑜𝓃F𝓇𝑜𝓃𝓉𝒾𝑒𝓇
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Something amazing is being built. Stay tuned for launch.
          </p>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </div>
  );
};

export default Index;
