import { DashboardCardWrapper } from "./dashboard-card-wrapper";

type DecksCardProps = Omit<React.ComponentProps<typeof DashboardCardWrapper>, "children">;

export function DecksCard({ ...props }: DecksCardProps) {
    return <DashboardCardWrapper {...props}>Decks!</DashboardCardWrapper>;
}
