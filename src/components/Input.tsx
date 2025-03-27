import { useEffect, useState } from "react";
import clsx from "clsx";

interface InputProps {
  className?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function Input({
  className,
  type = "text",
  placeholder,
  value = "",
  onChange,
  disabled = false,
}: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <input
      type={type}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      className={clsx(
        className,
        "min-w-44 rounded-full border border-slate-100 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm outline-none focus:ring focus:ring-slate-300",
        disabled && "cursor-not-allowed opacity-50",
      )}
    />
  );
}
