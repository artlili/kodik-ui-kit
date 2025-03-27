import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";

interface TabsProps {
  tabs: string[];
  className?: string;
  defaultIndex?: number;
  onClick?: (index: number) => void;
}

export default function Tabs({
  tabs,
  className,
  defaultIndex = 0,
  onClick,
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  return (
    <div
      className={clsx(
        className,
        "scrollbar-hide flex items-center gap-2 overflow-x-auto xl:flex-wrap xl:justify-center xl:gap-4",
      )}
      style={{
        WebkitOverflowScrolling: "touch",
        scrollSnapType: "x mandatory",
      }}
    >
      <div className="relative flex items-center gap-2 xl:flex-wrap xl:gap-4 xl:p-0">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            className="text-xs"
            label={tab}
            onClick={() => {
              setActiveIndex(index);
              onClick?.(index);
            }}
            size="lg"
            variant={activeIndex === index ? "primary" : "secondary"}
          />
        ))}
      </div>
    </div>
  );
}
