import clsx from "clsx";
import { useEffect, useState } from "react";

type RadioButtonProps = {
  className?: string;
  label?: string;
  labelPosition?: "left" | "right";
  variant?: "primary" | "alternative";
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export default function RadioButton({
  className,
  label,
  labelPosition = "left",
  variant = "primary",
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    if (!disabled) {
      onChange?.(value);
    }
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
      ? "bg-white border-violet-500"
      : "bg-white border-orange-400";
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
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="peer sr-only hidden"
      />

      <div
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded-full border-2 transition",
          getColorClasses(),
        )}
      >
        {isChecked && <div className="h-3 w-3 rounded-full bg-white" />}
      </div>

      {labelPosition === "right" && <span>{label}</span>}
    </label>
  );
}
