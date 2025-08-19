"use client";

import { ActionsBar } from "./actions-bar";
import { GenerateWithAIContainer } from "./generate-with-ai-container";
import { Button } from "@/components/button";
import { CardVariant } from "@/features/cards/types/types";
import { CardSection } from "./card-section";

import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { Plus, WandSparkles } from "lucide-react";

const DEFAULT_CARDS: CardVariant[] = ["Front & Back", "Front & Back", "Front & Back", "Front & Back", "Front & Back"];

export function AddCardsPage() {
    const [wantsToAIGenerate, setWantsToAIGenerate] = useState<boolean>(false);

    return (
        <main className="w-6xl">
            <LayoutGroup>
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
                <motion.div
                    layout
                    className="flex flex-col gap-11 pt-11"
                    transition={{ ease: "easeOut", duration: 0.2 }}
                >
                    {DEFAULT_CARDS.map((card, i) => {
                        return <CardSection key={i} cardNumber={i + 1} variant={card} />;
                    })}
                </motion.div>
            </LayoutGroup>
        </main>
    );
}
