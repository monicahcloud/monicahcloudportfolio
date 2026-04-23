import React from "react";

function DotGrid({
  className = "",
  count = 24,
  color = "#1d9aa2",
  cols = 6,
  opacity = "opacity-70",
}) {
  return (
    <div
      className={`absolute grid gap-2 ${opacity} ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function LeftRings() {
  return (
    <>
      <div className="absolute -left-28 top-10 h-80 w-80 rounded-full border border-[#f4c9b4]/60" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full border border-[#f4c9b4]/40" />
    </>
  );
}

function RightGlow() {
  return (
    <>
      <div className="absolute right-[-180px] top-[60px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,#ffd8c5_0%,#f5bfd7_40%,#d8c0f4_70%,transparent_100%)] opacity-80 blur-3xl" />
      <div className="absolute right-[-40px] top-[110px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#6ee2e5_0%,#28bfd0_18%,#f6b8a6_55%,#ebb4d8_78%,#c996ea_100%)] opacity-75 blur-[6px]" />
      <div className="absolute bottom-[-120px] right-[80px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,#f7cdbf_0%,#eab8d8_48%,#d4b6ef_78%,transparent_100%)] opacity-70 blur-3xl" />
    </>
  );
}

function BottomWave() {
  return (
    <div className="absolute bottom-[220px] left-0 h-24 w-full bg-[radial-gradient(circle_at_20%_0%,rgba(244,201,180,0.28),transparent_22%),radial-gradient(circle_at_85%_0%,rgba(244,201,180,0.22),transparent_18%)]" />
  );
}

function LeafGraphicLeft() {
  return (
    <svg
      width="120"
      height="180"
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-80">
      <path
        d="M18 170C24 145 38 118 56 92C74 66 95 42 116 20"
        stroke="#F19A63"
        strokeWidth="1.5"
      />
      <path d="M56 92C42 88 28 78 18 62" stroke="#F19A63" strokeWidth="1.5" />
      <path
        d="M56 92C46 104 38 118 34 134"
        stroke="#F19A63"
        strokeWidth="1.5"
      />
      <path d="M74 66C62 60 50 48 42 34" stroke="#F19A63" strokeWidth="1.5" />
      <path d="M95 42C84 36 74 24 68 12" stroke="#F19A63" strokeWidth="1.5" />
    </svg>
  );
}

function LeafGraphicRight() {
  return (
    <svg
      width="150"
      height="220"
      viewBox="0 0 150 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-80">
      <path
        d="M20 200C34 170 52 140 74 112C96 84 121 56 146 28"
        stroke="#F19A63"
        strokeWidth="1.5"
      />
      <path
        d="M74 112C92 108 108 94 120 78"
        stroke="#F19A63"
        strokeWidth="1.5"
      />
      <path
        d="M74 112C88 126 98 142 104 160"
        stroke="#F19A63"
        strokeWidth="1.5"
      />
      <path
        d="M96 84C112 78 126 64 136 48"
        stroke="#F19A63"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ArcLines() {
  return (
    <svg
      width="240"
      height="180"
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60">
      <path d="M40 180C70 110 130 45 240 0" stroke="#C490F0" />
      <path d="M80 180C104 120 154 60 240 20" stroke="#C490F0" />
      <path d="M120 180C142 132 182 84 240 42" stroke="#C490F0" />
    </svg>
  );
}

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <LeftRings />
      <RightGlow />

      <DotGrid
        className="right-16 top-44"
        count={24}
        cols={6}
        color="#1d9aa2"
        opacity="opacity-70"
      />

      <DotGrid
        className="bottom-28 left-6"
        count={15}
        cols={5}
        color="#7c4ed8"
        opacity="opacity-40"
      />

      <div className="absolute bottom-52 left-0 hidden lg:block">
        <LeafGraphicLeft />
      </div>

      <div className="absolute right-0 top-56 hidden lg:block">
        <LeafGraphicRight />
      </div>

      <div className="absolute right-0 top-14 hidden xl:block">
        <ArcLines />
      </div>

      <BottomWave />
    </div>
  );
}
