import type { ReactNode } from "react";
import Link from "next/link";

export default function MeetingsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-8">
            <div>
                <div>
                    <Link href="/meetings" className="text-slate-700 p-4 b">All Meetings</Link>
                    <Link href="/meetings/current" className="text-slate-700 p-4">Current Sunday</Link>
                </div>
            </div>
            {children}
        </section>
    );
}

