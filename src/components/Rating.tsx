import clsx from "clsx";
import { StarIcon } from "@heroicons/react/24/solid";

interface RatingProps {
  className?: string;
  rating: number;
}

export default function Rating({ className, rating }: RatingProps) {
  return (
    <div
      className={clsx(className, "flex items-center justify-center gap-0.5")}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-orange-400" : "text-slate-200"
          }`}
        >
          <StarIcon className="h-4 w-4" />
        </span>
      ))}
    </div>
  );
}
