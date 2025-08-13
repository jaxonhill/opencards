import { SkeletonLines } from "./skeleton-lines";

interface CardItemProps {
    zIndex: number;
    cardIndex: number;
}

export function CardItem({ zIndex, cardIndex }: CardItemProps) {
    const isTopCard: boolean = cardIndex === 0;
    return (
        <li
            id={isTopCard ? "top" : undefined}
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 h-64 flex flex-col justify-center gap-2.5 relative shadow-lg py-8 px-6"
            style={{ zIndex: zIndex }}
        >
            {isTopCard && <SkeletonLines />}
        </li>
    );
}
