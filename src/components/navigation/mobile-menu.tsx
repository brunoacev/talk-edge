import Link from "next/link";

import { ToggleTheme } from "../toggle-theme";
import { UrlLinks } from "./data/links";

export const MobileMenu = () => {
  return (
    <ol className="absolute top-12 right-[-8px] p-4 flex flex-col gap-4 items-end bg-zinc-200/50 dark:bg-zinc-700/50 rounded-md">
      {UrlLinks.map((url, idx) => (
        <li key={idx} className="text-md hover:underline">
          <Link href={url.urlPath}>{url.urlName}</Link>
        </li>
      ))}

      <ToggleTheme />
    </ol>
  );
};
