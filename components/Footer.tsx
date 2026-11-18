"use client";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white text-center p-5 mt-10">
            <p className="text-sm">The Church of Jesus Christ of Latter Day Saints</p>
            <p className="text-sm">&copy; {year} Sacrament Meeting Planner. All rights reserved.</p>
        </footer>
    );
}