import { cn } from "@/lib/utils";

type ButtonProps = {
    variant?: "default" | "secondary";
} & React.ComponentProps<"button">;

export function Button({ variant = "default", ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "w-fit font-medium text-sm rounded-lg py-2 px-3 inline-flex items-center gap-1.5 cursor-pointer transition-colors [&>svg]:size-4 [&>svg]:shrink-0 disabled:cursor-not-allowed disabled:opacity-50",
                variant === "default" && "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
                variant === "secondary" && "bg-neutral-800 text-neutral-50 hover:bg-neutral-700/60",
                props.className
            )}
        >
            {props.children}
        </button>
    );
}
