import { CardMode } from "../../types/types";
import { CardFrame } from "../card-frame";

interface FrontBackCardProps {
    mode: CardMode;
}

export function FrontBackCard({ mode }: FrontBackCardProps) {
    switch (mode) {
        case "edit":
            return <div></div>;
        case "view":
            return <div></div>;
        default:
            throw new Error(`Card mode "${mode}" does not exist.`);
    }
}
