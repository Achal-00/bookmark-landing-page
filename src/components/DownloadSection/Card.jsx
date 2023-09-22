export default function Card(props) {
  return (
    <div className="w-[80%] mx-auto shadow-md flex flex-col gap-6 items-center py-[5%] rounded-lg landscape:w-full">
      <img src={props.image} alt="" />
      <h1 className="px-[5%] text-2xl text-very-dark-blue font-medium">
        Add to {props.browser}
      </h1>
      <p className="px-[5%] text-greyish-blue text-sm">
        Minimum version {props.version}
      </p>
      <img src="bg-dots.svg" alt="" className="w-full" />
      <button className="px-6 py-3 bg-soft-blue rounded-md text-white border-2 border-soft-blue hover:bg-white hover:text-soft-blue">
        Add & Install Extension
      </button>
    </div>
  );
}
