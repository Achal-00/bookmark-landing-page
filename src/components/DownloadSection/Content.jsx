import Card from "./Card";

export default function Content() {
  return (
    <div className="flex flex-col gap-8 landscape:flex-row landscape:w-[70%] landscape:mx-auto landscape:justify-center">
      <div className="landscape:mt-0">
        <Card image="logo-chrome.svg" browser="Chrome" version="62" />
      </div>
      <div className="landscape:mt-10">
        <Card image="logo-firefox.svg" browser="Firefox" version="55" />
      </div>
      <div className="landscape:mt-20">
        <Card image="logo-opera.svg" browser="Opera" version="46" />
      </div>
    </div>
  );
}
