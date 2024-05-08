"use client";
import * as global from "../../global/global";
import { useRouter } from "next/router";


export default function ViewTimetable(){


    return( 
        <div className="flex flex-col p-8 gap-8 items-center justify-center">
            <h1 className="text-gray-500 text-xl"></h1>
            <div className="w-full h-full">
                <table className="w-full">
                    <tbody>
                        <tr className="bg-blue-500 text-white border-gray-400">
                            <th className="border-x border-gray-400">MODULE CODE</th>
                            <th className="border-x border-gray-400">MODULE TITLE</th>
                            <th className="border-x border-gray-400">DATE</th>
                            <th className="border-x border-gray-400">TIME</th>
                        </tr>
                    {
                        [1,2,3,4,5,6].map((index, i)=>( 
                            <tr className="border border-gray-400" key={i}>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">CUMT105</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">Data Structures and Algorithims</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">05/10/24</h1>
                                </td>
                                <td className="border-x border-gray-400">
                                    <h1 className="w-full text-center">08:00 - 10:00</h1>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="flex w-full items-center justify-end">
                <button className="py-2 px-4 flex rounded bg-blue-500 text-white">
                    Download Timetable
                </button>
            </div>
        </div>
    )
}