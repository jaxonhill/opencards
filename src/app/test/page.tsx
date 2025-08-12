const CARD_Z_INDEXES = [50, 40, 30] as const;
const SKELETON_LINE_WIDTH_PERCENTAGES = [75, 100, 80, 55, 40] as const;

// prettier-ignore
function SkeletonLines() {
    return (
        <div className="flex flex-col gap-2.5">
            {SKELETON_LINE_WIDTH_PERCENTAGES.map((pct) => {
                return (
                    <div
                        key={pct}
                        className="h-6 rounded-lg bg-neutral-800"
                        style={{ width: `${pct}%` }}
                    />
                );
            })}
        </div>
    );
}

interface CardItemProps {
    zIndex: number;
    isSkeletonVisible: boolean;
}

function CardItem({ zIndex, isSkeletonVisible }: CardItemProps) {
    return (
        <li
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 h-64 flex flex-col justify-center gap-2.5 relative shadow-lg py-8 px-6"
            style={{ zIndex: zIndex }}
        >
            {isSkeletonVisible && <SkeletonLines />}
        </li>
    );
}

// prettier-ignore
function CardStack() {
    const topZIndex: number = Math.max(...CARD_Z_INDEXES);

    return (
        <ul className="-space-y-[244px] list-none m-0 p-0">
            {CARD_Z_INDEXES.map((zIndex) => {
                return (
                    <CardItem
                        key={zIndex}
                        zIndex={zIndex}
                        isSkeletonVisible={zIndex === topZIndex}
                    />
                );
            })}
        </ul>
    );
}

export default function TestPage() {
    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
            <div className="flex flex-col gap-3 w-[640px] pb-32">
                <h1 className="text-neutral-100 font-medium">Generating cards</h1>
                <div className="-space-y-61">
                    {CARD_Z_INDEXES.map((zIndex, arrIndex) => {
                        return (
                            <div
                                key={zIndex}
                                className="w-full rounded-lg bg-neutral-900 border py-8 px-6 border-neutral-800 h-64 flex flex-col gap-2.5 justify-center relative shadow-lg"
                                style={{
                                    zIndex: zIndex,
                                }}
                            >
                                {arrIndex === 0 && (
                                    <>
                                        {SKELETON_LINE_WIDTH_PERCENTAGES.map((lengthPercentage) => {
                                            return (
                                                <div
                                                    key={lengthPercentage}
                                                    className="h-6 rounded-lg bg-neutral-800"
                                                    style={{ width: `${lengthPercentage}%` }}
                                                ></div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
