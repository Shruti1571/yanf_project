import { useMemo } from "react";

interface GlobeItem {
  text: string;
  flag: string;
  lang: string;
}

const greetings: GlobeItem[] = [
  { text: "Hello", flag: "🇺🇸", lang: "English" },
  { text: "Hola", flag: "🇪🇸", lang: "Spanish" },
  { text: "Bonjour", flag: "🇫🇷", lang: "French" },
  { text: "Hallo", flag: "🇩🇪", lang: "German" },
  { text: "Ciao", flag: "🇮🇹", lang: "Italian" },
  { text: "Olá", flag: "🇧🇷", lang: "Portuguese" },
  { text: "こんにちは", flag: "🇯🇵", lang: "Japanese" },
  { text: "안녕하세요", flag: "🇰🇷", lang: "Korean" },
  { text: "你好", flag: "🇨🇳", lang: "Chinese" },
  { text: "مرحبا", flag: "🇸🇦", lang: "Arabic" },
  { text: "Привет", flag: "🇷🇺", lang: "Russian" },
  { text: "Merhaba", flag: "🇹🇷", lang: "Turkish" },
  { text: "Sawadee", flag: "🇹🇭", lang: "Thai" },
  { text: "Xin chào", flag: "🇻🇳", lang: "Vietnamese" },
  { text: "नमस्ते", flag: "🇮🇳", lang: "Hindi" },
  { text: "வணக்கம்", flag: "🇮🇳", lang: "Tamil" },
  { text: "నమస్కారం", flag: "🇮🇳", lang: "Telugu" },
  { text: "ನಮಸ್ಕಾರ", flag: "🇮🇳", lang: "Kannada" },
  { text: "നമസ്കാരം", flag: "🇮🇳", lang: "Malayalam" },
  { text: "নমস্কার", flag: "🇮🇳", lang: "Bengali" },
  { text: "નમસ્તે", flag: "🇮🇳", lang: "Gujarati" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", flag: "🇮🇳", lang: "Punjabi" },
  { text: "নমস্কাৰ", flag: "🇮🇳", lang: "Assamese" },
  { text: "ନମସ୍କାର", flag: "🇮🇳", lang: "Odia" },
];

const RotatingGlobe = () => {
  const sphereItems = useMemo(() => {
    const items: { greeting: GlobeItem; rotateY: number; rotateX: number; translateZ: number }[] = [];
    const count = greetings.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const rotateY = (Math.atan2(radius * Math.sin(theta), radius * Math.cos(theta)) * 180) / Math.PI;
      const rotateX = (Math.asin(y) * 180) / Math.PI;
      items.push({ greeting: greetings[i], rotateY, rotateX, translateZ: 180 });
    }
    return items;
  }, []);

  return (
    <div className="globe-container relative flex items-center justify-center" style={{ width: 400, height: 400 }}>
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-full globe-glow" />

      {/* Wireframe rings */}
      <div
        className="absolute rounded-full border border-primary/20"
        style={{ width: 220, height: 220, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute rounded-full border border-secondary/15"
        style={{ width: 260, height: 260, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Rotating items */}
      <div className="globe-sphere absolute" style={{ width: 0, height: 0, top: "50%", left: "50%" }}>
        {sphereItems.map(({ greeting, rotateY, rotateX, translateZ }, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="flex flex-col items-center gap-0.5 select-none"
              style={{ transform: "translateX(-50%) translateY(-50%)" }}
            >
              <span className="text-2xl">{greeting.flag}</span>
              <span className="text-xs font-medium text-foreground/80 whitespace-nowrap font-display">
                {greeting.text}
              </span>
              <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                {greeting.lang}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingGlobe;
