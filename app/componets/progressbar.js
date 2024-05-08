

export default function ProgressBar({counter}){ 
    return( 
        <div className="w-full h-full absolute bg-black opacity-90 flex flex-col items-center justify-center top-0 left-0">
            <div className="flex flex-col gap-4 p-4 rounded shadow-lg border-gray-500 bg-white">
                <progress value={counter} max={10} className="text-white">50%</progress>
            </div>
        </div>
    )
}