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

export enum DAY_GRADE {
    NONE = "bg-neutral-800",
    OK = "bg-emerald-900",
    GOOD = "bg-emerald-700",
    GREAT = "bg-emerald-400",
    PERFECT = "bg-emerald-100",
}

export type HeatmapCellData = {
    date: string;
    numCardsStudied: number;
    numCardsRecommended: number;
    dayGrade: DAY_GRADE;
};

export type HeatmapMonthData = {
    month: MONTHS;
    startCol: number;
};

export type HeatMapDisplayData = {
    months: HeatmapMonthData[];
    cells: HeatmapCellData[];
};
