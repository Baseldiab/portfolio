import { cn } from "@/lib/utils";

interface SecondaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryButton({
  children,
  className,
}: SecondaryButtonProps) {
  return (
    <>
      <button
        className={cn(
          "bg-theme-text-second text-white px-4 py-2 rounded-lg",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
