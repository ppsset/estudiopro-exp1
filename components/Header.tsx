import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-sm">
            ⚡️
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Electrical Installation Design Hub</p>
            <p className="text-xs text-slate-500">Design standards, tools, and projects.</p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center gap-3">
          <label className="relative w-full max-w-xl">
            <span className="absolute left-4 top-2.5 text-sm text-slate-400">🔍</span>
            <input
              className="input pl-10"
              placeholder="Search news, projects, knowledge..."
              type="search"
            />
          </label>
        </div>
        <div className="flex items-center gap-3">
          <button className="button-secondary text-xs">Quick Tour</button>
          <Link className="button-primary text-xs" href="#auth">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
