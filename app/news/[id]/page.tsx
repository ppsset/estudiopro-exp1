import Link from "next/link";
import { AppShell } from "../../../components/AppShell";
import { newsFeed } from "../../../lib/mock-data";

interface PageProps {
  params: { id: string };
}

export default function NewsDetailPage({ params }: PageProps) {
  const article = newsFeed.find((item) => item.id === params.id) ?? newsFeed[0];

  return (
    <AppShell>
      <section className="card p-6">
        <Link className="text-sm font-semibold text-brand-500" href="/">
          ← Back to news feed
        </Link>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold text-brand-500">{article.source}</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">{article.title}</h1>
            <p className="mt-2 text-sm text-slate-600">Published {article.publishedAt}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="badge">{article.standard}</span>
            <span className="badge">{article.category}</span>
            <span className="badge">{article.region}</span>
          </div>
          <p className="text-sm text-slate-700">{article.summary}</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Reference notes</p>
            <p className="mt-2">
              This summary is for informational purposes and should be validated with the latest
              {" "}
              {article.standard} publications.
            </p>
          </div>
          <Link className="button-primary w-fit" href={article.link}>
            Open source link
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
