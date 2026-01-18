import Link from "next/link";
import { AppShell } from "../../components/AppShell";
import { designModules } from "../../lib/mock-data";

export default function DesignPage() {
  return (
    <AppShell>
      <section className="card p-6">
        <p className="text-sm font-semibold text-brand-500">Design · Tools</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Calculation modules</h1>
        <p className="mt-2 text-sm text-slate-600">
          Standardized workflows with structured inputs, outputs, and project snapshots.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {designModules.map((module) => (
          <Link key={module} className="card p-6" href={`/design/${encodeURIComponent(module)}`}>
            <h2 className="text-lg font-semibold text-slate-900">{module}</h2>
            <p className="mt-2 text-sm text-slate-600">
              Step-by-step input panels, compliance notes, and export-ready results.
            </p>
            <div className="mt-4 inline-flex items-center text-sm font-semibold text-brand-500">
              Open module →
            </div>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}
