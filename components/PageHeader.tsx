export default function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="pb-8 pt-12 sm:pt-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
    </header>
  );
}
