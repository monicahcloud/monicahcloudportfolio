export default function DotSprinkle() {
  return (
    <div className="grid grid-cols-6 gap-2 opacity-60">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#f2b38c]" />
      ))}
    </div>
  );
}
