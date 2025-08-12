import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "w-fit bg-neutral-100 text-neutral-900 font-medium text-sm rounded-lg py-2 px-3 inline-flex items-center gap-1.5 cursor-pointer",
                "disabled:bg-neutral-900 disabled:text-neutral-800 disabled:cursor-not-allowed",
                props.className
            )}
        >
            {props.children}
        </button>
    );
}
