import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appscrip Assignment by Suraj",
  description: "Nextjs app built for recruitment at AppScrip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
