import { ContentSource } from "../types/types";
import { ContentSourceButton } from "./content-source-button";

interface UserMessageProps {
    imgSrc: string;
    imgAlt: string;
    message: string;
    contentSources: ContentSource[];
}

export function UserMessage({ imgSrc, imgAlt, message, contentSources }: UserMessageProps) {
    return (
        <div className="inline-flex gap-1.5 self-end">
            <div className="flex flex-col items-end gap-1">
                <p className="rounded-lg py-2 px-3 text-sm font-normal text-neutral-100 bg-neutral-800 w-fit">
                    {message}
                </p>
                <div className="flex gap-1 items-center">
                    {contentSources.map((source, i) => {
                        return (
                            <ContentSourceButton key={i} contentSource={source}>
                                {source.label}
                            </ContentSourceButton>
                        );
                    })}
                </div>
            </div>
            <img src={imgSrc} alt={imgAlt} className="size-9 rounded-full" />
        </div>
    );
}
