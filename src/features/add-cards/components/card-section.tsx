import { CardRenderer } from "@/features/cards/components/card-renderer";
import { CardVariant } from "@/features/cards/types/types";
import { Copy } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { forwardRef } from "react";

const CARD_VARIANTS: CardVariant[] = ["Front & Back", "Reveal Text"];

interface CardSectionProps {
    cardNumber: number;
    variant: CardVariant;
}

export function CardSection({ cardNumber, variant }: CardSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-neutral-100">{cardNumber}</h2>
                <div className="inline-flex gap-2 items-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <HeaderIconButton>
                                <Copy />
                            </HeaderIconButton>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Clone card</p>
                        </TooltipContent>
                    </Tooltip>
                    <Select defaultValue={CARD_VARIANTS[0]}>
                        <SelectTrigger className="w-32 h-8">
                            <SelectValue placeholder="Card Type" />
                        </SelectTrigger>
                        <SelectContent>
                            {CARD_VARIANTS.map((variant) => {
                                return (
                                    <SelectItem key={variant} value={variant}>
                                        {variant}
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full flex gap-4">
                <CardRenderer variant={variant} mode="edit" />
            </div>
        </section>
    );
}

type HeaderIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const HeaderIconButton = forwardRef<HTMLButtonElement, HeaderIconButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                {...props}
                className={
                    "inline-flex justify-center items-center px-2 py-2 transition-colors rounded-full " +
                    "text-neutral-400 [&>svg]:size-5 [&>svg]:shrink-0 hover:bg-neutral-900 hover:text-neutral-100 hover:cursor-pointer" +
                    (className ?? "")
                }
            >
                {children}
            </button>
        );
    }
);
