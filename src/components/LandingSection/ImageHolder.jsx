export default function ImageHolder() {
  return (
    <div className="grid self-center">
      <div className="relative">
        <img
          src="illustration-hero.svg"
          alt=""
          className="w-full relative z-10 landscape:pr-[10%]"
        />
        <div className="absolute right-0 bottom-0 w-[80%] h-[70%] bg-soft-blue rounded-bl-[8rem] z-0"></div>
      </div>
    </div>
  );
}
