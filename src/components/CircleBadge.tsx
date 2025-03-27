import clsx from "clsx";

type CircleBadgeProps = {
  className?: string;
  value: string;
  variant?: "success" | "error" | "warning" | "info";
};

export default function CircleBadge({
  className,
  value,
  variant,
}: CircleBadgeProps) {
  const bgColor = {
    success: "bg-lime-400 text-white",
    error: "bg-red-400 text-white",
    warning: "bg-yellow-400 text-white",
    info: "bg-blue-400 text-white",
  };

  const color = variant ? bgColor[variant] : "bg-slate-100 text-slate-500";

  return (
    <div className={clsx(className, "flex flex-col gap-2")}>
      <span
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-full text-xs font-bold uppercase",
          color,
        )}
      >
        {value}
      </span>
    </div>
  );
}
