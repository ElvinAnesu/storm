"use client";
import ConfirmDialog from "@/app/componets/dialogs/confirmdialog";
import { TrashIcon, EyeOpenIcon, PlusIcon } from "@radix-ui/react-icons";
import {useState} from "react";
import { useRouter } from "next/navigation";
import * as database from "../../database/database"

export default function Departments(){ 

    const router = useRouter();
    const [showdeletedialog, setShowdeletedialog] = useState(false);

    return( 
        <div className="flex flex-col p-8 gap-8">
            <h1 className="text-gray-500 text-xl">Departments</h1>
            <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full flex items-center justify-end">
                    <button className="rounded bg-blue-500 flex items-center justify-center gap-2 py-2 px-4 text-white"
                        onClick={()=>{router.push("/timetable/createdepartment")}}>
                        <PlusIcon />Add New
                    </button>
                </div>
                <table className="w-full">
                    <tbody>
                    <tr className="bg-blue-500 text-white border-gray-400">
                            <th className="border-x border-gray-400">Department</th>
                            <th className="border-x border-gray-400">Programmes</th>
                            <th className="border-x border-gray-400">ACTION</th>
                        </tr>
                    {
                        database.departments.map((department, i)=>( 
                            <tr className="border border-gray-400" key={i}>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">{department.name}</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">view programmes({department.programs})</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <span className="flex w-full items-center justify-center gap-2">
                                        <button className="bg-blue-400 rounded p-1 text-white"
                                            onClick={()=>{router.push("/timetable/viewdepartment")}}>
                                            <EyeOpenIcon />
                                        </button>
                                        <button className="bg-blue-400 rounded p-1 text-white"
                                            onClick={()=>{setShowdeletedialog(true)}}> 
                                            <TrashIcon />
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        ))
                    }
                  </tbody>
                </table>
            </div>

            {showdeletedialog && <ConfirmDialog title={"Delete Department"}
                                    message={"Are you sure you want to delete this entire department ?"}
                                    onCancel={()=>{setShowdeletedialog(false)}} />}
        </div>
    )
}