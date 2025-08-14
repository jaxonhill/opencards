import { cn } from "@/lib/utils";
import { ContentSource } from "../types/types";

type ContentSourceProps = {
    contentSource: ContentSource;
} & React.ComponentProps<"button">;

export function ContentSourceButton({ contentSource, ...props }: ContentSourceProps) {
    return (
        <button
            {...props}
            className={cn(
                "inline-flex items-center gap-1 rounded-lg bg-neutral-800 py-1.5 px-2.5 font-medium text-xs text-neutral-400 hover:bg-neutral-700/50 hover:cursor-pointer transition-colors",
                props.className
            )}
        >
            <span className="[&>svg]:size-3 [&>svg]:shrink-0">{contentSource.icon}</span>
            {props.children}
        </button>
    );
}
