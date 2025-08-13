"use client";

import { motion, stagger } from "motion/react";

const SKELETON_LINE_WIDTH_PERCENTAGES = [75, 100, 80, 55, 40] as const;

const SINGLE_LINE_ANIMATION_TIME: number = 0.3; // seconds
const BETWEEN_LINE_STAGGER_TIME: number = 0.1; // seconds
const START_INITIAL_ANIMATION_DELAY_TIME: number = 0; // seconds

const LINE_INITIAL_X_SCALE: number = 0.4; // percent in decimal form
const LINE_INITIAL_OPACITY: number = 0; // percent in decimal form
const LINE_FINAL_X_SCALE: number = 1; // percent in decimal form
const LINE_FINAL_OPACITY: number = 1; // percent in decimal form

export function SkeletonLines() {
    const calcDelay = stagger(BETWEEN_LINE_STAGGER_TIME, {
        startDelay: START_INITIAL_ANIMATION_DELAY_TIME,
        ease: "linear",
    });

    return (
        <motion.ul className="flex flex-col gap-2.5 list-none m-0 p-0">
            {SKELETON_LINE_WIDTH_PERCENTAGES.map((pct, index) => {
                return (
                    <motion.li
                        key={pct}
                        className="h-6 rounded-lg bg-neutral-800"
                        style={{ width: `${pct}%` }}
                        initial={{
                            scaleX: LINE_INITIAL_X_SCALE,
                            opacity: LINE_INITIAL_OPACITY,
                            transformOrigin: "left center",
                        }}
                        animate={{
                            scaleX: LINE_FINAL_X_SCALE,
                            opacity: LINE_FINAL_OPACITY,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: SINGLE_LINE_ANIMATION_TIME,
                            delay: calcDelay(index, SKELETON_LINE_WIDTH_PERCENTAGES.length),
                        }}
                    />
                );
            })}
        </motion.ul>
    );
}
