import Link from "next/link";
import Entry from "@/components/Entry";
import Section from "@/components/Section";
import { about, education, experience, profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <header className="pb-12 pt-16 sm:pt-24">
        <p className="text-sm text-muted">{profile.location}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-lg">{profile.headline}</p>
        <p className="mt-4 max-w-2xl text-muted">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-foreground"
          >
            Contact Me
          </Link>
        </div>
      </header>

      <Section title="About Me">
        <div className="space-y-4 leading-relaxed">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-6">
          {education.map((e) => (
            <Entry key={e.school} title={e.school} subtitle={`${e.degree} · ${e.place}`} date={e.date}>
              {e.details.length > 0 && (
                <ul className="space-y-1 text-sm text-muted">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </Entry>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <div className="space-y-8">
          {experience.map((x) => (
            <Entry key={x.org} title={x.org} subtitle={`${x.role} · ${x.place}`} date={x.date}>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {x.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Entry>
          ))}
        </div>
      </Section>
    </>
  );
}
