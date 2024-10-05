import React from 'react'
import {useEffect, useState,useRef} from 'react';

const Stopwatch = () => {
const [time , setTime]=useState(0);
  useEffect(() => {
    timeInc();
    return ()=> clearInterval(timeHandler.current)
  }, [])
  
  let timeHandler=useRef()



  const timeInc=()=>{
    timeHandler.current=setInterval(()=>{
      setTime(prevTime => prevTime+1)
    },1000)
  }
  return (
    <>
        <h1>{time}</h1>
        <button
        onClick={()=>setTime(0)}
         className='btn btn-info' >Restart</button>
        <button
        onClick={()=>clearInterval(timeHandler.current)}
         className='btn btn-danger'>Pause</button>

    </>
  )
}

export default Stopwatch
