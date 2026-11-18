import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <h1 className="text-3xl font-bold text-blue-900">Sacrament Meeting Detail</h1>
            <p className="text-slate-600">Date: {meeting.date}</p>
            <p className="text-slate-600">Meeting Type: {meeting.meetingType}</p>
            <p className="text-slate-600">Presiding: {meeting.presiding}</p>
            <p className="text-slate-600">Conducting: {meeting.conducting}</p>
            <h2 className="text-xl font-semibold text-slate-900">Meeting Agenda</h2>
            <p className="text-slate-600">Opening Hymn: {meeting.openingHymn.number}, {meeting.openingHymn.title}</p>
            <p className="text-slate-600">Opening Prayer: {meeting.openingPrayer}</p>
            <p className="text-slate-600">Ward Business</p>
            <ul>
                {Array.isArray(meeting.wardBusiness) &&
                    meeting.wardBusiness.map((business, index) => (
                        <li key={index} className="text-slate-600">
                            {business.description}
                        </li>
                    ))
                }
            </ul>
            <p className="text-slate-600">Stake Business: {meeting.stakeBusiness}</p>
            <p className="text-slate-600">Sacrament Hymn: {meeting.sacramentHymn.number}, {meeting.sacramentHymn.title}</p>
            <h3 className="text-xl font-semibold text-slate-900">Speakers</h3>
            <ul>
                {meeting.speakers.map(((speaker, index) => <li key={index} className="text-slate-600">Speaker: {speaker.name}, Topic: {speaker.topic}, Type: {speaker.type}</li>))}
            </ul>
            <p className="text-slate-600">Closing Hymn: {meeting.closingHymn.number}, {meeting.closingHymn.title}</p>
            <p className="text-slate-600">Closing Prayer: {meeting.closingPrayer}</p>
        </div>
    );
}
