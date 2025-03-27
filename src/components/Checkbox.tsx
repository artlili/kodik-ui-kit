import clsx from "clsx";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type CheckboxProps = {
  className?: string;
  label?: string;
  labelPosition?: "left" | "right";
  variant?: "primary" | "alternative";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function Checkbox({
  className,
  label,
  labelPosition = "left",
  variant = "primary",
  checked = false,
  disabled = false,
  onChange,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const getColorClasses = () => {
    if (disabled) {
      if (isChecked) {
        return variant === "primary"
          ? "bg-violet-300 border-violet-300"
          : "bg-orange-300 border-orange-300";
      } else {
        return variant === "primary"
          ? "bg-transparent border-violet-300"
          : "bg-transparent border-orange-300";
      }
    }

    if (isChecked) {
      return variant === "primary"
        ? "bg-violet-500 border-violet-500"
        : "bg-orange-400 border-orange-400";
    }

    return variant === "primary"
      ? "bg-transparent border-violet-500"
      : "bg-transparent border-orange-400";
  };

  return (
    <label
      className={clsx(
        className,
        "inline-flex items-center gap-2",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
      )}
    >
      {labelPosition === "left" && <span>{label}</span>}

      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={toggle}
        className="peer sr-only hidden"
      />

      <div
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded border-2 transition",
          getColorClasses(),
        )}
      >
        {isChecked && <CheckIcon className="h-4 w-4 text-white" />}
      </div>

      {labelPosition === "right" && <span>{label}</span>}
    </label>
  );
}
