interface SideBySideContainerProps {
    headingText: string;
}

export function SideBySideContainer({ headingText }: SideBySideContainerProps) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-neutral-100">{headingText}</h2>
            <div className="w-full flex gap-4">
                <DefaultCard text="Front card here." />
                <DefaultCard text="Back card here." />
            </div>
        </div>
    );
}

interface DefaultCardProps {
    text: string;
}

function DefaultCard({ text }: DefaultCardProps) {
    return (
        <div className="rounded-lg w-full flex justify-center items-center text-base bg-neutral-900 border border-neutral-800 h-80">
            {text}
        </div>
    );
}
