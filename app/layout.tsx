import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Линкбичлэг",
  description: "Нууц",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
