interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/xlogica-logo.png"
        alt="X-LOGICA"
        className={`h-10 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}
