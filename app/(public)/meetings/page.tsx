import { connection } from "next/server";
import MeetingSearch from "@/components/MeetingSearch";
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import { getServerBaseUrl } from "@/lib/server-url";
import { Pagination } from "@/components/Pagination";

type MeetingsResponse = {
    meetings: SacramentMeeting[];
    currentPage: number;
    totalPages: number;
    totalMeetings: number;
};

async function fetchMeetings(
    query: string = "",
    page: number = 1,
    date: string = "",
): Promise<MeetingsResponse> {
    const baseUrl = await getServerBaseUrl();
    const params = new URLSearchParams({
        query,
        page: String(page),
        date,
    });
    const response = await fetch(
        `${baseUrl}/api/meetings?${params.toString()}`,
        { cache: "no-store" }
    );
    if (!response.ok) {
        throw new Error("Failed to fetch meetings.");
    }
    return response.json() as Promise<MeetingsResponse>;
}

export default async function MeetingsPage(props: {
    searchParams: Promise<{
        query?: string;
        page?: string;
        date?: string;
    }>;
}) {
    await connection();
    const { query = "", page = "1", date = "" } = await props.searchParams;
    const currentPage = Math.max(1, Number(page) || 1);
    const data = await fetchMeetings(query, currentPage, date);
    const { meetings, totalPages } = data
    return (
        <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">All Meetings</h1>
                <p className="mt-2 text-slate-600">Browse previous sacrament meeting agendas.</p>
            </div>
            <MeetingSearch />
            {meetings.length === 0 ? (
                <p className="rounded-lg bg-white p-6 text-slate-600">
                    No meetings are currently available.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {meetings.map((meeting) => (
                        <MeetingCard
                            key={meeting.id}
                            meeting={meeting}
                        />
                    ))}
                </div>
            )}
            {totalPages > 1 && (
                <Pagination totalPages={totalPages}/>
            )}
        </div>
    );
}
