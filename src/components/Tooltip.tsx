import { ReactNode, useState } from "react";
import clsx from "clsx";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
  text,
  children,
  position = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex max-w-max flex-col items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={clsx(
          "absolute z-10 min-w-max transition-all duration-300 ease-out",
          {
            "bottom-full left-1/2 mb-2 -translate-x-1/2": position === "top",
            "top-full left-1/2 mt-2 -translate-x-1/2": position === "bottom",
            "top-1/2 right-full mr-2 -translate-y-1/2": position === "left",
            "top-1/2 left-full ml-2 -translate-y-1/2": position === "right",
          },
        )}
      >
        <div
          className={clsx(
            "rounded-2xl bg-slate-800 px-3 py-1 text-center text-xs text-white",
            "transition-all duration-300 ease-out",
            {
              "translate-x-0 translate-y-0 scale-100 opacity-100": isVisible,
              "scale-75 opacity-0":
                !isVisible && (position === "top" || position === "bottom"),
              "-translate-x-2 opacity-0": !isVisible && position === "left",
              "translate-x-2 opacity-0": !isVisible && position === "right",
            },
          )}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
