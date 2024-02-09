import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/providers/theme";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk Edge v0",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) redirect("/login-account");

  if (!!session) {
    return (
      <html lang="en">
        <body
          className={`${nunito.className} scroll-smooth antialiased w-full h-screen p-2 flex flex-col gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-50`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation orientation="topbar" />
            <div className="flex w-full h-full gap-2">
              <Navigation orientation="sidebar" />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return null;
}
