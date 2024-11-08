import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main">
            <img src='./logo.jpg'/>
        <div className='name'>

          <h1 > Students Islamic Organisation of india</h1>
          <h1 style={{textAlign:"center"}}>Bhimavaram Unit</h1>
          </div>
          <h3 style={{fontFamily:"revert-layer"}}> In sha Allah we are in devloping..... </h3>
          <h1 style={{fontFamily:"sans-serif"}}>Fa inna ma'al usri yusra inna ma'al usri yusra</h1>
          <p>Surah Ash-Sharah : 94</p>
        <button className='btn'>
         <a href='./sio bvrm unit file (2).pdf' target='_blank'>Click Here to view the brocher  </a>

        </button> 
        <button className='btn'>
         <a href='https://www.instagram.com/faffiru_ilallah/ ' target='_blank'>Fafiru ilallah   </a>

        </button> 
          </div>

    </>
  )
}

export default App
