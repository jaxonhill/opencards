import { CARD_MODE } from "../../types/types";
import { CardFrame } from "../card-frame";

interface FrontBackCardProps {
    mode: CARD_MODE;
}

export function FrontBackCard({ mode }: FrontBackCardProps) {
    switch (mode) {
        case CARD_MODE.EDIT:
            return (
                <div className="w-full flex gap-4 items-center text-neutral-100">
                    <CardFrame>
                        <div>Front</div>
                    </CardFrame>
                    <CardFrame>
                        <div>Back</div>
                    </CardFrame>
                </div>
            );
        case CARD_MODE.VIEW:
            return (
                <CardFrame>
                    <div>Front of card, but would have options to flip.</div>
                </CardFrame>
            );
        default:
            throw new Error(`Card mode "${mode}" does not exist.`);
    }
}
