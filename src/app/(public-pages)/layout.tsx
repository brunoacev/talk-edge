import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/providers/theme";

const nunito = Nunito({ subsets: ["latin"] });

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
        className={`${nunito.className} scroll-smooth antialiased w-full h-screen p-2 flex flex-col bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation orientation="topbar" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
