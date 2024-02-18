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
        "px-16 py-1.5 text-sm capitalize rounded-md text-gray-600 font-semibold dark:text-zinc-400 hover:underline hover:cursor-pointer transition-all duration-300 ease-in-out",
        {
          ["font-semibold bg-zinc-100 dark:text-zinc-50 dark:bg-zinc-200/10 "]:
            active,
        }
      )}
    >
      {name}
    </button>
  );
};
