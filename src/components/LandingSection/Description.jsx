export default function Description() {
  return (
    <div className="portrait:px-[5%] text-center self-center grid gap-4 landscape:gap-8 landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 landscape:text-left landscape:pl-[20%]">
      <h1 className="text-3xl font-medium text-very-dark-blue landscape:lg:text-5xl">
        A Simple Bookmark
        <br /> Manager
      </h1>
      <p className="text-greyish-blue landscape:pr-[20%]">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="flex portrait:justify-center gap-4">
        <button className="bg-soft-blue px-4 py-3 rounded-md text-white font-medium shadow-lg border-2 border-soft-blue hover:bg-white hover:text-soft-blue">
          Get it on Chrome
        </button>
        <button className="bg-gray-50 shadow-lg px-4 py-3 text-greyish-blue font-medium rounded-md border-2 border-transparent hover:border-very-dark-blue hover:text-very-dark-blue">
          Get it on Firefox
        </button>
      </div>
    </div>
  );
}
