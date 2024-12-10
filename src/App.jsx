import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState('')
   
  function func1(v){
    setData(v.target.value);
  }
  return (
    <>
     <h1>You entered as <h2 style={{color:'red'}}>{data}</h2></h1>
     <input type="text" onChange={func1} />
    </>
  )
}

export default App
