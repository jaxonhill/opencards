import { WandSparkles, X } from "lucide-react";
import { FileUpload } from "./file-upload";
import { PasteTextbox } from "./paste-textbox";
import { Button } from "@/components/button";
import { motion } from "motion/react";
import { GEN_WITH_AI_ANIMATION_SECONDS, GEN_WITH_AI_BOUNCE } from "./_add-cards-page";
import { cn } from "@/lib/utils";

interface GenerateWithAIContainerProps {
    onClose: () => void;
}

export function GenerateWithAIContainer({ onClose }: GenerateWithAIContainerProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", visualDuration: GEN_WITH_AI_ANIMATION_SECONDS, bounce: GEN_WITH_AI_BOUNCE }}
            className="w-full px-16 pt-16 pb-12 flex flex-col gap-8 bg-neutral-900 rounded-lg border border-neutral-800 relative"
            style={{ transformOrigin: "top" }}
        >
            <CloseButton onClick={onClose} />
            <h1 className="font-medium text-xl text-neutral-100 leading-8">Generate with AI</h1>
            <div className="flex gap-5 items-center">
                <FileUpload />
                <div className="h-[17rem] text-neutral-600 font-medium text-xl shrink-0 flex items-center">OR</div>
                <PasteTextbox />
            </div>
            <div className="w-full pt-4 flex justify-end">
                <Button disabled>
                    <WandSparkles />
                    Start Generating
                </Button>
            </div>
        </motion.div>
    );
}

type CloseButtonProps = React.ComponentProps<"button">;

function CloseButton({ ...props }: CloseButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "absolute top-6 right-6 inline-flex justify-center items-center bg-neutral-800/50 border border-neutral-800 rounded-full size-10 text-neutral-500 hover:bg-neutral-800/80 transition-colors hover:text-neutral-400 hover:cursor-pointer",
                props.className
            )}
        >
            <X className="size-5" />
        </button>
    );
}
