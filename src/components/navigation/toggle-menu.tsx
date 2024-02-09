"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { MenuOptions } from "./menu-options";

export const ToggleMenu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return !isOpen ? (
    <div
      onClick={handleMenu}
      className="flex flex-col items-end hover:cursor-pointer p-2 rounded-sm bg-zinc-50 dark:bg-zinc-700 md:hidden"
    >
      <Menu size={17} />
    </div>
  ) : (
    <div
      onClick={handleMenu}
      className="flex flex-col items-end relative hover:cursor-pointer p-2 rounded-sm bg-zinc-50 dark:bg-zinc-700 md:hidden"
    >
      <X size={17} />
      <MenuOptions />
    </div>
  );
};
