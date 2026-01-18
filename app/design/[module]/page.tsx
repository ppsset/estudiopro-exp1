import Link from "next/link";
import { AppShell } from "../../../components/AppShell";

interface PageProps {
  params: { module: string };
}

const inputs = [
  {
    title: "System inputs",
    fields: ["Voltage level", "System type", "Demand factor"]
  },
  {
    title: "Load inputs",
    fields: ["Connected load", "Diversity factor", "Operating hours"]
  },
  {
    title: "Design notes",
    fields: ["Standard reference", "Assumptions", "Revision"]
  }
];

export default function ModulePage({ params }: PageProps) {
  const moduleName = decodeURIComponent(params.module);

  return (
    <AppShell>
      <section className="card p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <Link className="text-sm font-semibold text-brand-500" href="/design">
              ← Back to modules
            </Link>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">{moduleName}</h1>
            <p className="mt-2 text-sm text-slate-600">
              Metric units by default. Use structured inputs and save snapshots into projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="button-primary">Calculate</button>
            <button className="button-secondary">Save to Project</button>
            <button className="button-secondary">Export PDF</button>
            <button className="button-secondary">Reset</button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card space-y-6 p-6">
          {inputs.map((group) => (
            <div key={group.title} className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="section-title">{group.title}</h2>
                <span className="badge">Inline help</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.fields.map((field) => (
                  <label key={field} className="space-y-2 text-sm font-medium text-slate-700">
                    <span>{field}</span>
                    <input className="input" placeholder={field} />
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Reference notes</p>
            <p className="mt-2">
              Provide NFPA/IEC/BS references here. Informational only and editable by admins.
            </p>
          </div>
        </div>
        <div className="card space-y-4 p-6">
          <div>
            <h2 className="section-title">Results</h2>
            <p className="text-sm text-slate-600">Key outputs, warnings, and assumptions.</p>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-slate-500">Latest run</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">--</p>
              <p className="mt-1 text-sm text-slate-500">Awaiting calculation.</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
              Warning: Validate assumptions against project constraints and latest standards.
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">Saved to project</p>
              <p className="mt-2">Choose a project to store input/output snapshots with timestamps.</p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
