import { useState } from "react";
import clsx from "clsx";
import {
  XMarkIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

interface AlertProps {
  className?: string;
  message: string;
  variant: "success" | "error" | "warning" | "info";
}

export default function Alert({ className, message, variant }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  const icon = {
    success: <CheckCircleIcon className="mr-2 h-7 w-7 text-lime-400" />,
    error: <XCircleIcon className="mr-2 h-7 w-7 text-red-400" />,
    warning: <ExclamationCircleIcon className="mr-2 h-7 w-7 text-yellow-400" />,
    info: <InformationCircleIcon className="mr-2 h-7 w-7 text-blue-400" />,
  }[variant];

  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        className,
        "relative flex w-full items-center rounded-md border-t-3 bg-slate-50 p-4 text-sm text-slate-400 shadow-sm transition-opacity duration-300 md:justify-center",
        {
          "border-lime-400": variant === "success",
          "border-red-400": variant === "error",
          "border-yellow-400": variant === "warning",
          "border-blue-400": variant === "info",
        },
      )}
    >
      {icon}

      <span className="max-w-[calc(100%-100px)]">{message}</span>
      <button
        onClick={() => setIsVisible(false)}
        className={clsx(
          "absolute right-4 cursor-pointer text-slate-400 hover:text-slate-600",
        )}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
