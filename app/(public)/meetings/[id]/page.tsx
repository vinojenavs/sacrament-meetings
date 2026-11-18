
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { getServerBaseUrl } from "@/lib/server-url";
import PrintButton from "@/components/PrintButton";

interface MeetingPageProps {
    params: Promise<{
        id: string;
    }>;
}

async function MeetingContent({
    params,
}: MeetingPageProps) {
    const { id } = await params;

    if (!/^[1-9]\d*$/.test(id)) {
        notFound();
    }

    const baseUrl = await getServerBaseUrl();

    const response = await fetch(
        `${baseUrl}/api/meetings/${id}`,
        { cache: "no-store" }
    );

    if (response.status === 404) {
        notFound();
    }

    if (!response.ok) {
        throw new Error("Failed to fetch meeting.");
    }

    const meeting =
        (await response.json()) as SacramentMeeting;

    return <MeetingDetail meeting={meeting} />;
}

export default function MeetingPage({
    params,
}: MeetingPageProps) {
    return (
        <div className="mx-auto max-w-4xl px-6 py-10">
            <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
                <Link
                    href="/meetings"
                    className="text-sm font-semibold text-yellow-700 hover:underline"
                >
                    ← Back to Meetings
                </Link>

                <PrintButton />
            </div>

            <Suspense
                fallback={
                    <div className="py-10 text-center text-gray-500">
                        Loading meeting details...
                    </div>
                }
            >
                <MeetingContent params={params} />
            </Suspense>
        </div>
    );
}
