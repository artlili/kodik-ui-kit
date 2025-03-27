import clsx from "clsx";
import { ReactNode } from "react";

type BadgeProps = {
  className?: string;
  text: string;
  variant?: "success" | "error" | "warning" | "info";
  rounded?: boolean;
  icon?: ReactNode;
};

export default function Badge({
  className,
  text,
  variant,
  rounded = false,
  icon,
}: BadgeProps) {
  const bgColor = {
    success: "bg-lime-400 text-white",
    error: "bg-red-400 text-white",
    warning: "bg-yellow-400 text-white",
    info: "bg-blue-400 text-white",
  } as const;

  const color = variant ? bgColor[variant] : "bg-slate-100 text-slate-500";

  return (
    <span
      className={clsx(
        className,
        color,
        rounded ? "rounded-2xl" : "rounded-r-2xl",
        "inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase",
      )}
    >
      {icon && <span className="h-4 w-4">{icon}</span>}
      {text}
    </span>
  );
}
