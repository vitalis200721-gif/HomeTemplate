"use client";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Optional theme provider could go here. Default is dark via <html className="dark" />.
  return <>{children}</>;
}
