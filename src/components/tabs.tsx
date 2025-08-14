"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col gap-2", className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            className={cn(
                "bg-neutral-800 text-neutral-400 font-medium inline-flex h-9 gap-0.5 w-fit items-center justify-center rounded-lg p-1",
                className
            )}
            {...props}
        />
    );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={cn(
                "data-[state=active]:bg-neutral-700/50 data-[state=active]:text-neutral-200 border data-[state=active]:border-neutral-600 border-transparent text-neutral-400 bg-neutral-800 inline-flex items-center gap-1 rounded-lg text-sm font-medium py-1 px-2 [&>svg]:size-4 [&>svg]:shrink-0 hover:cursor-pointer hover:bg-neutral-700/20",
                className
            )}
            {...props}
        />
    );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content data-slot="tabs-content" className={cn("flex-1 outline-none", className)} {...props} />
    );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
