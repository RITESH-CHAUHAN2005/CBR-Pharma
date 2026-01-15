import { useEffect, useState } from "react";
import capsuleImage from "@/assets/capsule.png";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Main Capsule Animation */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-150 animate-pulse" />
          
          {/* Capsule with bounce and rotate animation */}
          <div className="relative animate-capsule-bounce">
            <img 
              src={capsuleImage} 
              alt="Loading" 
              className="w-32 h-32 object-contain drop-shadow-2xl animate-capsule-rotate"
            />
          </div>
        </div>

        {/* Orbiting pills */}
        <div className="relative w-48 h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-orbit">
              <div className="w-4 h-6 rounded-full bg-primary shadow-lg" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
            <div className="animate-orbit-reverse">
              <div className="w-3 h-5 rounded-full bg-accent shadow-lg" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: "1s" }}>
            <div className="animate-orbit" style={{ animationDuration: "2s" }}>
              <div className="w-3 h-5 rounded-full bg-primary/60 shadow-lg" />
            </div>
          </div>
        </div>

        {/* Brand text */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h1 className="font-display text-3xl font-bold text-primary tracking-wide">
            CBR Pharma
          </h1>
          <p className="text-muted-foreground text-sm mt-2">Clinical Based Remedies</p>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
