import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Hero</p>
      {children}
    </div>
  );
}
