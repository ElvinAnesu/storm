"use client";
import ConfirmDialog from "@/app/componets/dialogs/confirmdialog";
import { TrashIcon, EyeOpenIcon,Pencil2Icon} from "@radix-ui/react-icons";
import { useState} from "react";
import { useRouter } from "next/navigation";


export default function MyTimetables(){ 

    const router  = useRouter();
    const [showdeletedialog, setShowdeletedialog] = useState(false);

    return( 
        <div className="flex flex-col p-8 gap-8">
            <h1 className="text-gray-500 text-xl">Saved Timetables</h1>
            <div className="w-full h-full">
                <table className="w-full">
                    <tbody>
                        <tr className="bg-blue-500 text-white border-gray-400">
                            <th className="border-x border-gray-400">TIMETABLE</th>
                            <th className="border-x border-gray-400">PERIOD</th>
                            <th className="border-x border-gray-400">CREATED AT</th>
                            <th className="border-x border-gray-400">ACTION</th>
                        </tr>
                    {
                        [1,2,3,4,5,6].map((index, i)=>( 
                            <tr className="border border-gray-400" key={i}>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">Data Structures and Algorithims</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">05/10/24 - 30/10/24</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">05/10/24</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <span className="flex w-full items-center justify-center gap-2">
                                        <button className="bg-blue-400 rounded p-1 text-white"
                                            onClick={()=>{router.push("/timetable/viewtimetable")}}>
                                            <EyeOpenIcon/>
                                        </button>
                                        <button className="bg-blue-400 rounded p-1 text-white" 
                                            onClick={()=>{router.push("/timetable/edittimetable")}}>
                                            <Pencil2Icon/>
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

            {showdeletedialog && <ConfirmDialog title={"Delete Timetable"} 
                message={"Are you sure you want to delete this timetable?"} 
                onCancel={()=>{setShowdeletedialog(false)}}/>}
        </div>
    )
}