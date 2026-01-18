import Image from "next/image";
import Link from "next/link";
import { AppShell } from "../components/AppShell";
import { newsFeed } from "../lib/mock-data";

const standards = ["All", "NFPA", "IEC", "BS"];
const categories = ["All", "Protection", "Cables", "Power Quality", "Codes", "Case Study"];

export default function HomePage() {
  return (
    <AppShell>
      <section className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-500">Home · News Feed</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Standards & industry intelligence</h1>
            <p className="mt-2 text-sm text-slate-600">
              Curated NFPA/IEC/BS updates with filters, bookmarks, and export-ready summaries.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="button-secondary">Latest</button>
            <button className="button-secondary">Most saved</button>
            <button className="button-primary">Manage sources</button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold text-slate-500">Standard</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {standards.map((standard) => (
                <span key={standard} className="badge">
                  {standard}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">Category</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="badge">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">Region</p>
            <input className="input mt-2" placeholder="Optional region" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">Date range</p>
            <div className="mt-2 flex gap-2">
              <input className="input" placeholder="Start" />
              <input className="input" placeholder="End" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {newsFeed.map((item) => (
          <article key={item.id} className="card flex flex-col gap-4 p-6">
            <div className="flex items-start gap-4">
              <div className="relative h-24 w-32 overflow-hidden rounded-2xl bg-slate-100">
                <Image alt={item.title} fill src={item.image} className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-brand-500">{item.source}</p>
                    <h2 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h2>
                  </div>
                  <button className="button-secondary text-xs">Save</button>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="badge">{item.standard}</span>
              <span className="badge">{item.category}</span>
              <span className="badge">{item.region}</span>
              <span className="badge">{item.publishedAt}</span>
              <span className="badge">Saved {item.savedCount}</span>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <Link className="text-sm font-semibold text-brand-500" href={`/news/${item.id}`}>
                View details →
              </Link>
              <Link className="text-xs text-slate-500" href={item.link}>
                Source link
              </Link>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
