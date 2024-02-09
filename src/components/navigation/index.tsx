import { cn } from "@/lib/utils";
import Link from "next/link";
import { ToggleTheme } from "../toggle-theme";

interface Navigation {
  urlLinks: string[];
  orientation: "topbar" | "sidebar";
}

export const Navigation = ({ urlLinks, orientation }: Navigation) => {
  return (
    <nav
      className={cn("w-full h-fit bg-zinc-50 dark:bg-zinc-900/50", {
        ["flex items-center  justify-between px-4 py-3"]:
          orientation === "topbar",
        [""]: orientation === "sidebar",
      })}
    >
      <div>
        <Link
          href={"/"}
          className={cn("", {
            ["flex items-center gap-2"]: orientation === "topbar",
            [""]: orientation === "sidebar",
          })}
        >
          <span className="bg-blue-500/80 font-semibold text-zinc-50 px-4 py-2 rounded-md">
            T
          </span>
          <span className="font-semibold tracking-wider">Talk Edge</span>
        </Link>
      </div>

      <ol
        className={cn("", {
          ["flex items-center gap-3"]: orientation === "topbar",
          [""]: orientation === "sidebar",
        })}
      >
        {urlLinks.map((url, idx) => (
          <li key={idx}>
            <Link
              href={`/${url.toLowerCase()}`}
              className="font-medium tracking-wider text-sm capitalize hover:underline"
            >
              {url}
            </Link>
          </li>
        ))}
        {/* {orientation === "topbar" && <ToggleTheme />} */}
      </ol>
    </nav>
  );
};
