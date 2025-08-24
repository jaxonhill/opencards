"use client";

import { ActionsBar } from "./actions-bar";
import { GenerateWithAIContainer } from "./generate-with-ai-container";
import { Button } from "@/components/button";
import { CARD_VARIANT } from "@/features/cards/types/types";
import { CardSection } from "./card-section";

import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { Plus, WandSparkles } from "lucide-react";

const DEFAULT_CARDS: CARD_VARIANT[] = [
    CARD_VARIANT.FRONT_BACK,
    CARD_VARIANT.FRONT_BACK,
    CARD_VARIANT.FRONT_BACK,
    CARD_VARIANT.FRONT_BACK,
    CARD_VARIANT.FRONT_BACK,
];

export const GEN_WITH_AI_ANIMATION_SECONDS: number = 0.4;
export const GEN_WITH_AI_BOUNCE: number = 0.18;

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
                    transition={{
                        type: "spring",
                        visualDuration: GEN_WITH_AI_ANIMATION_SECONDS,
                        bounce: GEN_WITH_AI_BOUNCE,
                    }}
                >
                    {DEFAULT_CARDS.map((card, i) => {
                        return <CardSection key={i} cardNumber={i + 1} variant={card} />;
                    })}
                </motion.div>
            </LayoutGroup>
        </main>
    );
}
