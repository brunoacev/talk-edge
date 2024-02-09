"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

import { useFormStatus } from "react-dom";

interface SubmitButon extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const SubmitButton = ({ children, className }: SubmitButon) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn(
        "px-4 py-2 bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-50/80 font-semibold dark:text-zinc-950 w-full rounded-md dark:hover:bg-zinc-50 transition-all duration-300 ease-in-out",
        className
      )}
      disabled={pending}
    >
      {pending ? "Carregando..." : children}
    </button>
  );
};
