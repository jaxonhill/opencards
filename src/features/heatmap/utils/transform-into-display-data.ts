import { HeatmapCellData, HeatMapDisplayData, MONTHS } from "../types/types";

const months: MONTHS[] = Object.values(MONTHS);

export function transformIntoDisplayData(rawHeatmapCellData: HeatmapCellData[]): HeatMapDisplayData {
    let currentColumn: number = 1;
    let currentMonthIndex: number = -1;
    let finalData: HeatMapDisplayData = { months: [], cells: [] };

    for (let i = 0; i < rawHeatmapCellData.length; i++) {
        const isNewColumn: boolean = (i + 1) % 7 === 0;
        if (isNewColumn) currentColumn++;

        const cellMonthIndex: number = new Date(rawHeatmapCellData[i].date).getMonth();
        const isNewMonth: boolean = cellMonthIndex !== currentMonthIndex;
        if (isNewMonth) {
            currentMonthIndex = cellMonthIndex;
            finalData.months.push({ month: months[currentMonthIndex], startCol: currentColumn });
        }

        finalData.cells.push(rawHeatmapCellData[i]);
    }

    return finalData;
}
