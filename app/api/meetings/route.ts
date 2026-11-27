
import { NextRequest, NextResponse } from "next/server";
import { getMeetings, getMeetingsTotalCount } from "@/lib/meetings-db";

const ITEMS_PER_PAGE = 5;

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get("query") ?? "";
    const date = searchParams.get("date") ?? "";
    const requestedPage = Number(searchParams.get("page") ?? "1");
    const page = Number.isInteger(requestedPage) && requestedPage > 0
        ? requestedPage
        : 1;
    const [meetings, totalMeetings] = await Promise.all([
        getMeetings(query, page, date),
        getMeetingsTotalCount(query, date)
    ])

    const totalPages = Math.ceil(totalMeetings / ITEMS_PER_PAGE);

    return NextResponse.json({
        meetings,
        currentPage: page,
        totalPages,
        totalMeetings 
})
}
