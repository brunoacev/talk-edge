"use client";

import * as React from "react";
import { User2 } from "lucide-react";
import { logoutAccountAction } from "@/actions/logout-account";

export const UserOptions = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={handleClick}
        className="w-ffull h-fit bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-600 p-2 rounded-md flex items-center justify-center hover:cursor-pointer transition-all duration-300 ease-in-out"
      >
        <User2 size={20} />
      </div>

      {!!isOpen && (
        <div className="absolute bottom-10 flex flex-col items-start gap-4 py-4 bg-zinc-50/50 dark:bg-zinc-700 px-1  w-full rounded-md">
          <form action={logoutAccountAction} className="w-full">
            <button
              type="submit"
              className="bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-blue-500 hover:cursor-pointer w-full  text-xs p-2 rounded-sm transition-all duration-300 ease-in-out"
            >
              Sair
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
