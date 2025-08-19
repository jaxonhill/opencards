interface CardFrameProps {
    children: React.ReactNode;
}

export function CardFrame({ children }: CardFrameProps) {
    return (
        <div className="rounded-lg w-full flex justify-center items-center text-base bg-neutral-900 border border-neutral-800 h-80">
            {children}
        </div>
    );
}
