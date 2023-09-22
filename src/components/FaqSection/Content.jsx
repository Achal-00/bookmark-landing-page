import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 12"
      className={`${
        id === open ? "rotate-180 stroke-soft-red" : "stroke-[#5267DF]"
      } h-5 w-5 transition-transform`}
    >
      <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
    </svg>
  );
}

export default function Content() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="portrait:px-[5%] landscape:w-[40%] landscape:mx-auto">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-base text-very-dark-blue landscape:lg:hover:text-soft-red font-medium"
        >
          What is Bookmark?
        </AccordionHeader>
        <AccordionBody className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-base text-very-dark-blue landscape:lg:hover:text-soft-red font-medium"
        >
          How can I request a new browser?
        </AccordionHeader>
        <AccordionBody className="text-base">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-base text-very-dark-blue landscape:lg:hover:text-soft-red font-medium"
        >
          Is there a mobile app?
        </AccordionHeader>
        <AccordionBody className="text-base">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-base text-very-dark-blue landscape:lg:hover:text-soft-red font-medium"
        >
          What about other Chromium browsers?
        </AccordionHeader>
        <AccordionBody className="text-base">
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
