import { CodeLine } from "./code-line";

interface JsonTabContentProps {
    json: string;
}

export function JsonTabContent({ json }: JsonTabContentProps) {
    let codeLines: string[] = json.split("\n");
    let maximumLineNumberLength: number = String(codeLines.length + 1).length;

    return (
        <ul className="bg-neutral-900 border border-neutral-800 rounded-lg w-full p-2 list-none flex flex-col gap-0 h-full overflow-y-scroll scrollbar scrollbar-thumb-neutral-700 scrollbar-track-transparent">
            {codeLines.map((line, i) => {
                return (
                    <CodeLine
                        key={i}
                        lineNumber={i + 1}
                        lineContent={line}
                        maxLineNumberLength={maximumLineNumberLength}
                    />
                );
            })}
        </ul>
    );
}
