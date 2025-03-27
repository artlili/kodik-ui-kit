import clsx from "clsx";

interface ImageProps {
  className?: string;
  image: string;
  title: string;
  overlay?: boolean;
}

export default function AspectRatioImage({
  className,
  image,
  title,
  overlay = false,
}: ImageProps) {
  return (
    <div
      className={clsx(
        className,
        "relative aspect-square w-full overflow-hidden",
        "flex justify-center shadow-sm",
        "transition-transform duration-300 group-hover:scale-105",
      )}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      )}
    </div>
  );
}
