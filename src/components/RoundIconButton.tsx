import { ReactNode } from "react";
import clsx from "clsx";

type RoundIconButtonProps = {
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function RoundIconButton({
  icon,
  className,
  onClick,
}: RoundIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-sm transition duration-300 outline-none",
        "border border-slate-100 bg-white text-slate-800 hover:border-slate-800 hover:bg-slate-800 hover:text-white",
      )}
    >
      {icon}
    </button>
  );
}
