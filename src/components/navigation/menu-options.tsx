import Link from "next/link";
import { ToggleTheme } from "../toggle-theme";
import { UrlLinks } from "./data/links";

export const MenuOptions = () => {
  return (
    <ol className="absolute top-12 right-[-8px] flex flex-col gap-2 items-start bg-zinc-200/50 dark:bg-zinc-700/50 py-4 px-4 rounded-md">
      {UrlLinks.map((url, idx) => (
        <li key={idx} className="text-md hover:underline">
          <Link href={url.urlPath}>{url.urlName}</Link>
        </li>
      ))}

      <ToggleTheme />
    </ol>
  );
};
