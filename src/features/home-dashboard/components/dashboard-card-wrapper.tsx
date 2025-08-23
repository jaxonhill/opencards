import { cn } from "@/lib/utils";

type DashboardCardWrapperProps = {
    children: React.ReactNode;
} & React.ComponentProps<"section">;

export function DashboardCardWrapper({ children, className, ...props }: DashboardCardWrapperProps) {
    return (
        <section
            {...props}
            className={cn("p-8 bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden", className)}
        >
            {children}
        </section>
    );
}
