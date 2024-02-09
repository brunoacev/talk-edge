"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  return theme !== "dark" ? (
    <button className="px-2 py-1 rounded-sm bg-zinc-50 dark:bg-zinc-700">
      <Moon width={17} onClick={() => setTheme("dark")} />
    </button>
  ) : (
    <button className="px-2 py-1 rounded-sm bg-zinc-50 dark:bg-zinc-700">
      <Sun width={17} onClick={() => setTheme("light")} />
    </button>
  );
};
