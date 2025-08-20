import { DAY_GRADE, HeatmapCell } from "@/features/heatmap/components/heatmap";
import { generateHeatmapData } from "@/features/heatmap/utils/utils";

const heatmapDataRaw = generateHeatmapData();
const heatmapData = heatmapDataRaw.splice(5);

export default function Home() {
    console.log(heatmapData);
    return (
        <div className="pl-[19rem]">
            {heatmapData.map((cell) => {
                return <HeatmapCell key={cell.date} dayGrade={cell.dayGrade} />;
            })}
        </div>
    );
}
