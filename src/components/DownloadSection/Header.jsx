export default function Header() {
  return (
    <div className="text-center grid gap-4 portrait:px-[5%] landscape:px-[33%]">
      <h1 className="text-2xl text-very-dark-blue font-medium landscape:text-4xl">
        Download the extension
      </h1>
      <p className="text-greyish-blue">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
    </div>
  );
}
