import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-center bg-gray-100">
        <div className="shadow rounded-lg border-gray-200 p-8 gap-8 flex flex-col items-center justify-center bg-white">
            <h1 className="text-3xl w-full text-center font-semibold text-blue-500">Welcome to STORM timetable generating system</h1>
            <div className="flex">
              <img src="/stormlogo.png" alt="storm logo" />
            </div>
            <Link href="/timetable/dashboard" className="px-8 py-2 bg-blue-500 rounded text-white">Proceed</Link>
        </div>
    </main>
  )
}
