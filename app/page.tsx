import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            <section className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <p className="font-semibold uppercase tracking-widest text-yellow-700">Welcome</p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-4xl">Welcome to Sacrament Meetings</h1>
                    <p className="mt-5 leading-7 text-slate-600">View meeting schedules, review sacrament agendas and stay informed about upcoming ward meetings.</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/meetings" className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">View All Meetings</Link>
                        <Link href="/meetings/current" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-white">Current Sunday</Link>
                    </div>
                </div>
                <div className="overflow-hidden rounded-2xl">
                    <Image src="/ugboroke.png" alt="Ugboroke meeting house" width={800} height={600} priority className="h-auto w-full"/>
                </div>
            </section>
        </div>
    );
}

