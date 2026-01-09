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
      {/* Center circle */}
      <circle cx="32" cy="32" r="10" fill="currentColor" />
      
      {/* Radiating rays - 8 rays around the sun */}
      {/* Top */}
      <rect x="30" y="8" width="4" height="10" rx="2" fill="currentColor" />
      {/* Bottom */}
      <rect x="30" y="46" width="4" height="10" rx="2" fill="currentColor" />
      {/* Left */}
      <rect x="8" y="30" width="10" height="4" rx="2" fill="currentColor" />
      {/* Right */}
      <rect x="46" y="30" width="10" height="4" rx="2" fill="currentColor" />
      
      {/* Diagonal rays */}
      {/* Top-right */}
      <rect x="45" y="13" width="4" height="10" rx="2" fill="currentColor" transform="rotate(45 47 18)" />
      {/* Top-left */}
      <rect x="13" y="15" width="4" height="10" rx="2" fill="currentColor" transform="rotate(-45 15 20)" />
      {/* Bottom-right */}
      <rect x="47" y="43" width="4" height="10" rx="2" fill="currentColor" transform="rotate(-45 49 48)" />
      {/* Bottom-left */}
      <rect x="13" y="41" width="4" height="10" rx="2" fill="currentColor" transform="rotate(45 15 46)" />
    </svg>
  );
};

export default SunIcon;
