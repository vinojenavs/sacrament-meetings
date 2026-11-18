'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    function createPageURL(page: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(page));
        return `${pathname}?${params.toString()}`;
    }

    return (
        <nav aria-label="Pagination" className="flex items-center justify-center gap-4 mt-10">
            {currentPage > 1 && (
                <Link href={createPageURL(currentPage - 1)} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-400">
                    <span aria-hidden="true">&larr;</span>
                    Previous
                </Link>
            )}
            <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
                <Link href={createPageURL(currentPage + 1)} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Next
                    <span aria-hidden="true">&rarr;</span>
                </Link>
            )}
        </nav>
    );
}