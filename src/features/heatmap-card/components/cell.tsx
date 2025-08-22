import { HeatmapCellData } from "../types/types";

export function HeatmapCell({ dayGrade }: HeatmapCellData) {
    return <div className={`size-3 rounded-[2px] ${dayGrade}`}></div>;
}
