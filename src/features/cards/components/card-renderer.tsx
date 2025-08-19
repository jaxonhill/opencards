import { CARD_VARIANT, CARD_MODE } from "../types/types";
import { FrontBackCard } from "./variants/front-back-card";
import { RevealTextCard } from "./variants/reveal-text-card";

interface CardRendererProps {
    variant: CARD_VARIANT;
    mode: CARD_MODE;
}

export function CardRenderer({ variant, mode }: CardRendererProps) {
    switch (variant) {
        case CARD_VARIANT.FRONT_BACK:
            return <FrontBackCard mode={mode} />;
        case CARD_VARIANT.REVEAL_TEXT:
            return <RevealTextCard mode={mode} />;
        default:
            throw Error(`Card type "${variant}" does not exist. Something went wrong.`);
    }
}
