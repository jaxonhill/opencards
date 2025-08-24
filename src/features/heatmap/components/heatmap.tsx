import { HeatmapDisplayData } from "../types/types";
import { HeatmapCell } from "./cell";
import { HeatmapMonthLabel } from "./month-label";

interface HeatmapProps {
    data: HeatmapDisplayData;
}

export function Heatmap({ data }: HeatmapProps) {
    const numCols: number = Math.ceil(data.cells.length / 7);

    return (
        <div
            className={`grid gap-0.5 w-max grid-cols-[repeat(${numCols},_12px)] grid-flow-col grid-rows-[18px_repeat(7,_12px)]`}
        >
            {data.months.map((month, i) => {
                const isLastMonth: boolean = i === data.months.length - 1;
                const endCol: number = isLastMonth ? numCols + 1 : data.months[i + 1].startCol;
                return <HeatmapMonthLabel key={i} label={month.month} startCol={month.startCol} endCol={endCol} />;
            })}

            {data.cells.map((cell) => {
                return <HeatmapCell key={cell.date} {...cell} />;
            })}
        </div>
    );
}
