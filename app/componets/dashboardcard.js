import Link from "next/link";


export default function DashboarCard({title, text, url}){ 
    return( 
        <div className="flex flex-col rounded shadow-lg">
            <div className="w-full rounded-t bg-blue-500 text-white flex items-center justify-center p-4">
                <h1>{title}</h1>
            </div>
            <div  className="bg-white w-full h-full py-8 px-4 flex-col justify-center rounded-b">
                <Link href={url} className="text-sm hover:underline">{text}</Link>
            </div>
        </div>
    )
}