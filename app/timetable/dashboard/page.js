import DashboarCard from "@/app/componets/dashboardcard";





export default function Dashboard(){ 
    return( 
        <div className="flex flex-col gap-8 p-8">
            <div className="flex md:grid md:grid-cols-5 gap-4">
                <DashboarCard title={"Create New"} text={"Generate timetable"} url={"/timetable/createnew"}/>
                <DashboarCard title={"Departments"} text={"View department"} url={"/timetable/departments"}/>
                <DashboarCard title={"My Timetables"} text={"View saved timetables"} url={"/timetable/mytimetables"}/>
                <DashboarCard title={"Manage Courses"} text={"courses and course codes"} url={"#"}/>
                <DashboarCard title={"Exam Settings"} text={"View exam options"} url={"#"}/>
            </div>
            <h1 className="text-gray-500 text-2xl font-semibold">Recently Created Timetable</h1>
            <div className="flex items-center justify-center p-4 w-full h-full">
                <h1>No timetable has been created recently</h1>
            </div>
        </div>
    )
}