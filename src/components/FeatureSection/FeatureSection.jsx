import { createContext, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Selector from "./Selector";

export const dataContext = createContext();

export default function FeatureSection() {
  const [feature, setFeature] = useState(1);

  return (
    <section className="pt-12 grid gap-16">
      <dataContext.Provider value={{ feature, setFeature }}>
        <Header />
        <Selector />
        <Content />
      </dataContext.Provider>
    </section>
  );
}
