import { cn } from "@/lib/utils";
import { GalleryHorizontalEnd, Home, Plus } from "lucide-react";

type Page = {
    label: string;
    icon: React.ReactNode;
    href: string;
};

const PAGES: Page[] = [
    {
        label: "Home",
        icon: <Home />,
        href: "/home",
    },
    {
        label: "Add",
        icon: <Plus />,
        href: "/add",
    },
    {
        label: "View",
        icon: <GalleryHorizontalEnd />,
        href: "/view",
    },
];

export function Sidebar() {
    return (
        <aside className="p-2 bg-neutral-950 h-screen">
            <ul className="bg-neutral-900 w-[288px] px-4 py-6 rounded-lg border border-neutral-800 h-full space-y-1">
                {PAGES.map((page, i) => (
                    <SidebarButton key={page.label} {...page} isSelected={i === 0} />
                ))}
            </ul>
        </aside>
    );
}

type SidebarButtonProps = Page & {
    isSelected: boolean;
};

function SidebarButton({ icon, label, href, isSelected }: SidebarButtonProps) {
    return (
        <li>
            <a
                className={cn(
                    `w-full inline-flex items-center gap-1.5 py-2 px-2.5 rounded-md text-sm transition-colors`,
                    isSelected
                        ? "bg-neutral-800 text-neutral-50"
                        : "bg-neutral-900 text-neutral-200 hover:bg-neutral-800/50"
                )}
                href={href}
            >
                <span className="[&>svg]:size-4 [&>svg]:shrink-0">{icon}</span>
                {label}
            </a>
        </li>
    );
}
