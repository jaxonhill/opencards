import { CardMode, CardVariant } from "../types/types";
import { FrontBackCard } from "./variants/front-back-card";
import { RevealTextCard } from "./variants/reveal-text-card";

interface CardRendererProps {
    variant: CardVariant;
    mode: CardMode;
}

export function CardRenderer({ variant, mode }: CardRendererProps) {
    switch (variant) {
        case "Front & Back":
            return <FrontBackCard />;
        case "Reveal Text":
            return <RevealTextCard />;
        default:
            throw Error(`Card type "${variant}" does not exist. Something went wrong.`);
    }
}
