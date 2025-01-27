import React from "react";
import { DashboardNav } from "./_components/dashboard-nav";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="container flex min-h-[calc(100vh-180px)] flex-col gap-6 px-2 pt-6 md:flex-row md:px-4 lg:gap-10">
      <DashboardNav className="flex flex-shrink-0 gap-2 md:w-48 md:flex-col lg:w-80" />
      <main className="w-full">{children}</main>
    </div>
  );
}
