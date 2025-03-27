import { useEffect, useState } from "react";
import clsx from "clsx";

type SwitchProps = {
  className?: string;
  label?: string;
  labelPosition?: "left" | "right";
  variant?: "primary" | "alternative";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function Switch({
  className,
  label,
  labelPosition = "left",
  variant = "primary",
  checked = false,
  disabled = false,
  onChange,
}: SwitchProps) {
  const [isOn, setIsOn] = useState(checked);

  useEffect(() => {
    setIsOn(checked);
  }, [checked]);

  const toggle = () => {
    if (disabled) return;
    setIsOn((prev) => !prev);
    onChange?.(!isOn);
  };

  return (
    <label
      className={clsx(
        className,
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-70",
      )}
    >
      {labelPosition === "left" && <span>{label}</span>}

      <input
        type="checkbox"
        checked={isOn}
        disabled={disabled}
        onChange={toggle}
        className="peer sr-only hidden"
      />

      <div
        className={clsx(
          "relative h-[28px] w-[60px] rounded-2xl transition duration-300",
          isOn
            ? variant === "primary"
              ? "bg-violet-500"
              : "bg-orange-400"
            : "bg-slate-200",
        )}
        onClick={toggle}
      >
        <div
          className={clsx(
            "absolute top-[2px] left-[2px] z-10 h-[24px] w-[24px] rounded-full bg-white transition-transform duration-300",
            isOn ? "translate-x-[32px]" : "translate-x-0",
          )}
        />
      </div>

      {labelPosition === "right" && <span>{label}</span>}
    </label>
  );
}
