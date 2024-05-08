import Link from "next/link";


export default function Sidebar(){ 
    return( 
        <div className="flex flex-col w-full h-full rounded shadow-lg bg-blue-500">
            <div className="w-full rounded-t bg-white flex items-center justify-center py-8">
                <img src="/stormlogo.png" alt="storm logo" />
            </div>
            <ul className="flex flex-col gap-8 py-8 px-8 text-white">
                <li>
                    <Link href="/timetable/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/timetable/createnew">Create New</Link>
                </li>
                <li>
                    <Link href="/timetable/mytimetables">My Timetables</Link>
                </li>
                <li>
                    <Link href="/timetable/departments">Departments</Link>
                </li>
                <li> 
                    <Link href="/timetable/options">Options</Link> 
                </li>
                <li>
                    <Link href="/">Exit</Link>
                </li>
            </ul>
        </div>
    )
}