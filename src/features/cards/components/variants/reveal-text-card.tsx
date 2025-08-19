import { CARD_MODE } from "../../types/types";
import { CardFrame } from "../card-frame";

interface RevealTextCardProps {
    mode: CARD_MODE;
}

export function RevealTextCard({ mode }: RevealTextCardProps) {
    switch (mode) {
        case CARD_MODE.EDIT:
            return <div></div>;
        case CARD_MODE.VIEW:
            return <div></div>;
        default:
            throw new Error(`Card mode "${mode}" does not exist.`);
    }
}
