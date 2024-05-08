


export default function GeneratedTimetableDialog({title,onRegenerate, departments}){ 
    return( 
        <div className="w-full h-full absolute bg-white flex flex-col items-center justify-center top-0 left-0">
            <div className="flex flex-col p-8 gap-8 items-center justify-center w-full">
                <h1 className="text-gray-500 text-xl">{title}</h1>
                <div className="w-full h-full">
                    <table className="w-full">
                        <tbody>
                            {departments.map((_dep,i) => ( 
                                <>
                                    <tr className="bg-blue-700 text-white border-gray-400">
                                            <th className="border-x border-gray-500 border-b" colspan="4">{_dep}</th>
                                        </tr>
                                        <tr className="bg-blue-500 text-white border-gray-400">
                                            <th className="border-x border-gray-400">MODULE CODE</th>
                                            <th className="border-x border-gray-400">MODULE TITLE</th>
                                            <th className="border-x border-gray-400">DATE</th>
                                            <th className="border-x border-gray-400">TIME</th>
                                        </tr>
                                    {
                                        [1,2,3,].map((index, i)=>( 
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
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                    <button className="py-2 px-4 flex rounded bg-blue-500 text-white"
                        onClick={onRegenerate}>
                        Regenerate
                    </button>
                    <button className="py-2 px-4 flex rounded bg-blue-500 text-white"
                        onClick={()=>{}}>
                        Download Timetable
                    </button>
                </div>
            </div>
        </div>
    )
}