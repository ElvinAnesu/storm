


export default function ConfirmDialog({title,message,onCancel}){ 
    return( 
        <div className="w-full h-full absolute bg-black opacity-90 flex flex-col items-center justify-center top-0 left-0">
            <div className="flex flex-col gap-4 p-4 rounded shadow-lg border-gray-500 bg-white">
                <div className="bg-white border-b w-full flex items-center justify-center p-4">
                    <h1 className="text-xl font-semibold">{title}</h1>
                </div>
                <div className="w-full p-4 flex items-center justify-center">
                    <p>{message}</p>
                </div>
                <div className="w-full flex items-center justify-between px-8">
                    <button className="px-4 py-2 bg-blue-500 rounded text-white">Confirm</button>
                    <button className="px-4 py-2 bg-red-500 rounded text-white" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}