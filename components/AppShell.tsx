import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="flex-1 space-y-6">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
