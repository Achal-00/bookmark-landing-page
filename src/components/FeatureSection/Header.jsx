export default function Header() {
  return (
    <div className="text-center grid gap-4 portrait:px-[5%] landscape:px-[33%]">
      <h1 className="text-2xl text-very-dark-blue font-medium landscape:text-4xl">
        Features
      </h1>
      <p className="text-greyish-blue">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>
  );
}
