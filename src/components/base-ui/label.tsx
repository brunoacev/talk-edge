import * as React from "react";
import { cn } from "@/lib/utils";

interface Label extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: React.ReactNode;
}

export const Label = ({ className, children, ...rest }: Label) => {
  return (
    <label
      className={cn("font-semibold text-md tracking-wide", className)}
      {...rest}
    >
      {children}
    </label>
  );
};
