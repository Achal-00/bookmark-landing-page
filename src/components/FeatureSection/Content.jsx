import { useContext } from "react";
import Description from "./Description";
import ImageHolder from "./ImageHolder";
import { dataContext } from "./FeatureSection";

export default function Content() {
  const { feature } = useContext(dataContext);

  return (
    <div className="grid gap-16 portrait:grid-rows-2 landscape:grid-cols-2">
      {feature === 1 && (
        <>
          <ImageHolder image="illustration-features-tab-1.svg" />
          <Description
            heading="Bookmark in one click"
            content="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
          />
        </>
      )}
      {feature === 2 && (
        <>
          <ImageHolder image="illustration-features-tab-2.svg" />
          <Description
            heading="Intelligent Search"
            content="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
          />
        </>
      )}
      {feature === 3 && (
        <>
          <ImageHolder image="illustration-features-tab-3.svg" />
          <Description
            heading="Share your bookmarks"
            content="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
          />
        </>
      )}
    </div>
  );
}
