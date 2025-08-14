import { CardItem } from "./card-item";

interface CardStackProps {
    cards: { id: number }[];
}

// prettier-ignore
export function CardStack({ cards }: CardStackProps) {
    return (
        <ul className="-space-y-[244px] list-none m-0 p-0">
            {cards.map((card, index) => {
                return (
                    <CardItem
                        key={card.id}
                        zIndex={-index}
                        cardIndex={index}
                    />
                );
            })}
        </ul>
    );
}
