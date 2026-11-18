"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/meetings", label: "Meetings" }
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-5" aria-label="Main navigation">
            {links.map((link) => {
                const active = 
                link.href === "/"
                ? pathname ==="/"
                : pathname.startsWith("/meetings");
                return (
                    <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${active
                            ? "text-yellow-300 border-b-2 border-yellow-300"
                            : "text-white hover:text-yellow-200"
                        }`}
                        aria-current={active ? "page" : undefined}>{link.label}</Link>
                );
            })}
        </nav>
    );
}
