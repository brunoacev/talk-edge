import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  active?: boolean;
}

export const CaseButton = ({ name, active, ...rest }: CaseButton) => {
  return (
    <button
      {...rest}
      className={cn(
        "px-12 py-2 text-sm capitalize border dark:border-none hover:bg-zinc-50 dark:bg-zinc-400/20  rounded-md dark:text-zinc-400 dark:hover:bg-zinc-400/60 dark:hover:text-zinc-50 hover:cursor-pointer transition-all duration-300 ease-in-out",
        {
          ["font-semibold bg-zinc-50 dark:text-zinc-50 dark:bg-zinc-400/60"]:
            active,
        }
      )}
    >
      {name}
    </button>
  );
};
