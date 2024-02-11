"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "../mobile-menu";

export const HandleMenu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return !isOpen ? (
    <button
      onClick={handleToggle}
      className="md:hidden hover:cursor-pointer p-2 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-300 ease-in-out"
    >
      <Menu size={18} />
    </button>
  ) : (
    <button
      onClick={handleToggle}
      className="md:hidden hover:cursor-pointer p-2 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-300 ease-in-out"
    >
      <X size={18} />
      <MobileMenu />
    </button>
  );
};
