import Link from "next/link";
import { AppShell } from "../../components/AppShell";
import { projects } from "../../lib/mock-data";

export default function ProjectsPage() {
  return (
    <AppShell>
      <section className="card p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-500">Projects</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Design project workspace</h1>
            <p className="mt-2 text-sm text-slate-600">
              Track project metadata, module runs, and report exports.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="button-secondary">Grid</button>
            <button className="button-secondary">List</button>
            <button className="button-primary">New project</button>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <input className="input md:max-w-xs" placeholder="Search projects" />
          <input className="input md:max-w-xs" placeholder="Tags" />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.id} className="card p-6" href={`/projects/${project.id}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-brand-500">{project.status}</p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">{project.name}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  {project.location} · {project.client}
                </p>
              </div>
              <span className="badge">{project.systemType}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {project.modules.map((module) => (
                <div key={module.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">{module.name}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{module.status}</p>
                  <p className="mt-1 text-xs text-slate-500">{module.summary}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">Last updated {project.lastUpdated}</p>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}
