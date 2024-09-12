import { useState } from "react";

export default function ExpandText() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={`grid ${isExpanded ? "h-auto" : "h-[93px]"} gap-6 font-roboto-condensed text-sm font-normal leading-[21px]`}
      >
        <p className={isExpanded ? "" : "line-clamp-3"}>
          Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
          egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
          venenatis eros ipsum ac arcu. Vestibulum et lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <button
          className={`flex h-[27px] ${!isExpanded ? "w-[62px]" : "w-[50px]"} border-b-[1px] border-b-white font-roboto-condensed text-sm`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Zwiń" : "Rozwiń"}
          <img
            className={`ml-2 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            src="./icons/arrow_down.png"
            alt="arrow"
          />
        </button>
      </div>
    </>
  );
}
