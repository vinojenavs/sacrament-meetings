"use client"

import NavLinks from "./NavLinks";
import { Suspense } from "react";

const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}).format(new Date());

export default function Header() {
    return (
        <header className="bg-blue-900 text-white px-6 py-5">
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-4xl">Sacrament Meetings</h1>
            <h1 className="text-2xl font-bold">Ugboroke Ward</h1>
            <p className="text-sm text-blue-100">{today}</p>
            <Suspense
                fallback={
                    <nav className="flex gap-5" aria-label="Main navigation">
                        <span>Loading navigation...</span>
                    </nav>
                }
            >
                <NavLinks />
            </Suspense>
        </header>
    );
}