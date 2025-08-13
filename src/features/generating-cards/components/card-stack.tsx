import { CardItem } from "./card-item";

const CARD_Z_INDEXES = [50, 40, 30] as const;

// prettier-ignore
export function CardStack() {
    const topZIndex: number = Math.max(...CARD_Z_INDEXES);

    return (
        <ul className="-space-y-[244px] list-none m-0 p-0">
            {CARD_Z_INDEXES.map((zIndex) => {
                return (
                    <CardItem
                        key={zIndex}
                        zIndex={zIndex}
                        isSkeletonVisible={zIndex === topZIndex}
                    />
                );
            })}
        </ul>
    );
}
