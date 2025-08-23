import { DashboardCardWrapper } from "./dashboard-card-wrapper";

type AchievementsCardProps = Omit<React.ComponentProps<typeof DashboardCardWrapper>, "children">;

export function AchievementsCard({ ...props }: AchievementsCardProps) {
    return <DashboardCardWrapper {...props}>Achievements!</DashboardCardWrapper>;
}
