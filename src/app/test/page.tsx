export default function TestPage() {
    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
            <div className="flex flex-col gap-3 w-[640px] pb-32">
                <h1 className="text-neutral-100 font-medium">Generating cards</h1>
                <div className="-space-y-61">
                    {[50, 40, 30].map((zIndex, arrIndex) => {
                        return (
                            <div
                                key={zIndex}
                                className="w-full rounded-lg bg-neutral-900 border py-8 px-6 border-neutral-800 h-64 flex flex-col gap-2.5 justify-center relative shadow-lg"
                                style={{
                                    zIndex: zIndex,
                                }}
                            >
                                {arrIndex === 0 && (
                                    <>
                                        {[75, 100, 80, 55, 40].map((lengthPercentage) => {
                                            return (
                                                <div
                                                    key={lengthPercentage}
                                                    className="h-6 rounded-lg bg-neutral-800"
                                                    style={{ width: `${lengthPercentage}%` }}
                                                ></div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
