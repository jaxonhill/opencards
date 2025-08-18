import { cn } from "@/lib/utils";

type ButtonProps = {
    variant?: "default" | "secondary";
} & React.ComponentProps<"button">;

export function Button({ variant = "default", ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "w-fit font-medium text-sm rounded-lg py-2 px-3 inline-flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                variant === "default" && "bg-neutral-100 text-neutral-900",
                variant === "secondary" && "bg-neutral-900 text-neutral-50",
                props.className
            )}
        >
            {props.children}
        </button>
    );
}
