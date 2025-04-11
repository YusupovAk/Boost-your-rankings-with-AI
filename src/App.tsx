import { useState } from 'react'
import './App.css'
import Cnav from './components/customNav'
import Sec1 from './components/sec1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <nav className="nav"><Cnav/></nav>
        <div className="chiziq"></div>
        <section className='S1'><Sec1/></section>
        <section className='S2'>www</section>
      </div>
    </>
  )
}

export default App
