"use client";
import * as database from "../../database/database";
import {useState, useEffect} from "react";
import { Cross2Icon } from "@radix-ui/react-icons";



export default function CreateDepartment(){ 

    const [depname, setDepname] = useState();
    const [program, setProgram] = useState();
    const [coursename, setCoursename] = useState();
    const [coursecode, setCoursecode] = useState();
    const [courses, setCourses] = useState([]);
    const [programs, setPrograms] = useState([]);

  

    

    const addProgram = () => {
        if(program){
            setPrograms((programs)=>[...programs,program]);
        }
        console.log(programs)
    }
    const addCourse = () => {
        if(coursename && coursecode){
            setCourses((courses)=> [...courses, {id:1, name: coursename,coursecode:coursecode}])
        }
    }
    const createDepartment = () => { 
        database.departments.push({
            id: 5,
            name: depname,
            programs:6
        })
        console.log("done");
    }

    useEffect(()=>{ 

    }, [])
    return( 
        <div className="w-full h-full flex flex-col p-8 gap-8">
            <h1 className="text-xl text-gray-500 font-semibold">Create a new department</h1>
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2 max-w-96">
                    <h1 className="text-gray-500 font-semibold">Department Name:</h1>
                    <input className="flex p-2 rounded border border-gray-500" 
                        placeholder="eg. Engineering and ICT"
                        onChange={(e)=>{setDepname(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-gray-500 font-semibold">Add  Programs</h1>
                    <div className="flex ">
                       {programs && programs.map((_program,i)=>( 
                         <span className="rounded text-sm bg-gray-300 shadow-lg p-1 flex items-center gap-2 mr-2" key={i}>
                            {_program}
                            <span className="p-1 bg-white rounded"><Cross2Icon /></span>
                        </span>
                       ))}
                    </div>
                    <input className="flex p-2 rounded border border-gray-500 max-w-96" 
                        placeholder="eg. Engineering and ICT"
                        onChange={(e)=>{setProgram(e.target.value)}}/>
                    <button className="px-4 py-2 rounded bg-blue-500 text-white max-w-96"
                        onClick={addProgram}>
                            Add Program
                    </button>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-gray-500 font-semibold">Add  Courses</h1>
                    <div className="flex">
                        {courses && courses.map((_course,i)=>( 
                            <span className="rounded text-sm bg-gray-300 shadow-lg p-1 flex items-center gap-2 mr-2" key={i}>
                                {_course.name +" " + _course.coursecode}
                                <span className="p-1 bg-white rounded"><Cross2Icon /></span>
                            </span>
                        ))}
                    </div>
                    <div className="w-full flex items-center gap-4 bg-white">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="text-sm">Course Name</h1>
                            <input className="flex p-2 rounded border border-gray-500" 
                                placeholder="eg. Data Structures and  Algorithms"
                                onChange={(e)=>{setCoursename(e.target.value)}}/>
                        </div>
                        <div className="w-full flex flex-col gap-2 ">
                            <h1 className="text-sm">Course Code</h1>
                            <input className="flex p-2 rounded border border-gray-500" 
                                placeholder="eg. CUPE405"
                                onChange={(e)=>{setCoursecode(e.target.value)}}/>
                        </div>
                    </div>
                    <button className="px-4 py-2 rounded bg-blue-500 text-white"
                        onClick={addCourse}>
                            Add Course
                    </button>
                </div>
                <div className="flex">
                    <button className="px-4 py-2 rounded bg-blue-500 text-white"
                        onClick={createDepartment}>
                            Add Department
                    </button>
                </div>
            </div>
        </div>
    )
}