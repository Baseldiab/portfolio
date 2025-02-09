import { cn } from "@/lib/utils";

export default function MainButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      {/* bg-gradient-to-r to-[#00E5DA] from-[#1F7BF6] dark:to-[#00E5DA] dark:from-[#1F7BF6] bg-clip-text text-transparent; */}
      <button
        className={cn(
          "overflow-hidden text-gradient text-white border-none rounded-3xl text-base font-bold cursor-pointer relative z-10 group",
          "bg-sky-600 dark:bg-sky-800",
          "w-32 p-2 h-12",
          "font-bold text-base",
          className
        )}
      >
        {children}
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 dark:bg-sky-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-500 dark:bg-sky-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 dark:bg-sky-900 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
        <span className="group-hover:opacity-100 opacity-0 group-hover:duration-1000 duration-100 z-10  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base">
          {children}
        </span>
      </button>
    </>
  );
}
