import { useContext, useEffect } from "react";
import { dataContext } from "./FeatureSection";

export default function Selector() {
  const { feature, setFeature } = useContext(dataContext);

  useEffect(() => {
    switch (feature) {
      case 1:
        document
          .querySelectorAll(".feature-1")
          .forEach((x) => x.classList.remove("after:hidden"));
        document
          .querySelectorAll(".feature-1")
          .forEach((x) =>
            x.classList.replace("text-greyish-blue", "text-very-dark-blue")
          );
        document
          .querySelectorAll(".feature-2, .feature-3")
          .forEach((x) => x.classList.add("after:hidden"));
        document
          .querySelectorAll(".feature-2, .feature-3")
          .forEach((x) =>
            x.classList.replace("text-very-dark-blue", "text-greyish-blue")
          );
        break;
      case 2:
        document
          .querySelectorAll(".feature-2")
          .forEach((x) => x.classList.remove("after:hidden"));
        document
          .querySelectorAll(".feature-2")
          .forEach((x) =>
            x.classList.replace("text-greyish-blue", "text-very-dark-blue")
          );
        document
          .querySelectorAll(".feature-3, .feature-1")
          .forEach((x) => x.classList.add("after:hidden"));
        document
          .querySelectorAll(".feature-3, .feature-1")
          .forEach((x) =>
            x.classList.replace("text-very-dark-blue", "text-greyish-blue")
          );
        break;
      case 3:
        document
          .querySelectorAll(".feature-1, .feature-2")
          .forEach((x) => x.classList.add("after:hidden"));
        document
          .querySelectorAll(".feature-1, .feature-2")
          .forEach((x) =>
            x.classList.replace("text-very-dark-blue", "text-greyish-blue")
          );
        document
          .querySelectorAll(".feature-3")
          .forEach((x) => x.classList.remove("after:hidden"));
        document
          .querySelectorAll(".feature-3")
          .forEach((x) =>
            x.classList.replace("text-greyish-blue", "text-very-dark-blue")
          );
      default:
        break;
    }
  }, [feature]);

  return (
    <div className="portrait:px-[5%] landscape:px-[20%]">
      <div className="text-center flex flex-col border-y-[0.01rem] border-greyish-blue landscape:hidden">
        <table>
          <tr>
            <td
              onClick={() => setFeature(1)}
              className="py-4 text-very-dark-blue relative after:absolute after:h-1 after:w-1/2 after:bg-red-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 feature-1"
            >
              Simple Bookmarking
            </td>
          </tr>
          <tr className="border-y border-greyish-blue">
            <td
              onClick={() => setFeature(2)}
              className="py-4 text-greyish-blue relative after:absolute after:h-1 after:w-1/2 after:bg-red-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:hidden feature-2"
            >
              Speedy Serching
            </td>
          </tr>
          <tr>
            <td
              onClick={() => setFeature(3)}
              className="py-4 text-greyish-blue relative after:absolute after:h-1 after:w-1/2 after:bg-red-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:hidden feature-3"
            >
              Easy Sharing
            </td>
          </tr>
        </table>
      </div>
      <div className="portrait:hidden">
        <div className="grid grid-cols-3 text-center border-b-[0.01rem]">
          <p
            onClick={() => setFeature(1)}
            className="py-4 text-very-dark-blue relative after:absolute after:h-1 after:w-full after:bg-red-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 feature-1 hover:cursor-pointer hover:text-soft-red"
          >
            Simple Bookmarking
          </p>
          <p
            onClick={() => setFeature(2)}
            className="py-4 text-greyish-blue relative after:absolute after:h-1 after:w-full after:bg-red-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:hidden feature-2 hover:cursor-pointer hover:text-soft-red"
          >
            Speedy Searching
          </p>
          <p
            onClick={() => setFeature(3)}
            className="py-4 text-greyish-blue relative after:absolute after:h-1 after:w-full after:bg-red-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:hidden feature-3 hover:cursor-pointer hover:text-soft-red"
          >
            Easy Sharing
          </p>
        </div>
      </div>
    </div>
  );
}
