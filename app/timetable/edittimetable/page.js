"use client";
import { useRouter } from "next/navigation";



export default function EditTimetable(){ 

    const router = useRouter(); 

    return( 
        <div className="w-full h-full flex flex-col gap-8 p-8">
            <h1 className="text-xl text-gray-500">Update Timetable</h1>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <h1>Timetable title</h1>
                    <input className="flex w-full p-2 border border-gray-900 rounded"
                        placeholder="e.g Department of ICT end of year Exams"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Select department</h1>
                    <select className ="flex w-full p-2 border border-gray-900 rounded">
                        <option>Department of ICT</option>
                        <option>Department of Agriculture</option>
                        <option>Department of Tourism and hospitality</option>
                        <option>Department of Engineering</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Select Programme(s)</h1>
                    <select className ="flex w-full p-2 border border-gray-900 rounded">
                        <option>Department of ICT</option>
                        <option>Department of Agriculture</option>
                        <option>Department of Tourism and hospitality</option>
                        <option>Department of Engineering</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Select Courses</h1>
                    <select className ="flex w-full p-2 border border-gray-900 rounded">
                        <option>Department of ICT</option>
                        <option>Department of Agriculture</option>
                        <option>Department of Tourism and hospitality</option>
                        <option>Department of Engineering</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Exams Start Date</h1>
                    <select className ="flex w-full p-2 border border-gray-900 rounded">
                        <option>Department of ICT</option>
                        <option>Department of Agriculture</option>
                        <option>Department of Tourism and hospitality</option>
                        <option>Department of Engineering</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Exams End Date</h1>
                    <select className ="flex w-full p-2 border border-gray-900 rounded">
                        <option>Department of ICT</option>
                        <option>Department of Agriculture</option>
                        <option>Department of Tourism and hospitality</option>
                        <option>Department of Engineering</option>
                    </select>
                </div>
                <div>
                    <button className="py-2 px-4 flex rounded bg-blue-500 text-white"
                        onClick={()=>{router.push("/timetable/viewtimetable")}}>
                        Update Timetable
                    </button>
                </div>
            </div>
        </div>
    )
}