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
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-glow text-foreground tracking-tight px-4">
            <span className="text-5xl md:text-6xl font-extrabold">Y</span>
            <span className="text-2xl md:text-3xl font-normal opacity-80">𝑜𝓊𝓉𝒽</span>
            <span className="text-5xl md:text-6xl font-extrabold ml-1">A</span>
            <span className="text-2xl md:text-3xl font-normal opacity-80">𝓈</span>
            <span className="text-5xl md:text-6xl font-extrabold ml-1">N</span>
            <span className="text-2xl md:text-3xl font-normal opacity-80">𝒶𝓉𝒾𝑜𝓃𝓈'</span>
            <span className="text-5xl md:text-6xl font-extrabold ml-1">F</span>
            <span className="text-2xl md:text-3xl font-normal opacity-80">𝓇𝑜𝓃𝓉</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-md mx-auto px-4">
            Something amazing is being built. Stay tuned for launch.
          </p>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </div>
  );
};

export default Index;
