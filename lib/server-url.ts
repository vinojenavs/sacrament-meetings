
import { headers } from "next/headers";

export async function getServerBaseUrl(): Promise<string> {
    const requestHeaders = await headers();

    const host = requestHeaders.get("x-forwarded-host")
        ?? requestHeaders.get("host");

    if (!host) {
        throw new Error("Unable to determine request host.");
    }

    const protocol =
        requestHeaders.get("x-forwarded-proto") ?? "http";

    return `${protocol}://${host}`;
}
