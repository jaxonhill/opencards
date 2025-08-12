"use client";

import { useState } from "react";

import { Button } from "@/components/button";
import { Paintbrush, WandSparkles } from "lucide-react";

export default function AddCardsPage() {
    const [text, setText] = useState<string>("");

    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
            <div className="flex flex-col gap-4 w-[640px] pb-16">
                <DirectionsHeading />
                <div className="rounded-lg h-64 overflow-hidden border border-neutral-800 bg-neutral-900">
                    <textarea
                        placeholder="Paste the content to convert to flashcards. Don't worry about formatting."
                        className="h-full w-full bg-neutral-900 rounded-lg py-5 px-6 text-neutral-100 text-base resize-none scrollbar scrollbar-thumb-neutral-700 scrollbar-track-neutral-800 placeholder:text-neutral-600"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <Button className="mt-2 self-end" disabled={text === ""}>
                    <WandSparkles className="size-4" />
                    <span>Generate cards</span>
                </Button>
            </div>
        </div>
    );
}

function DirectionsHeading() {
    return (
        <header className="text-neutral-100 inline-flex items-center gap-2">
            {<Paintbrush className="size-6" />}
            <h1 className="text-2xl font-medium">Paste content here</h1>
        </header>
    );
}
