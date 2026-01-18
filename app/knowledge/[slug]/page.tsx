import Link from "next/link";
import { AppShell } from "../../../components/AppShell";
import { knowledgeTopics } from "../../../lib/mock-data";

interface PageProps {
  params: { slug: string };
}

const outlineSteps = [
  "Concept overview",
  "Standards context (NFPA/IEC/BS)",
  "Design considerations",
  "Field checklist",
  "Quick quiz"
];

export default function KnowledgeDetailPage({ params }: PageProps) {
  const topic = knowledgeTopics.find((item) => item.slug === params.slug) ?? knowledgeTopics[0];

  return (
    <AppShell>
      <section className="card p-6">
        <Link className="text-sm font-semibold text-brand-500" href="/knowledge">
          ← Back to knowledge
        </Link>
        <div className="mt-4">
          <p className="text-xs font-semibold text-brand-500">{topic.category}</p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">{topic.title}</h1>
          <p className="mt-2 text-sm text-slate-600">{topic.summary}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {topic.keyTerms.map((term) => (
            <span key={term} className="badge">
              {term}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card space-y-4 p-6">
          <h2 className="section-title">Outline</h2>
          <ol className="space-y-3 text-sm text-slate-700">
            {outlineSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="badge">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
            Diagram placeholder (single-line diagram, field layout, or concept graphic)
          </div>
        </div>
        <div className="card space-y-4 p-6">
          <h2 className="section-title">Quick quiz</h2>
          <p className="text-sm text-slate-600">Check understanding with a quick prompt.</p>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-800">Question</p>
            <p className="mt-2">
              How does this topic impact conductor selection and protective device coordination?
            </p>
            <button className="button-secondary mt-4 text-xs">Reveal guidance</button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Reference notes</p>
            <p className="mt-2">Admins can update this content to align with NFPA/IEC/BS updates.</p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
