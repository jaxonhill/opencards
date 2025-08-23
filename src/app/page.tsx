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
        <div className="pl-[19rem]">
            <main className="grid gap-3 grid-flow-col grid-cols-12">
                <StartReviewCard />
                <HeatmapCard data={heatmapDisplayData} />
                <DecksCard />
                <AchievementsCard />
            </main>
        </div>
    );
}
