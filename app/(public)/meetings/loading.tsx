
export default function MeetingsLoading() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="animate-pulse space-y-5">
                <div className="h-8 w-64 rounded bg-slate-200" />

                <div className="grid gap-6 md:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="h-52 rounded-xl bg-slate-200"
                        />
                    ))}
                </div>
            </div>

            <p className="mt-6 text-sm text-slate-500">
                Loading meetings...
            </p>
        </div>
    );
}
