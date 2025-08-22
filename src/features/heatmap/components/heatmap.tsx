import { HeatmapCellData } from "../types/types";

interface HeatmapProps {}

function Heatmap() {
    return <div></div>;
}

export function HeatmapCell({ dayGrade }: HeatmapCellData) {
    return <div className={`size-3 rounded-[2px] ${dayGrade}`}></div>;
}
