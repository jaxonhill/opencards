import { HeatmapCard } from "@/features/home-dashboard/components/heatmap-card";
import { HeatmapDisplayData } from "@/features/heatmap/types/types";
import { generateHeatmapData } from "@/features/heatmap/utils/_temp-gen-heatmap-data";
import { transformIntoDisplayData } from "@/features/heatmap/utils/transform-into-display-data";
import { StartReviewCard } from "@/features/home-dashboard/components/start-review-card";
import { DecksCard } from "@/features/home-dashboard/components/decks-card";
import { AchievementsCard } from "@/features/home-dashboard/components/achievements-card";

export default function Home() {
    const heatmapDataRaw = generateHeatmapData();
    const heatmapDisplayData: HeatmapDisplayData = transformIntoDisplayData(heatmapDataRaw);

    return (
        <main className="grid gap-3 grid-cols-12 grid-rows-2 pl-[184px] pr-48 pt-28">
            <StartReviewCard className="text-white col-span-5" />
            <HeatmapCard className="col-span-7" data={heatmapDisplayData} />
            <DecksCard className="col-span-7" />
            <AchievementsCard className="col-span-5" />
        </main>
    );
}
