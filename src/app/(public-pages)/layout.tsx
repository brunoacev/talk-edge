import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/providers/theme";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { Footer } from "@/components/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk Edge v0",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (!session) {
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
          <Footer />
        </body>
      </html>
    );
  }

  if (!!session) redirect("/workspace");

  return null;
}
