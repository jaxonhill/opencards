interface ActionsBarProps {
    children: React.ReactNode;
}

export function ActionsBar({ children }: ActionsBarProps) {
    return <header className="inline-flex w-full gap-3 items-center justify-end py-8 sticky">{children}</header>;
}
