import { Logo } from "@/components/logo";
import { Settings } from "./settings";

export const Topbar = () => {
  return (
    <nav className="w-full flex sticky items-center justify-between bg-zinc-200/50 dark:bg-zinc-700/50 p-2 rounded-md">
      <Logo />
      <Settings />
    </nav>
  );
};
