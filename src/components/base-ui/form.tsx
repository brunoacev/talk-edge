import * as React from "react";
import { cn } from "@/lib/utils";

interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: React.ReactNode;
}

export const Form = ({ className, children, ...rest }: Form) => {
  return (
    <form
      className={cn(
        "bg-zinc-50 dark:bg-zinc-700/50 px-4 py-6 rounded-md shadow-md flex flex-col gap-4 w-full max-w-md items-start",
        className
      )}
      {...rest}
    >
      {children}
    </form>
  );
};
