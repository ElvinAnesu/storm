import Header from "../componets/header";
import Sidebar from "../componets/sidebar";


export default function Layout({children}){ 
    return( 
        <main className="flex min-h-screen flex-col bg-white  bg-gray-100">
        <Header />
        <div className="w-full h-full md:grid md:grid-cols-5 p-8">
             <Sidebar />
             <div className="flex flex-col gap-8 w-full h-full md:col-span-4 p-8">
                {children}
             </div>
        </div>
     </main>
    )
}