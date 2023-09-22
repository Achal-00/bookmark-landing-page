import Content from "./Content";
import Navbar from "./Navbar";

export default function LandingSection() {
  return (
    <section className="min-h-[100dvh] grid grid-rows-[0.1fr_0.9fr]">
      <Navbar />
      <Content />
    </section>
  );
}
