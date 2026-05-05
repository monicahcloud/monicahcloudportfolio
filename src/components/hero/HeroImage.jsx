const HeroImage = ({ mobile }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${
        mobile ? "h-[340px] w-[320px]" : "h-[640px] w-[680px]"
      }`}>
      {/* Glow */}
      <div className="absolute rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 blur-3xl opacity-70 w-full h-full" />

      {/* Image */}
      <img
        src="/fullerbody.png"
        className="relative z-10 w-[75%] object-contain"
      />

      {/* Quote */}
      <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md p-3 rounded-xl text-sm">
        Create in me a clean heart...
      </div>
    </div>
  );
};

export default HeroImage;
