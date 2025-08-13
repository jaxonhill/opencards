import { CardItem } from "./card-item";

const CARD_Z_INDEXES = [50, 40, 30] as const;

// prettier-ignore
export function CardStack() {
    return (
        <ul className="-space-y-[244px] list-none m-0 p-0">
            {CARD_Z_INDEXES.map((zIndex, index) => {
                return (
                    <CardItem
                        key={zIndex}
                        zIndex={zIndex}
                        cardIndex={index}
                    />
                );
            })}
        </ul>
    );
}
