import { cn } from "@/lib/utils";
import { Separator } from "./separator";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "container my-20 flex flex-col items-center justify-center gap-10 md:px-36",
        className,
      )}
    >
      <h2 className="text-center text-4xl font-medium">{title}</h2>
      <Separator className="mb-20" decorative />
      {children}
    </section>
  );
}
