import { useAnimate } from "motion/react";

export type AnimateFn = ReturnType<typeof useAnimate>[1]; // the animate function
