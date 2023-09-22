import Content from "./Content";
import Header from "./Header";

export default function DownloadSection() {
  return (
    <section className="pt-12 landscape:pt-40 grid gap-16">
      <Header />
      <Content />
    </section>
  );
}
