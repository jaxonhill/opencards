"use client";

import { useAnimate } from "motion/react";
import { CardStack } from "./card-stack";
import { useEffect } from "react";
import { drawLinesOnTopCard } from "../utils/draw-lines-on-top-card";

async function slideTopCardOffScreen() {}
async function popUpCardStack() {}

export function GenerateCardsPage() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        (async () => {
            await drawLinesOnTopCard(animate);
        })();
    }, []);

    return (
        <div className="flex h-full w-full items-center justify-center">
            <section className="flex w-[640px] flex-col gap-3 pb-32" ref={scope}>
                <h1 className="text-neutral-100 font-medium">Generating cards</h1>
                <CardStack />
            </section>
        </div>
    );
}
