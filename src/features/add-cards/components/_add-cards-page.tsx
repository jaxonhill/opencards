"use client";

import { useState } from "react";

// <Toolbar />
// wantsToGenWithAI && <GenerateWithAIContainer />
// <CardContainerHandler />

import { ActionsBar } from "./actions-bar";
import { GenerateWithAIContainer } from "./generate-with-ai-container";
import { Button } from "@/components/button";
import { Plus, WandSparkles } from "lucide-react";

export function AddCardsPage() {
    const [wantsToAIGenerate, setWantsToAIGenerate] = useState<boolean>(false);

    return (
        <main className="w-6xl">
            <ActionsBar>
                <>
                    <Button onClick={() => setWantsToAIGenerate(true)} variant="secondary">
                        <WandSparkles />
                        Generate with AI
                    </Button>
                    <Button>
                        <Plus />
                        Add to...
                    </Button>
                </>
            </ActionsBar>
            {wantsToAIGenerate && <GenerateWithAIContainer />}
        </main>
    );
}
