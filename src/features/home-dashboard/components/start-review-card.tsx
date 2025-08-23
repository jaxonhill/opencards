import { DashboardCardWrapper } from "./dashboard-card-wrapper";

type StartReviewCardProps = Omit<React.ComponentProps<typeof DashboardCardWrapper>, "children">;

export function StartReviewCard({ ...props }: StartReviewCardProps) {
    return <DashboardCardWrapper {...props}>Hello!</DashboardCardWrapper>;
}
