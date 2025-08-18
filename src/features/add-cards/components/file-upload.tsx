import { Upload } from "lucide-react";

export function FileUpload() {
    return (
        <div className="h-[17rem] bg-neutral-800/50 text-neutral-500 text-base font-medium flex flex-col gap-2 justify-center items-center w-full border border-neutral-800 rounded-lg">
            Drop or Select
            <Upload className="size-5" />
        </div>
    );
}
