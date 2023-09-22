import Description from "./Description";
import ImageHolder from "./ImageHolder";

export default function Content() {
  return (
    <div className="grid portrait:grid-rows-2 landscape:grid-cols-2">
      <ImageHolder />
      <Description />
    </div>
  );
}
