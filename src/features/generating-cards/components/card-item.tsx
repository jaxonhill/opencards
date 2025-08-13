import { SkeletonLines } from "./skeleton-lines";

interface CardItemProps {
    zIndex: number;
    isSkeletonVisible: boolean;
}

export function CardItem({ zIndex, isSkeletonVisible }: CardItemProps) {
    return (
        <li
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 h-64 flex flex-col justify-center gap-2.5 relative shadow-lg py-8 px-6"
            style={{ zIndex: zIndex }}
        >
            {isSkeletonVisible && <SkeletonLines />}
        </li>
    );
}
