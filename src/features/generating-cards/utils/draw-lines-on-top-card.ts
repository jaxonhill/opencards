import { useAnimate, stagger } from "motion/react";
import {
    BETWEEN_LINE_STAGGER_TIME,
    LINE_FINAL_OPACITY,
    LINE_FINAL_X_SCALE,
    LINE_INITIAL_OPACITY,
    LINE_INITIAL_X_SCALE,
    LINES_CSS_SELECTOR,
    SINGLE_LINE_ANIMATION_TIME,
    START_INITIAL_ANIMATION_DELAY_TIME,
} from "../constants/drawing-lines";

type AnimateFn = ReturnType<typeof useAnimate>[1]; // the animate function

export async function drawLinesOnTopCard(animate: AnimateFn) {
    // Set initial lengths and opacity to lines
    await animate(
        LINES_CSS_SELECTOR,
        {
            scaleX: LINE_INITIAL_X_SCALE,
            opacity: LINE_INITIAL_OPACITY,
            transformOrigin: "left center",
        },
        { duration: START_INITIAL_ANIMATION_DELAY_TIME }
    );

    // Perform line drawing animation with stagger
    await animate(
        LINES_CSS_SELECTOR,
        {
            scaleX: LINE_FINAL_X_SCALE,
            opacity: LINE_FINAL_OPACITY,
        },
        {
            ease: "easeOut",
            duration: SINGLE_LINE_ANIMATION_TIME,
            delay: stagger(BETWEEN_LINE_STAGGER_TIME, {
                startDelay: START_INITIAL_ANIMATION_DELAY_TIME,
                ease: "linear",
            }),
        }
    );
}
