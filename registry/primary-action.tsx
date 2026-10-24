import type { ReactNode } from "react";

type PrimaryActionProps = {
  href: string;
  children: ReactNode;
  note?: string;
};

export function PrimaryAction({ href, children, note }: PrimaryActionProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href={href}
        className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {children}
      </a>
      {note ? <p className="text-sm text-muted-foreground">{note}</p> : null}
    </div>
  );
}
