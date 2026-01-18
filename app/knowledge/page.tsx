import Link from "next/link";
import { AppShell } from "../../components/AppShell";
import { knowledgeTopics } from "../../lib/mock-data";

export default function KnowledgePage() {
  return (
    <AppShell>
      <section className="card p-6">
        <p className="text-sm font-semibold text-brand-500">Knowledge</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Electrical installation basics</h1>
        <p className="mt-2 text-sm text-slate-600">
          Structured learning paths with outlines, diagrams, and quick checks.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {knowledgeTopics.map((topic) => (
          <Link key={topic.slug} className="card p-6" href={`/knowledge/${topic.slug}`}>
            <p className="text-xs font-semibold text-brand-500">{topic.category}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{topic.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{topic.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topic.keyTerms.map((term) => (
                <span key={term} className="badge">
                  {term}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}
