import { cn } from "@/lib/utils";
import React from "react";

type PolymorphicProps<E extends React.ElementType, P> = P & {
    as?: E;
} & Omit<React.ComponentProps<E>, keyof P | "as">;

type BaseProps = {
    variant?: "default" | "secondary";
    className?: string;
    children: React.ReactNode;
};

export function Button<E extends React.ElementType = "button">({
    as,
    variant = "default",
    className,
    ...props
}: PolymorphicProps<E, BaseProps>) {
    const Component = as || "button";

    const mergedClassName = cn(
        "w-fit font-medium text-sm rounded-lg py-2 px-3 inline-flex items-center gap-1.5 cursor-pointer transition-colors [&>svg]:size-4 [&>svg]:shrink-0 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "default" && "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        variant === "secondary" && "bg-neutral-800 text-neutral-50 hover:bg-neutral-700/60",
        className
    );

    return (
        <Component {...props} className={mergedClassName}>
            {props.children}
        </Component>
    );
}
