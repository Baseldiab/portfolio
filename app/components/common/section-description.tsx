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
        "md:text-lg sm:text-base text-sm font-medium font-karla secondary-text",
        className
      )}
    >
      {text}
    </p>
  );
}
