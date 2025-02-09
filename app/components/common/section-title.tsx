import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <>
      <h2
        className={cn(
          "main-text sm:text-4xl text-3xl font-bold text-center flex justify-center gap-1 items-center uppercase",
          className
        )}
      >
        {/* <span className="text-gradient">#</span> */}
        {title}
      </h2>
    </>
  );
}
