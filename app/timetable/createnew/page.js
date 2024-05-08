"use client";
import { useRouter } from "next/navigation";
import * as database from "../../database/database";
import {useState, useEffect} from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import ProgressBar from "@/app/componets/progressbar";
import * as global from "../../global/global";
import GeneratedTimetableDialog from "@/app/componets/dialogs/generatedtimetable";


export default function CreateNew(){ 

    const router = useRouter(); 
    const [selecteddepartments, setSelecteddepartments] = useState([]);
    const [isloading, setIsloading]= useState(false);
    const [counter,setCounter] = useState(0);
    const [timetabletitle, setTimetabletitle] = useState();
    const [examstartdate, setExamstartdate] = useState();
    const [examenddate, setExamenddate] = useState();
    const [showtimetable, setShowtimetable] = useState(false)
        

    const selectDepartment = (department) => { 
        setSelecteddepartments((selecteddepartments) => [...selecteddepartments, department]);
    }
    const removeDepartment = (department) => { 
        setSelecteddepartments((selecteddepartments) => selecteddepartments.filter((_dep)=> _dep !== department));
    }
    useEffect(()=>{ 
        console.log("isloading is:", isloading)
        console.log("counter is:", counter)
        if(counter > 10){
            setCounter(0)
            setIsloading(false)
            setShowtimetable(true)
        }
        const intervalId = setInterval(()=>{
            isloading && setCounter(counter + 2);
        }, 2000)
        return () => { 
            clearInterval(intervalId);
        }
      
    },[counter]);

    const generateTimetable = () => { 
        setIsloading(true);
        setCounter(1);
    }

    return( 
        <div className="w-full h-full flex flex-col gap-8 p-8">
            <h1 className="text-xl text-gray-500">Create new timetable</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1>Timetable title</h1>
                    <input className="flex w-full p-2 border border-gray-900 rounded max-w-96"
                        placeholder="e.g Department of ICT end of year Exams"
                        onChange={(e)=>setTimetabletitle(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Select departments with exams</h1>
                    <div className="flex">
                        {selecteddepartments.map((_selectdpt, i)=>( 
                            <span className="flex p-1 bg-gray-400 rounded items-center gap-2 mr-2" key={i}>
                                {_selectdpt}
                                <button className="p-1 bg-white rounded"
                                    onClick={()=>{removeDepartment(_selectdpt)}}>
                                    <Cross2Icon />
                                </button>
                            </span>
                        ))}
                    </div>
                    <select className ="flex w-full p-2 border border-gray-900 rounded max-w-96"
                        onChange={(e)=>{selectDepartment(e.target.value)}}
                        >
                        {database.departments.map((_department,i)=>( 
                            <option key={i} value={_department.name}>{_department.name}</option>
                        ))}
                    </select>
                </div>
            
                <div className="flex flex-col gap-2">
                    <h1>Exams Start Date</h1>
                    <input className ="flex w-full p-2 border border-gray-900 rounded max-w-96" 
                        type="date" onChange={(e)=> setExamstartdate(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Exams End Date</h1>
                    <input className ="flex w-full p-2 border border-gray-900 rounded max-w-96" 
                        type="date" onChange={(e)=> setExamstartdate(e.target.value)}/>
                </div>
                <div>
                    <button className="py-2 px-4 flex rounded bg-blue-500 text-white"
                        onClick={generateTimetable}>
                        Generate Timetable
                    </button>
                </div>
            </div>
        
        
            {isloading && <ProgressBar counter={counter}/>}
            {showtimetable && <GeneratedTimetableDialog  
                title={timetabletitle} 
                onRegenerate={()=>setShowtimetable(false)}
                departments={selecteddepartments}/>}
        </div>
    )
}