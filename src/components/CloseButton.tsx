import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function CloseButton({
  onClick,
  className,
  ariaLabel = "Close",
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "cursor-pointer rounded-full p-2 text-slate-500 transition duration-300 hover:text-slate-800",
        className,
      )}
    >
      <XMarkIcon className="h-6 w-6" />
    </button>
  );
}
