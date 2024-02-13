"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return theme !== "dark" && hasMounted ? (
    <div
      onClick={() => setTheme("dark")}
      className="px-2 py-1 rounded-sm bg-zinc-200 dark:bg-zinc-700 hover:cursor-pointer"
    >
      <Moon size={17} />
    </div>
  ) : (
    <div
      onClick={() => setTheme("light")}
      className="px-2 py-1 rounded-sm bg-zinc-200 dark:bg-zinc-700 hover:cursor-pointer"
    >
      <Sun size={17} />
    </div>
  );
};
