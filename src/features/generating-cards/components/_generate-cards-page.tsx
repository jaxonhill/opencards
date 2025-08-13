import { CardStack } from "./card-stack";

export function GenerateCardsPage() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <section className="flex w-[640px] flex-col gap-3 pb-32">
                <h1 className="text-neutral-100 font-medium">Generating cards</h1>
                <CardStack />
            </section>
        </div>
    );
}
