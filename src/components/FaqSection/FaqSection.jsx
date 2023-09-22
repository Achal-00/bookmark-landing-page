import Content from "./Content";
import Header from "./Header";

export default function FaqSection() {
  return (
    <section className="pt-16 grid gap-16">
      <Header />
      <Content />
      <div className="flex justify-center">
        <button className="bg-soft-blue px-5 py-3 rounded-md text-white text-sm">
          More Info
        </button>
      </div>
    </section>
  );
}
