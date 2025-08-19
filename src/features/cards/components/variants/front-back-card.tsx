import { CARD_MODE } from "../../types/types";
import { CardFrame } from "../card-frame";

interface FrontBackCardProps {
    mode: CARD_MODE;
}

export function FrontBackCard({ mode }: FrontBackCardProps) {
    switch (mode) {
        case CARD_MODE.EDIT:
            return (
                <CardFrame>
                    <div></div>
                </CardFrame>
            );
        case CARD_MODE.VIEW:
            return <div></div>;
        default:
            throw new Error(`Card mode "${mode}" does not exist.`);
    }
}
