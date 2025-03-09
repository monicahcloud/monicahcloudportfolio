const SubHero = () => {
  return (
    <div className="mt-12 w-full border-y border-gray-600 bg-slate-800 text-gray-300 overflow-hidden">
      <div className="flex gap-20 py-6 animate-scroll">
        {[...Array(50)].map((_, index) => (
          <>
            <p key={index + "-1"} className="text-3xl">
              Attention to Detail
            </p>
            <p key={index + "-2"} className="text-3xl">
              Team Player
            </p>
            <p key={index + "-3"} className="text-3xl">
              Fast Learner
            </p>
            <p key={index + "-4"} className="text-3xl">
              Problem Solver
            </p>
            <p key={index + "-5"} className="text-3xl">
              Strong Communicator
            </p>
            <p key={index + "-6"} className="text-3xl">
              Adaptable
            </p>
            <p key={index + "-7"} className="text-3xl">
              Collaborative
            </p>
            <p key={index + "-8"} className="text-3xl">
              Critical Thinker
            </p>
            <p key={index + "-9"} className="text-3xl">
              Results-Driven
            </p>
            <p key={index + "-10"} className="text-3xl">
              Self-Motivated
            </p>
          </>
        ))}
      </div>

      <style>
        {`
          .animate-scroll {
            white-space: nowrap;
            display: flex;
            animation: scroll 40s linear infinite;
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
