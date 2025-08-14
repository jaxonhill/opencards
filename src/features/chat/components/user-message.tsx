interface UserMessageProps {
    imgSrc: string;
    imgAlt: string;
    message: string;
}

export function UserMessage({ imgSrc, imgAlt, message }: UserMessageProps) {
    return (
        <div className="inline-flex gap-1.5 items-center self-end">
            <p className="rounded-lg py-2 px-3 text-sm font-normal text-neutral-100 bg-neutral-800 w-fit">{message}</p>
            <img src={imgSrc} alt={imgAlt} className="size-9 rounded-full" />
        </div>
    );
}
