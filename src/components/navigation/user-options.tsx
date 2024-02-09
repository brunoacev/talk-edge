"use client";
import { User2 } from "lucide-react";
import * as React from "react";

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
        <div className="absolute bottom-16 flex flex-col items-center gap-4 py-4 bg-zinc-50/50 dark:bg-zinc-700 px-1  w-full rounded-md">
          <span className="bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-blue-500 hover:cursor-pointer w-full text-center p-1 rounded-sm transition-all duration-300 ease-in-out">
            Teste
          </span>
        </div>
      )}
    </div>
  );
};
