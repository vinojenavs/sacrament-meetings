
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import { getServerBaseUrl } from "@/lib/server-url";

async function fetchMeetings(): Promise<SacramentMeeting[]> {
    const baseUrl = await getServerBaseUrl();

    const response = await fetch(
        `${baseUrl}/api/meetings`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch meetings.");
    }

    return response.json() as Promise<SacramentMeeting[]>;
}

export default async function MeetingsPage() {
    const meetings = await fetchMeetings();

    return (
        <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">All Meetings</h1>
                <p className="mt-2 text-slate-600">Browse previous sacrament meeting agendas.</p>
            </div>
            {meetings.length === 0 ? (
                <p className="rounded-lg bg-white p-6 text-slate-600">No meetings are currently available.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {meetings.map((meeting) => (
                        <MeetingCard key={meeting.id} meeting={meeting}/>
                    ))}
                </div>
            )}
        </div>
    );
}
