"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { WorkspaceLinks } from "../data/links";
import { usePathname } from "next/navigation";

export const MenuLinks = () => {
  const pathname = usePathname().split("/").pop()?.toLowerCase();

  return (
    <ol className="flex flex-col gap-4">
      {WorkspaceLinks.map((url, idx) => {
        return (
          <li
            key={idx}
            className={cn(
              "hover:cursor-pointer p-2 font-semibold text-sm tracking-wide dark:hover:bg-zinc-600/50 rounded-md",
              {
                ["dark:bg-zinc-600/50"]: url.slug?.toLowerCase() === pathname,
              }
            )}
          >
            <Link href={url.urlPath} className="flex items-start gap-2">
              <span>{url.icon}</span>
              <span>{url.urlName}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
