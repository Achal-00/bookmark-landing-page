import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Footer() {
  return (
    <section className="bg-very-dark-blue portrait:py-[10%] flex flex-col gap-12 items-center landscape:py-[3%] landscape:flex-row landscape:justify-between landscape:px-[10%]">
      <LeftSide />
      <RightSide />
    </section>
  );
}
