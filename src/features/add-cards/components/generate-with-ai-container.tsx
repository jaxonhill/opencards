import { WandSparkles } from "lucide-react";
import { FileUpload } from "./file-upload";
import { PasteTextbox } from "./paste-textbox";
import { Button } from "@/components/button";

export function GenerateWithAIContainer() {
    return (
        <div className="w-full px-10 pt-11 pb-10 flex flex-col gap-8 bg-neutral-900 rounded-lg border border-neutral-800">
            <h1 className="font-medium text-xl text-neutral-100">Generate with AI</h1>
            <div className="flex gap-5 items-center">
                <FileUpload />
                <div className="h-[17rem] text-neutral-600 font-medium text-xl shrink-0 flex items-center">OR</div>
                <PasteTextbox />
            </div>
            <div className="w-full pt-4 flex justify-end">
                <Button>
                    <WandSparkles />
                    Start Generating
                </Button>
            </div>
        </div>
    );
}
