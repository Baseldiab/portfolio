// ui imports
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  className?: string;
  childClassName?: string;
  animatedClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function MarqueeText({
  className,
  childClassName,
  animatedClassName,
  children,
  as: Component = Button,
}: MarqueeTextProps) {
  return (
    <div>
      <Component
        className={cn(
          "relative appearance-none bg-black text-white cursor-pointer font-sans text-base font-black leading-normal uppercase rounded-full border-2 border-solid overflow-hidden py-3 px-12 !min-w-fit",
          "focus:outline-none disabled:cursor-default",
          "group hover:!bg-transparent",
          className
        )}
      >
        <span
          className={cn(
            "absolute inset-0 grid place-items-center transition-opacity duration-200 group-hover:opacity-0 ",
            childClassName
          )}
        >
          {children}
        </span>
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-200",
            "group-hover:opacity-100 group-hover:animate-marquee group-hover:!bg-transparent",
            "before:content-[attr(data-text)] before:absolute before:translate-x-[5em]",
            "after:content-[attr(data-text)] after:absolute after:translate-x-[-5em]",
            animatedClassName
          )}
          data-text={typeof children === "string" ? children : undefined}
        >
          {children}
        </span>
      </Component>
    </div>
  );
}
