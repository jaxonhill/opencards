import { ibmMono } from "@/config/fonts";
import { Check } from "lucide-react";

export function SystemMessage() {
    return <SuccessfulMessage numCardsCreated={8} />;
}

interface SuccessfulMessageProps {
    numCardsCreated: number;
}

function SuccessfulMessage({ numCardsCreated }: SuccessfulMessageProps) {
    return (
        <div className={`inline-flex items-center gap-2 text-neutral-100 ${ibmMono.className}`}>
            <div className="flex justify-center items-center size-6 rounded-full bg-emerald-500">
                <Check className="size-3 shrink-0" strokeWidth={3} />
            </div>
            <p>
                Created <strong className="font-bold">{numCardsCreated}</strong> cards.
            </p>
        </div>
    );
}

// TODO: Add error later
