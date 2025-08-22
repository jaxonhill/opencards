import { HeatmapDisplayData } from "../types/types";
import { Heatmap } from "./heatmap";

interface HeatmapCardProps {
    data: HeatmapDisplayData;
}

export function HeatmapCard({ data }: HeatmapCardProps) {
    return (
        <section className="flex flex-col gap-6 rounded-lg bg-neutral-900 border border-neutral-800 p-8 overflow-y-hidden w-2xl">
            <h2 className="text-neutral-400 text-lg">
                <strong className="text-neutral-100 font-medium">1,207</strong> cards studied this year
            </h2>
            <div className="w-full overflow-x-auto">
                <Heatmap data={data} />
            </div>
        </section>
    );
}
