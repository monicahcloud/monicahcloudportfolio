const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl text-cyan-400" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
