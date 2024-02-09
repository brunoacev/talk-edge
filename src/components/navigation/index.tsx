import Link from "next/link";
import { getSession } from "@/lib/session";
import { ToggleMenu } from "./toggle-menu";
import { UrlLinks } from "./data/links";
import { ToggleTheme } from "../toggle-theme";
import { LogoutButton } from "../base-ui/logout-button";

type Navigation = {
  orientation: "topbar" | "sidebar";
};

export const Navigation = async ({ orientation }: Navigation) => {
  const session = await getSession();

  return (
    <nav className="flex sticky items-center justify-between bg-zinc-200/50 dark:bg-zinc-700/50 p-2 rounded-md">
      <Link href={"/"} className="flex items-center gap-2">
        <span className="bg-blue-500/80 font-semibold text-zinc-50 px-4 py-2 rounded-md">
          T
        </span>
        <span className="font-semibold tracking-wider">Talk Edge</span>
      </Link>

      <ToggleMenu />

      <ol className="hidden md:flex md:gap-4 md:items-center">
        {UrlLinks.map((url, idx) => {
          if (url.urlName.toLowerCase() === "login" && !!session) {
            return <LogoutButton key={idx} />;
          }

          return (
            <li
              key={idx}
              className="text-md hover:underline hover:cursor-pointer font-semibold dark:font-normal"
            >
              <Link href={url.urlPath}>{url.urlName}</Link>
            </li>
          );
        })}
        <ToggleTheme />
      </ol>
    </nav>
  );
};
