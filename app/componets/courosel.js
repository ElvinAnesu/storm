"use clinet";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react"


export default function Courosel({children: slides, autoslide = false, autoslideInterval = 3000}){

  const [currentSlide, setCurrentSlide] = useState(0);


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0? slides.length - 1 : currentSlide - 1);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if(!autoslide)return;
    const slideInterval = setInterval(nextSlide, autoslideInterval);
    return ()=> clearInterval(slideInterval);
  },[currentSlide])

  return(
    <div className="overflow-hidden w-full">
      <div className="flex w-full transision-transform ease-out duration-500" 
        style={{transform: `translateX(-${currentSlide *100}%)`}}>
          {slides}
        </div>
      <div className="w-full absolute inset-0 flex items-center justify-between p-4">
        <button onClick={nextSlide}>
          <ChevronLeftIcon />
        </button>
        <button onClick={prevSlide}>
          <ChevronRightIcon />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div  className= {`transision-all w-2 h-2 bg-white rounded-full
              ${currentSlide === i ? "p-2" : "bg-opacity-50"}`}
              key={i}/>
          ))}
        </div>
      </div>
    </div>
  )
}