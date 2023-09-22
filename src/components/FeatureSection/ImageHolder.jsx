export default function ImageHolder(props) {
  return (
    <div className="grid h-[120%]">
      <div className="relative grid content-start justify-items-center landscape:justify-items-end">
        <img src={props.image} alt="" className="w-[80%] relative z-10" />
        <div className="absolute left-0 bottom-0 w-[80%] h-[70%] bg-soft-blue rounded-br-[8rem] z-0"></div>
      </div>
    </div>
  );
}
