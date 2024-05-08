"use client";
import Courosel from "./courosel";



export default function Slider(){

  const slides = [
    "/banner.jpg",
    "/micro.jpg",
    "/flask.jpg",
    "/llb.jpg",
    "/inini.jpg",
  ]

  return(
    <div>
      <Courosel autoslide={true} >
        {slides.map((slide, i) => (
          <img src={slide} alt="slid" key={i}/>
        ))}
      </Courosel>
    </div>
  )
}