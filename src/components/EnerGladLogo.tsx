import { Sun } from "lucide-react";

const EnerGladLogo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Sun icon with circle */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-foreground"></div>
        <Sun className="w-6 h-6 text-foreground" strokeWidth={1.5} />
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold tracking-wide font-display">
          ENER<span className="text-primary">GLAD</span>
        </span>
        <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          Renewables
        </span>
      </div>
    </div>
  );
};

export default EnerGladLogo;
