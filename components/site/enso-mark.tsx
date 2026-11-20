type EnsoMarkProps = {
  className?: string;
};

export function EnsoMark({ className }: EnsoMarkProps) {
  return (
    <span
      className={`inline-block bg-current ${className ?? ''}`}
      style={{
        WebkitMaskImage: "url('/images/brand/enso-brush.webp')",
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskImage: "url('/images/brand/enso-brush.webp')",
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
      }}
      aria-hidden
    />
  );
}
