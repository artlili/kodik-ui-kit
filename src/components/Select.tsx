"use client";

import { useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

interface SelectProps {
  className?: string;
  options: string[];
  value: string;
  action: (value: string) => void;
}

export default function Select({
  className,
  options,
  value,
  action,
}: SelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const toggleSelect = () => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.click();
    }
  };

  return (
    <div
      className={clsx(className, "relative min-w-36 cursor-pointer")}
      onMouseDown={(e) => {
        const target = e.target as HTMLElement;
        if (target.tagName !== "SELECT") {
          e.preventDefault();
          toggleSelect();
        }
      }}
    >
      <select
        ref={selectRef}
        className="w-full cursor-pointer appearance-none rounded-full bg-white px-4 py-3 text-sm text-slate-500 shadow-sm outline-none"
        value={value}
        onChange={(e) => action(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
    </div>
  );
}
