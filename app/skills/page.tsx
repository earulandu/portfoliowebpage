import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Tags from "@/components/Tags";
import { skills } from "@/data/content";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        intro="Languages, libraries and tools I've used across research, coursework and building products."
      />
      <div className="divide-y divide-line border-t border-line">
        {skills.map((s) => (
          <section key={s.group} className="grid gap-4 py-8 sm:grid-cols-[12rem_1fr]">
            <h2 className="font-semibold">{s.group}</h2>
            <Tags items={s.items} />
          </section>
        ))}
      </div>
    </>
  );
}
