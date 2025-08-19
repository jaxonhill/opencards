import { WandSparkles } from "lucide-react";
import { FileUpload } from "./file-upload";
import { PasteTextbox } from "./paste-textbox";
import { Button } from "@/components/button";
import { motion } from "motion/react";

export function GenerateWithAIContainer() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: "-30%", scaleY: 0.5 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{ type: "spring", visualDuration: 0.25, bounce: 0.2 }}
            className="w-full px-16 pt-16 pb-12 flex flex-col gap-8 bg-neutral-900 rounded-lg border border-neutral-800"
        >
            <h1 className="font-medium text-xl text-neutral-100">Generate with AI</h1>
            <div className="flex gap-5 items-center">
                <FileUpload />
                <div className="h-[17rem] text-neutral-600 font-medium text-xl shrink-0 flex items-center">OR</div>
                <PasteTextbox />
            </div>
            <div className="w-full pt-6 flex justify-end">
                <Button>
                    <WandSparkles />
                    Start Generating
                </Button>
            </div>
        </motion.div>
    );
}
