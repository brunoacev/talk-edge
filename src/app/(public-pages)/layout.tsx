import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navigation } from "@/components/navigation";
import { UrlLinks } from "@/components/navigation/data/links";
import { ThemeProvider } from "@/providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk Edge v0",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} scroll-smooth antialiased bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation orientation="topbar" urlLinks={UrlLinks} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
