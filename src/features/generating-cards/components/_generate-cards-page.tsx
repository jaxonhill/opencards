"use client";

import { useAnimate } from "motion/react";
import { CardStack } from "./card-stack";
import { useEffect, useState } from "react";
import { drawLinesOnTopCard } from "../utils/draw-lines-on-top-card";
import { slideTopCardOffScreen } from "../utils/slide-top-card-off-screen";

async function popUpCardStack() {}

type ElementSize = {
    width: number;
    height: number;
};

export function GenerateCardsPage() {
    const [scope, animate] = useAnimate();
    const [windowSize, setWindowSize] = useState<ElementSize>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener("resize", handleResize);

        (async () => {
            await drawLinesOnTopCard(animate);
            await slideTopCardOffScreen(animate, windowSize.width, 640);
            // await popUpCardStack(animate);
        })();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <section className="flex w-[640px] flex-col gap-3 pb-32" ref={scope}>
                <h1 className="text-neutral-100 font-medium">Generating cards</h1>
                <CardStack />
            </section>
        </div>
    );
}
