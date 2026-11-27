"use client";
import{ useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function MeetingSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('query', '1');
        if (value) {
            params.set('query', value);
        } else { 
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <div className="bg-white rounded-xl shadow-md px-6 py-4 space-y-6 m-3">
            <h2 className="text-xl font-semibold text-slate-900 m-2">Search Meetings</h2>
            <input
                type="search"
                aria-label="Search meetings"
                placeholder="Search by presiding, conducting, or meeting type..."
                className="border border-slate-300 text-black bg-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}