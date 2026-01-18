import Link from "next/link";
import { AppShell } from "../../../components/AppShell";
import { projects } from "../../../lib/mock-data";

interface PageProps {
  params: { id: string };
}

const tabs = ["Overview", "Modules", "Report Builder", "Files"];

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((item) => item.id === params.id) ?? projects[0];

  return (
    <AppShell>
      <section className="card p-6">
        <Link className="text-sm font-semibold text-brand-500" href="/projects">
          ← Back to projects
        </Link>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold text-brand-500">{project.status}</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">{project.name}</h1>
            <p className="mt-2 text-sm text-slate-600">
              {project.location} · {project.client} · {project.voltageLevels}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="button-secondary">Edit project</button>
            <button className="button-secondary">Export report</button>
            <button className="button-primary">New run</button>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <span key={tab} className="badge">
              {tab}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card space-y-4 p-6">
          <h2 className="section-title">Project overview</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-500">System type</p>
              <p className="text-sm text-slate-700">{project.systemType}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Voltage levels</p>
              <p className="text-sm text-slate-700">{project.voltageLevels}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Design sections</p>
              <p className="text-sm text-slate-700">{project.modules.length} modules saved</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Last updated</p>
              <p className="text-sm text-slate-700">{project.lastUpdated}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Notes</p>
            <p className="mt-2">Add site constraints, client priorities, and coordination notes here.</p>
          </div>
        </div>
        <div className="card space-y-4 p-6">
          <h2 className="section-title">Module status</h2>
          {project.modules.map((module) => (
            <div key={module.name} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">{module.name}</p>
                <span className="badge">{module.status}</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{module.summary}</p>
              <button className="button-secondary mt-3 text-xs">Set as current</button>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
