import { ReactNode, useState } from "react";
import clsx from "clsx";

interface InputWithButtonProps {
  placeholder?: string;
  icon?: ReactNode;
  onSubmit: (value: string) => void;
  className?: string;
}

export default function InputWithButton({
  placeholder = "Enter your text...",
  icon,
  onSubmit,
  className,
}: InputWithButtonProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={clsx("relative flex w-full max-w-sm", className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full min-w-44 rounded-full border border-slate-100 bg-white py-3 pr-16 pl-4 text-sm text-slate-500 shadow-sm outline-none focus:ring focus:ring-slate-300"
      />

      <button
        onClick={() => onSubmit(inputValue)}
        className="absolute top-[2px] right-[2px] flex h-[42px] w-[42px] cursor-pointer items-center justify-center gap-2 rounded-full bg-violet-500 text-white transition hover:bg-violet-600"
      >
        {icon && <span>{icon}</span>}
      </button>
    </div>
  );
}
