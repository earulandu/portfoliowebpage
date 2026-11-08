import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contact, profile } from "@/data/content";

export const metadata: Metadata = { title: "Contact" };

const methods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "School Email", value: profile.schoolEmail, href: `mailto:${profile.schoolEmail}` },
  { label: "LinkedIn", value: "linkedin.com/in/elijaharulandu", href: profile.linkedin },
  { label: "GitHub", value: "github.com/earulandu", href: profile.github },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" intro={contact.intro} />
      <dl className="divide-y divide-line border-y border-line">
        {methods.map((m) => (
          <div key={m.label} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr]">
            <dt className="font-semibold">{m.label}</dt>
            <dd className="min-w-0 break-words">
              <a
                href={m.href}
                {...(m.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-accent hover:underline"
              >
                {m.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-muted">Based in {profile.location}.</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
      >
        Send me an email
      </a>
    </>
  );
}
