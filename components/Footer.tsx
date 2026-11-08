import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>Built with Next.js · Deployed on Google Cloud Run</p>
      </div>
    </footer>
  );
}
