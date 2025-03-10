const SubHero = () => {
  return (
    <div className="mt-12 w-full border-y border-gray-600 bg-slate-800 text-gray-300 overflow-hidden">
      {/* Infinite Scrolling Text */}
      <div className="flex gap-20 py-6 animate-scroll">
        {[...Array(2)].map(() =>
          [
            "Attention to Detail",
            "Team Player",
            "Fast Learner",
            "Problem Solver",
            "Strong Communicator",
            "Adaptable",
            "Collaborative",
            "Critical Thinker",
            "Results-Driven",
            "Self-Motivated",
          ].map((text, index) => (
            <p
              key={text + index}
              className="text-3xl font-semibold whitespace-nowrap text-gray-300">
              {text}
            </p>
          ))
        )}
      </div>

      <style>
        {`
          .animate-scroll {
            white-space: nowrap;
            display: flex;
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SubHero;
