import clsx from "clsx";

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "alternative" | "light";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export default function Button({
  className,
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={clsx(
        className,
        "group/button relative overflow-hidden rounded-full font-semibold text-nowrap shadow-sm transition duration-300 hover:[&>span]:translate-x-full",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-8 py-3 text-base",
        variant === "primary" &&
          (disabled
            ? "cursor-not-allowed bg-violet-300 text-white"
            : "cursor-pointer bg-violet-500 text-white"),
        variant === "secondary" &&
          (disabled
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "cursor-pointer bg-slate-100 text-slate-900"),
        variant === "alternative" &&
          (disabled
            ? "cursor-not-allowed bg-orange-300 text-white"
            : "cursor-pointer bg-orange-400 text-white"),
        variant === "light" &&
          (disabled
            ? "cursor-not-allowed bg-slate-100 text-slate-300"
            : "cursor-pointer bg-white text-slate-900"),
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 -translate-x-full transition-transform duration-300 group-hover/button:translate-x-full",
          variant === "primary" && !disabled && "bg-violet-600/50",
          variant === "secondary" && !disabled && "bg-slate-200/50",
          variant === "alternative" && !disabled && "bg-orange-500/50",
          variant === "light" && !disabled && "bg-slate-100/50",
        )}
      ></span>
      {label}
    </button>
  );
}
