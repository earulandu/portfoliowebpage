export default function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-foreground">
          {item}
        </li>
      ))}
    </ul>
  );
}
