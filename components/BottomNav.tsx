import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", icon: "📰" },
  { href: "/design", label: "Design", icon: "🧰" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/knowledge", label: "Knowledge", icon: "📘" }
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 flex w-[92%] -translate-x-1/2 items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card lg:hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-1 text-xs font-medium text-slate-600"
        >
          <span className="text-lg">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
