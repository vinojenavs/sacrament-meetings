import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

interface SacramentMeetingProps {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: SacramentMeetingProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-xl font-bold text-slate-900">{meeting.meetingType}</h2>
            <p className="text-gray-600 mt-2">{meeting.date}</p>
            <Link href={`/meetings/${meeting.id}`} className="inline-block mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Meeting Details</Link>
        </div>
    );
}