const SKELETON_LINE_WIDTH_PERCENTAGES = [75, 100, 80, 55, 40] as const;

export function SkeletonLines() {
    return (
        <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
            {SKELETON_LINE_WIDTH_PERCENTAGES.map((pct) => {
                return <li key={pct} className="h-6 rounded-lg bg-neutral-800" style={{ width: `${pct}%` }} />;
            })}
        </ul>
    );
}
