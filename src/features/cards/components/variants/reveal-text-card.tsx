import { CardMode } from "../../types/types";
import { CardFrame } from "../card-frame";

interface RevealTextCardProps {
    mode: CardMode;
}

export function RevealTextCard({ mode }: RevealTextCardProps) {
    switch (mode) {
        case "edit":
            return <div></div>;
        case "view":
            return <div></div>;
        default:
            throw new Error(`Card mode "${mode}" does not exist.`);
    }
}
