import * as React from "react";
import { cn } from "@/lib/utils";

interface Box {
  className?: string;
  children: React.ReactNode;
}

export const Box = ({ className, children }: Box) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {children}
    </div>
  );
};
