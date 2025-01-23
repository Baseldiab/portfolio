import { cn } from "@/lib/utils";

interface SectionTextProps {
  text: string;
  className?: string;
}

export default function SectionText({ text, className }: SectionTextProps) {
  return (
    <>
      <h6
        className={cn(
          "sm:text-base md:text-base text-sm font-normal font-karla text-theme-text-second ",
          className
        )}
      >
        {text}
      </h6>
    </>
  );
}
