import type { ReactNode } from "react";

// One resume-style item: bold title on the left, date on the right, details below.
export default function Entry({
  title,
  subtitle,
  date,
  children,
}: {
  title: ReactNode;
  subtitle?: string;
  date?: string;
  children?: ReactNode;
}) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-semibold">{title}</h3>
        {date && <p className="shrink-0 text-sm text-muted">{date}</p>}
      </div>
      {subtitle && <p className="mt-1 text-sm italic text-muted">{subtitle}</p>}
      {children && <div className="mt-3">{children}</div>}
    </article>
  );
}
