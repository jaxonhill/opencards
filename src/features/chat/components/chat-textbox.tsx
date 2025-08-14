"use client";

import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function ChatTextbox() {
    const [text, setText] = useState<string>("");

    return (
        <div className="w-full flex flex-col bg-neutral-800 rounded-lg pb-3 border border-neutral-700">
            <textarea
                placeholder="Add a follow up..."
                className="text-sm px-3 pt-4 pb-2 w-full text-neutral-100 resize-none scrollbar scrollbar-thumb-neutral-600 scrollbar-track-neutral-700 placeholder:text-neutral-500 focus:outline-none"
                rows={1}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="self-end mr-3 p-1 inline-flex justify-center items-center rounded-md bg-emerald-500 text-neutral-100 cursor-pointer transition-colors disabled:bg-neutral-700 disabled:text-neutral-500 disabled:cursor-not-allowed"
                disabled={text === ""}
            >
                <ArrowUp className="size-5" />
            </button>
        </div>
    );
}
