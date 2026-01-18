import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electrical Installation Design Hub",
  description: "All-in-one workspace for electrical installation design professionals."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
