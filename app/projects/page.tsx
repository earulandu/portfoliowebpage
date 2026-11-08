import type { Metadata } from "next";
import Entry from "@/components/Entry";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Tags from "@/components/Tags";
import { awards, projects, research } from "@/data/content";

export const metadata: Metadata = { title: "Projects & Awards" };

function Points({ points }: { points: { label: string; text: string }[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
      {points.map((p) => (
        <li key={p.label}>
          <span className="font-medium">{p.label}:</span> {p.text}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects & Awards"
        intro="Undergraduate research in climate modeling, number theory, probability and machine learning, plus the products I've built and the recognition I've earned."
      />

      <Section title="Research">
        <div className="space-y-10">
          {research.map((r) => (
            <Entry key={r.title} title={r.title} subtitle={`Advisor: ${r.advisor}`} date={r.date}>
              <Points points={r.points} />
              <div className="mt-4 text-xs">
                <Tags items={r.tech} />
              </div>
            </Entry>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-10">
          {projects.map((p) => (
            <Entry key={p.title} title={p.title} date={p.date}>
              <Points points={p.points} />
              <div className="mt-4">
                <Tags items={p.tech} />
              </div>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-accent hover:underline"
                >
                  {p.link.label} ↗
                </a>
              )}
            </Entry>
          ))}
        </div>
      </Section>

      <Section title="Awards & Recognition">
        <ul className="space-y-6">
          {awards.map((a) => (
            <li key={a.title}>
              <Entry title={a.title} subtitle={a.detail} date={a.date} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
