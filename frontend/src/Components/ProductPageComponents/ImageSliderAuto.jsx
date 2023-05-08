import React, { useEffect, useState } from 'react'
import {BiRightArrow,BiLeftArrow} from "react-icons/bi"
import {GoPrimitiveDot} from "react-icons/go"
const ImageSliderAuto = ({images}) => {
  const [current,setCurrent] = useState(0);
  const goNext = ()=>{
    const isLastSlide = current == images.length-1;
    const newIndex = isLastSlide ? 0 : current+1;
    setCurrent(newIndex);
  }

  const goPrevious = ()=>{
    const isFirstSlide = current == 0;
    const newIndex = isFirstSlide ? images.length-1 : current-1;
    setCurrent(newIndex);
  }

const goTOImage = (index)=>{
   setCurrent(index);
}


   
    



useEffect(()=>{
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), 4000);
    return () => clearTimeout(id); 
},[current])

  return (
      <div style={{height:"100%",position:"relative"}}>
        <div style={{position:"absolute",top:"50%",transform:"translate(0,-50%)",left:"32px",zIndex:"1",cursor:"pointer"}} onClick={()=>goPrevious()}><BiLeftArrow size={"40px"}/></div>
        <div style={{position:"absolute",top:"50%",transform:"translate(0,-50%)",right:"32px",zIndex:"1",cursor:"pointer"}} onClick={()=>goNext()}><BiRightArrow size={"40px"}/></div>
        <div style={{backgroundImage:`url(${images[current]})`, width:"100%",height:"100%", backgroundPosition:"center",backgroundSize:"cover" }}>  </div>
        <div style={{display:"flex" ,justifyContent:"center"}}>
          {
            images.map((_,index)=>{
              return <div style={{margin:"0 3px" , cursor: "pointer", fontSize: "20px"}} onClick={()=>goTOImage(index)} key={index}><GoPrimitiveDot/></div>
            })
          }
        </div>
      </div>
  )
}

export default ImageSliderAuto