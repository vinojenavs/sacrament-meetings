import { SacramentMeeting } from "./types";

export const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-09-13',
        meetingType: 'Regular',
        presiding: 'Bishop Okpala',
        conducting: 'Pres. Ejigue',
        openingHymn: { number: 1, title: 'The morning beaks' },
        openingPrayer: 'Sis Franca',
        wardBusiness: [{ description: 'Sustaining Music Leader' }],
        stakeBusiness: false,
        sacramentHymn: { number: 191, title: 'Behold the Great Redeemer Die' },
        speakers: [
            { name: 'Bro Ben', topic: 'Faith in Jesus Christ', type: 'speaker' },
            { name: 'Sis Amylia', topic: 'Law of Chastity', type: 'speaker' }
        ],
        closingHymn: { number: 30, title: 'Come, Come Ye Saints' },
        closingPrayer: 'Bro Jerry'
    },
    {
        id: 2,
        date: '2026-09-20',
        meetingType: 'Regular',
        presiding: 'Bishop Okpala',
        conducting: 'Pres. Ijabor',
        openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
        openingPrayer: 'Sis Roli',
        wardBusiness: [{ description: 'Confirmation' }],
        stakeBusiness: false,
        sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
        speakers: [
            { name: 'Bro Zino', topic: 'Plan of Salvation', type: 'speaker' },
            { name: 'Sis Mine', topic: 'Book of Mormon', type: 'speaker' }
        ],
        closingHymn: { number: 230, title: 'Scatter Sunshine' },
        closingPrayer: 'Bro Curtis'
    },
    {
        id: 3,
        date: '2026-09-27',
        meetingType: 'Regular',
        presiding: 'Bishop Okpala',
        conducting: 'Pres. Ejigue',
        openingHymn: { number: 255, title: 'Carry On' },
        openingPrayer: 'Bro Osaro',
        wardBusiness: [{ description: 'Confirmation' }],
        stakeBusiness: false,
        sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
        speakers: [
            { name: 'Sis Anita', topic: 'Discipleship', type: 'speaker' },
            { name: 'Bro Efe', topic: 'Missionary Work', type: 'speaker' }
        ],
        closingHymn: { number: 220, title: 'Lord, I Would Follow Thee' },
        closingPrayer: 'Sis Karon'
    },
    {
        id: 4,
        date: '2026-10-11',
        meetingType: 'Regular',
        presiding: 'Bishop Frank',
        conducting: 'Pres. Ejigue',
        openingHymn: { number: 278, title: 'Thanks for the Sabbath School' },
        openingPrayer: 'Sis jennifer',
        wardBusiness: [{ description: 'Sustaining Ward Mission Leader' }],
        stakeBusiness: false,
        sacramentHymn: { number: 175, title: 'O God, Eternal Father' },
        speakers: [
            { name: 'Bro Ammon', topic: 'The restoration', type: 'speaker' },
            { name: 'Sis Damianson', topic: 'Relief Society', type: 'speaker' }
        ],
        closingHymn: { number: 239, title: 'Choose the Right' },
        closingPrayer: 'Bro Avino'
    },
    {
        id: 5,
        date: '2026-11-15',
        meetingType: 'Regular',
        presiding: 'Stake President',
        conducting: 'Bishop Okpala',
        announcement: ['Ward Temple Trip, Jan 10'],
        openingHymn: { number: 241, title: 'Count Your Blessings' },
        openingPrayer: 'Bro Newlife',
        wardBusiness: [{ description: 'Confirmation' }],
        stakeBusiness: true,
        sacramentHymn: { number: 187, title: 'God Loved Us, So He Sent His Son' },
        speakers: [
            { name: 'Bro Newlife', topic: 'The Iron Rod', type: 'speaker' },
            { name: 'Bro Monday', topic: 'The Good Shepherd', type: 'speaker' }
        ],
        closingHymn: { number: 223, title: 'Have I Done Any Good' },
        closingPrayer: 'Bro Jerry'
    },
    {
        id: 6,
        date: '2026-11-22',
        meetingType: 'Regular',
        presiding: 'Stake President',
        conducting: 'Bishop Okpala',
        announcement: ['Ward Temple Trip, Jan 10'],
        openingHymn: { number: 241, title: 'Count Your Blessings' },
        openingPrayer: 'Bro Newlife',
        wardBusiness: [{ description: 'Confirmation' }],
        stakeBusiness: true,
        sacramentHymn: { number: 187, title: 'God Loved Us, So He Sent His Son' },
        speakers: [
            { name: 'Bro Newlife', topic: 'The Iron Rod', type: 'speaker' },
            { name: 'Bro Monday', topic: 'The Good Shepherd', type: 'speaker' }
        ],
        closingHymn: { number: 223, title: 'Have I Done Any Good' },
        closingPrayer: 'Bro Jerry'
    }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}
