import { cn } from "@/lib/utils";
import { DashboardCardWrapper } from "./dashboard-card-wrapper";
import { Button } from "@/components/button";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

type StartReviewCardProps = {
    numCardsToReview: number;
    numStreakDays: number;
} & Omit<React.ComponentProps<typeof DashboardCardWrapper>, "children">;

export function StartReviewCard({ numCardsToReview, numStreakDays, className, ...props }: StartReviewCardProps) {
    return (
        <DashboardCardWrapper {...props} className={cn("flex flex-col justify-between", className)}>
            <div className="flex flex-col">
                <h2 className="text-neutral-400 text-lg font-normal">
                    <strong className="text-neutral-100 font-medium">{numCardsToReview}</strong> cards to review
                </h2>
                {numStreakDays && <em className="text-emerald-400 not-italic text-sm">{numStreakDays} day streak!</em>}
            </div>
            <Button as="a" href="/review">
                <ChartNoAxesColumnIncreasing className="stroke-3" />
                Start Review
            </Button>
        </DashboardCardWrapper>
    );
}
