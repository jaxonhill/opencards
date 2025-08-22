export type HeatmapCellData = {
    date: string;
    numCardsStudied: number;
    numCardsRecommended: number;
};

export type HeatmapMonthData = {
    month: MONTHS;
    startCol: number;
    endCol: number;
};

export type HeatMapDisplayData = {
    months: HeatmapMonthData[];
    cells: HeatmapCellData[];
};

export enum MONTHS {
    JAN = "Jan",
    FEB = "Feb",
    MAR = "Mar",
    APR = "Apr",
    MAY = "May",
    JUN = "Jun",
    JUL = "Jul",
    AUG = "Aug",
    SEP = "Sep",
    OCT = "Oct",
    NOV = "Nov",
    DEC = "Dec",
}
