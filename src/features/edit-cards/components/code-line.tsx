import { ibmMono } from "@/config/fonts";

interface CodeLineProps {
    lineNumber: number;
    lineContent: string;
    maxLineNumberLength: number;
}

export function CodeLine({ lineNumber, lineContent, maxLineNumberLength }: CodeLineProps) {
    return (
        <li className={`w-full inline-flex items-center gap-4 text-sm whitespace-pre ${ibmMono.className}`}>
            <span className="text-neutral-600 text-right select-none">
                {String(lineNumber).padStart(maxLineNumberLength)}
            </span>
            <span className="text-neutral-100 [tab-size:4]">{lineContent}</span>
        </li>
    );
}
