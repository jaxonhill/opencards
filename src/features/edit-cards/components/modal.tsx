import { FolderIcon } from "lucide-react";

export function Modal() {
    return <div className=""></div>;
}

export function Folder() {
    return (
        <button className="inline-flex items-center gap-1.5 py-0.5">
            <FolderIcon className="fill-neutral-600 stroke-none size-6" />
            Programming
        </button>
    );
}
