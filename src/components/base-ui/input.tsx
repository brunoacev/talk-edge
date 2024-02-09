import * as React from "react";
import { cn } from "@/lib/utils";

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...rest }: Input) => {
  return (
    <input
      className={cn(
        "rounded-sm px-4 py-2 text-start w-full bg-zinc-200/50 dark:bg-zinc-50/20 text-sm",
        className
      )}
      required
      {...rest}
    />
  );
};
