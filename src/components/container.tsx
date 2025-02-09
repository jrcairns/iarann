import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

export function Container({ children, className, ...props }: PropsWithChildren<ComponentProps<"div">>) {
    return (
        <div className={cn("mx-auto w-full max-w-3xl xl:max-w-screen-xl px-6 xl:px-8", className)} {...props}>
            {children}
        </div>
    );
}