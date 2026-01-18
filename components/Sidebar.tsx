\"use client\";

import classNames from \"classnames\";
import Link from \"next/link\";
import { useState } from \"react\";

const navItems = [
  { href: "/", label: "Home", icon: "📰" },
  { href: "/design", label: "Design", icon: "🧰" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/knowledge", label: "Knowledge", icon: "📘" }
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={classNames(
        \"hidden h-fit flex-shrink-0 flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-card lg:flex\",
        collapsed ? \"w-20\" : \"w-60\"
      )}
    >
      <div className=\"flex items-center justify-between gap-2\">
        <p className={classNames(\"text-xs font-semibold uppercase text-slate-400\", collapsed && \"hidden\")}>
          Navigation
        </p>
        <button
          className=\"rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-500 hover:border-slate-300\"
          onClick={() => setCollapsed((prev) => !prev)}
          type=\"button\"
        >
          {collapsed ? \">>\" : \"<<\"}
        </button>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <span className="text-lg">{item.icon}</span>
            <span className={classNames(collapsed && \"hidden\")}>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div
        className={classNames(
          \"rounded-2xl border border-brand-100 bg-brand-50 p-4 text-xs text-slate-600\",
          collapsed && \"hidden\"
        )}
      >
        <p className=\"font-semibold text-slate-800\">Reference Notes</p>
        <p className=\"mt-2\">
          Standards guidance is informational only. Always validate against the latest NFPA, IEC, and BS
          publications.
        </p>
      </div>
    </aside>
  );
}
