"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { WorkspaceLinks } from "../data/links";
import { usePathname } from "next/navigation";

export const MenuLinks = () => {
  const pathname = usePathname().split("/").pop()?.toLowerCase();

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <ul className="flex flex-col gap-2">
        <span>Workspace</span>
        {WorkspaceLinks.map((url, idx) => {
          if (url.group === "System") {
            return (
              <li key={idx}>
                <Link
                  href={url.urlPath}
                  className={cn(
                    "flex items-start gap-2 hover:cursor-pointer list-none p-2 font-semibold text-sm tracking-wide dark:hover:bg-zinc-600/50 rounded-md",
                    {
                      ["dark:bg-zinc-600/50"]:
                        url.slug?.toLowerCase() === pathname,
                    }
                  )}
                >
                  <span>{url.icon}</span>
                  <span>{url.urlName}</span>
                </Link>
              </li>
            );
          }
        })}
      </ul>

      <ul className="flex flex-col gap-2">
        <span>Para você</span>
        {WorkspaceLinks.map((url, idx) => {
          if (url.group === "forYou") {
            return (
              <li key={idx}>
                <Link
                  href={url.urlPath}
                  className={cn(
                    "flex items-start gap-2 hover:cursor-pointer list-none p-2 font-semibold text-sm tracking-wide dark:hover:bg-zinc-600/50 rounded-md",
                    {
                      ["dark:bg-zinc-600/50"]:
                        url.slug?.toLowerCase() === pathname,
                    }
                  )}
                >
                  <span>{url.icon}</span>
                  <span>{url.urlName}</span>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
