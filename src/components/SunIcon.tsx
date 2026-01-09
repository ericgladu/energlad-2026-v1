interface SunIconProps {
  className?: string;
  size?: number;
}

const SunIcon = ({ className = "", size = 48 }: SunIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
    >
      {/* Center ring (hollow) */}
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
      
      {/* Radiating rays - 8 short rays */}
      {/* Top */}
      <line x1="32" y1="6" x2="32" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Bottom */}
      <line x1="32" y1="48" x2="32" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Left */}
      <line x1="6" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Right */}
      <line x1="48" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      
      {/* Diagonal rays */}
      {/* Top-right */}
      <line x1="46" y1="18" x2="52" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Top-left */}
      <line x1="18" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Bottom-right */}
      <line x1="46" y1="46" x2="52" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Bottom-left */}
      <line x1="18" y1="46" x2="12" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default SunIcon;
