interface HeatmapMonthLabel {
    label: string;
    startCol: number;
    endCol: number;
}

export function HeatmapMonthLabel({ label, startCol, endCol }: HeatmapMonthLabel) {
    return (
        <div
            className={`text-neutral-600 text-xs font-normal row-span-1`}
            style={{
                gridColumnStart: startCol,
                gridColumnEnd: endCol,
            }}
        >
            {label}
        </div>
    );
}
