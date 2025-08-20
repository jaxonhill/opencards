// ---------- Public API ----------

import { DAY_GRADE, IHeatmapCell } from "../components/heatmap";

/**
 * Generate heatmap data from Aug 19, 2024 to Aug 19, 2025 (inclusive).
 * - ~25% chance of a zero/blank day.
 * - Recommended cards vary day-to-day.
 * - Studied cards are sampled around recommended with some randomness.
 */
export function generateHeatmapData(): IHeatmapCell[] {
    const start = toLocalDate("2024-08-19");
    const end = toLocalDate("2025-08-19");

    const out: IHeatmapCell[] = [];
    for (const d of eachDayInclusive(start, end)) {
        // --- 1) Decide the day's recommended workload ---
        // Weekdays: slightly higher recs; weekends: lighter.
        const isWeekend = d.getDay() === 0 || d.getDay() === 6;
        const baseRec = isWeekend ? randInt(10, 30) : randInt(25, 60);

        // Add gentle variation (simulate backlog/algorithm noise)
        const numCardsRecommended = Math.max(0, baseRec + jitter(-5, 8));

        // --- 2) Decide studied amount with a blank-day chance ---
        const blankDay = Math.random() < 0.25; // ~25% totally blank
        const numCardsStudied = blankDay ? 0 : sampleStudied(numCardsRecommended);

        // --- 3) Grade it ---
        const dayGrade = computeDayGrade(numCardsStudied, numCardsRecommended);

        out.push({
            date: formatYYYYMMDD(d),
            numCardsStudied,
            numCardsRecommended,
            dayGrade,
        });
    }
    return out;
}

// ---------- Helpers ----------

// Map (studied/recommended) to a visual grade.
// Tune thresholds to taste.
function computeDayGrade(studied: number, recommended: number): DAY_GRADE {
    if (studied <= 0) return DAY_GRADE.NONE;

    const ratio = recommended > 0 ? studied / recommended : studied > 0 ? 1 : 0;

    if (ratio >= 1.0) return DAY_GRADE.PERFECT; // hit or exceeded target
    if (ratio >= 0.9) return DAY_GRADE.GREAT; // nearly there
    if (ratio >= 0.6) return DAY_GRADE.GOOD; // solid progress
    if (ratio >= 0.25) return DAY_GRADE.OK; // some progress
    return DAY_GRADE.NONE; // effectively blank
}

// Choose a “studied” number centered vaguely near recommended
// with some under/over-performance chance.
function sampleStudied(recommended: number): number {
    if (recommended <= 0) return 0;

    // Bias toward hitting near the target but allow misses/overflows.
    const r = Math.random();
    let studied: number;

    if (r < 0.15) {
        // underperform day
        studied = Math.max(1, Math.round(recommended * randFloat(0.1, 0.5)));
    } else if (r < 0.8) {
        // around target
        studied = Math.round(recommended * randFloat(0.75, 1.1));
    } else {
        // overachieve sometimes
        studied = Math.round(recommended * randFloat(1.1, 1.6));
    }

    // small randomness
    studied += jitter(-3, 5);
    return Math.max(0, studied);
}

// Date utilities
function toLocalDate(yyyyMmDd: string): Date {
    const [y, m, d] = yyyyMmDd.split("-").map(Number);
    return new Date(y, m - 1, d);
}

function eachDayInclusive(start: Date, end: Date): Date[] {
    const days: Date[] = [];
    const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const last = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    while (cur <= last) {
        days.push(new Date(cur));
        cur.setDate(cur.getDate() + 1);
    }
    return days;
}

function formatYYYYMMDD(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

// Random helpers
function randInt(min: number, max: number): number {
    return Math.floor(randFloat(min, max + 1));
}

function randFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function jitter(min: number, max: number): number {
    return randInt(min, max);
}
