export default function Description(props) {
  return (
    <div className="portrait:px-[5%] text-center self-center grid gap-4 landscape:gap-8 landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 landscape:text-left landscape:pl-[10%]">
      <h1 className="text-2xl font-medium text-very-dark-blue landscape:text-3xl">
        {props.heading}
      </h1>
      <p className="text-greyish-blue landscape:pr-[35%]">{props.content}</p>
      <div className="portrait:hidden flex">
        <button className="bg-soft-blue px-5 py-3 rounded-md text-white text-sm">
          More Info
        </button>
      </div>
    </div>
  );
}
