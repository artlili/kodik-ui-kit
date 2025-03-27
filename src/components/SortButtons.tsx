import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type SortButtonsProps = {
  isActive: boolean;
  isAscending: boolean;
  onToggle?: () => void;
  className?: string;
};

export default function SortButtons({
  isActive,
  isAscending,
  onToggle,
  className,
}: SortButtonsProps) {
  return (
    <div
      className={clsx(
        "relative flex w-10 items-center justify-center",
        className,
      )}
    >
      {isAscending ? (
        <ArrowUpIcon
          className={clsx(
            "absolute h-3.5 w-3.5 cursor-pointer",
            isActive ? "text-orange-500" : "text-slate-500",
          )}
          onClick={onToggle}
        />
      ) : (
        <ArrowDownIcon
          className="absolute h-3.5 w-3.5 cursor-pointer text-orange-500"
          onClick={onToggle}
        />
      )}
    </div>
  );
}
