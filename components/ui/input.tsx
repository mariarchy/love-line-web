"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-love-text/30 bg-transparent px-4 py-2 text-love-text placeholder:text-love-text/50 focus:outline-none focus:ring-2 focus:ring-love-text/50 focus:ring-offset-2 focus:ring-offset-love-bg disabled:cursor-not-allowed disabled:opacity-50",
          "text-base lowercase",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
