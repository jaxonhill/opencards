import { GalleryHorizontalEnd } from "lucide-react";
import { APP_NAME } from "@/config/constants";

interface LogoProps {
    type?: "full" | "icon";
}

export function Logo({ type = "full" }: LogoProps) {
    if (type === "icon") {
        return <LogoIcon />;
    }

    return (
        <div className="inline-flex items-center gap-1.5 text-neutral-200">
            <LogoIcon />
            {APP_NAME}
        </div>
    );
}

function LogoIcon() {
    return (
        <div className="size-8 bg-emerald-500 rounded-lg flex justify-center items-center">
            <GalleryHorizontalEnd className="size-5 text-neutral-100" />
        </div>
    );
}
