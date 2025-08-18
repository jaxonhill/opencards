import { Button } from "@/components/button";
import { Plus, WandSparkles } from "lucide-react";

export function ActionsBar() {
    return (
        <header className="inline-flex w-full gap-3 items-center justify-end py-8 sticky">
            <Button variant="secondary">
                <WandSparkles />
                Generate with AI
            </Button>
            <Button>
                <Plus />
                Add to...
            </Button>
        </header>
    );
}
