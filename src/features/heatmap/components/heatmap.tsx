export enum DAY_GRADE {
    NONE = "bg-neutral-800",
    OK = "bg-emerald-900",
    GOOD = "bg-emerald-700",
    GREAT = "bg-emerald-400",
    PERFECT = "bg-emerald-100",
}

interface HeatmapProps {}

function Heatmap() {
    return <div></div>;
}

export interface IHeatmapCell {
    date: string;
    numCardsStudied: number;
    numCardsRecommended: number;
    dayGrade: DAY_GRADE;
}

interface HeatmapCellProps {
    dayGrade: DAY_GRADE;
}

export function HeatmapCell({ dayGrade }: HeatmapCellProps) {
    return <div className={`size-3 rounded-[2px] ${dayGrade}`}></div>;
}
