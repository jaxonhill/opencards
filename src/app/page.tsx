import { HeatMapDisplayData } from "@/features/heatmap/types/types";
import { generateHeatmapData } from "@/features/heatmap/utils/_temp-gen-heatmap-data";
import { transformIntoDisplayData } from "@/features/heatmap/utils/transform-into-display-data";

export default function Home() {
    const heatmapDataRaw = generateHeatmapData();
    const displayData: HeatMapDisplayData = transformIntoDisplayData(heatmapDataRaw);
    console.log(displayData);

    return <div className="pl-[19rem]"></div>;
}
