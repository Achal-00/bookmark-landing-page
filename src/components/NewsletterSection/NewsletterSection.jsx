import { useState } from "react";

export default function NewsletterSection() {
  const [mail, setMail] = useState("");

  function submitHandler() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document.querySelector(".error-image").classList.add("hidden");
      document.querySelector(".error-text").classList.remove("hidden");
      document.querySelector(".error-text").textContent =
        "Thanks for signing up!!";
      document.querySelector(".mail-inp").classList.remove("border-soft-red");
      document.querySelector(".error-cont").classList.remove("bg-soft-red");
    } else {
      document
        .querySelectorAll(".error-image, .error-text")
        .forEach((x) => x.classList.remove("hidden"));
      document.querySelector(".error-text").textContent =
        "Whoops, make sure it's an email";
      document.querySelector(".error-cont").classList.add("bg-soft-red");
      document.querySelector(".mail-inp").classList.add("border-soft-red");
    }
  }

  return (
    <section className="mt-20 grid gap-4 text-center bg-soft-blue portrait:px-[5%] portrait:pt-[20%] portrait:pb-[10%] landscape:py-[5%]">
      <p className="text-white text-sm tracking-[0.3em]">
        35,000+ ALREADY JOINED
      </p>
      <h1 className="text-white font-medium text-2xl landscape:text-4xl">
        Stay up-to-date with what
        <br /> we're doing
      </h1>
      <div className="grid gap-4 pt-4 landscape:w-[35%] landscape:grid-cols-[0.7fr_0.3fr] landscape:mx-auto">
        <div className="rounded-md error-cont">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full border-2 outline-none h-12 rounded-md pl-4 mail-inp"
              onChange={(e) => setMail(e.currentTarget.value)}
            />
            <img
              src="icon-error.svg"
              alt=""
              className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 hidden error-image"
            />
          </div>
          <p className="text-white rounded-b-md text-left px-2 py-1 text-xs italic hidden error-text">
            Whoops, make sure it's an email
          </p>
        </div>
        <button
          onClick={submitHandler}
          className="bg-soft-red rounded-md text-white font-medium h-12 border-2 border-soft-red hover:bg-white hover:text-soft-red"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
