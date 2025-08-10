import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="p-2 bg-neutral-950 h-screen">
            <ul className="bg-neutral-900 w-[288px] px-4 py-6 rounded-lg border border-neutral-800 h-full">
                <SidebarButton icon={<Home className="size-4" />} text={"Home"} href="/home" isSelected />
            </ul>
        </aside>
    );
}

interface SidebarButtonProps {
    icon: React.ReactNode;
    text: string;
    href: string;
    isSelected: boolean;
}

function SidebarButton({ icon, text, href, isSelected }: SidebarButtonProps) {
    return (
        <li>
            <a
                className={cn(
                    `w-full inline-flex items-center gap-1.5 py-2 px-2.5 rounded-md text-sm`,
                    isSelected ? "bg-neutral-800 text-neutral-50" : "bg-transparent text-neutral-200"
                )}
                href={href}
            >
                {icon}
                {text}
            </a>
        </li>
    );
}
