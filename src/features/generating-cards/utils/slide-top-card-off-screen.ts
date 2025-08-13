import { TOP_CARD_CSS_SELECTOR } from "../constants/common";
import { AnimateFn } from "../types/types";

const EXTRA_OFFSET: number = 32; // extra offset just to be safe and ensure card is fully off screen

export async function slideTopCardOffScreen(animate: AnimateFn, screenWidth: number, cardWidth: number): Promise<void> {
    // Quickly scale card slightly to create illusion of depth
    await animate(
        TOP_CARD_CSS_SELECTOR,
        {
            scale: 1.05,
        },
        {
            duration: 0.3,
        }
    );

    // Move card off screen
    await animate(
        TOP_CARD_CSS_SELECTOR,
        {
            translateX: screenWidth / 2 + cardWidth / 2 + EXTRA_OFFSET, // TODO: might be able to 1/2 screenWidth and cardWidth since they are already in middle of screen
        },
        {
            duration: 0.3,
            ease: "easeOut",
        }
    );
}
