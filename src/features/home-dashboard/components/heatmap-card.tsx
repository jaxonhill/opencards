import { HeatmapDisplayData } from "@/features/heatmap/types/types";
import { Heatmap } from "@/features/heatmap/components/heatmap";
import { DashboardCardWrapper } from "./dashboard-card-wrapper";

interface HeatmapCardProps {
    data: HeatmapDisplayData;
}

export function HeatmapCard({ data }: HeatmapCardProps) {
    return (
        <DashboardCardWrapper className="flex flex-col gap-6">
            <h2 className="text-neutral-400 text-lg">
                <strong className="text-neutral-100 font-medium">1,207</strong> cards studied this year
            </h2>
            <div className="w-full overflow-x-auto">
                <Heatmap data={data} />
            </div>
        </DashboardCardWrapper>
    );
}
