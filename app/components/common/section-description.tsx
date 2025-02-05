import { cn } from "@/lib/utils";

interface SectionDescriptionProps {
  text: string;
  className?: string;
}

export default function SectionDescription({
  text,
  className,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "md:text-lg sm:text-base text-base font-medium font-karla text-theme-text-second  dark:text-gray-400",
        className
      )}
    >
      {text}
    </p>
  );
}
