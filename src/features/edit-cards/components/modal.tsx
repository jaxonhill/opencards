import { FolderIcon } from "lucide-react";

export function Modal() {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg py-16 px-8 w-[28rem]">
            <h1 className="text-neutral-50 font-medium text-xl">Add cards to a deck</h1>
            <Folder />
        </div>
    );
}

export function Folder() {
    return (
        <button className="inline-flex items-center gap-1.5 py-0.5 text-neutral-400 text-sm font-normal">
            <FolderIcon className="fill-neutral-600 stroke-none size-6" />
            Programming
        </button>
    );
}
