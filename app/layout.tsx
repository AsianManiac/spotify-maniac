import ThemeProvider from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DropBeat",
  description: "Music streaming platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
