import { CARD_MODE } from "../../types/types";
import { CardFrame } from "../card-frame";

interface RevealTextCardProps {
    mode: CARD_MODE;
}

export function RevealTextCard({ mode }: RevealTextCardProps) {
    switch (mode) {
        case CARD_MODE.EDIT:
            return (
                <CardFrame>
                    <div>Reveal Card editing</div>
                </CardFrame>
            );
        case CARD_MODE.VIEW:
            return (
                <div>
                    <CardFrame>
                        <div>Reveal Card view</div>
                    </CardFrame>
                </div>
            );
        default:
            throw new Error(`Card mode "${mode}" does not exist.`);
    }
}
