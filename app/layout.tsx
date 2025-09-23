// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Labs",
  description: "CS5610 Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
