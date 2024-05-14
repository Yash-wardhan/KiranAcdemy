import { useState } from 'react'
import './App.css'
import ColorBg from './ColorBg'

export default function App() {
    return (
    <>
    <ColorBg />
    {/* <h1>Hello Vite + React!</h1>
    <Hoc cmp={Counter}></Hoc>
    <HocGreen cmp={Counter}></HocGreen> */}
    </>
  )
}
function Hoc(props){
  return <h2 style={{backgroundColor:'red',width:200,padding:'20px'}}><props.cmp></props.cmp></h2>
}
function HocGreen(props){
  return <h2 style={{backgroundColor:'green',width:200,padding:'20px'}}><props.cmp></props.cmp></h2>
}

export function Counter(){
  const [count,setCount] = useState(0)
  return(
    <div >
      <ColorBg />
      {/* {count}
      <div>

      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
      </div> */}
    </div>
  )
}
