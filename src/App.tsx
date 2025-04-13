import { useState } from 'react'
import './App.css'
import Cnav from './components/customNav'
import Sec1 from './components/sec1'
import Sec2 from './components/sec2'
import Sec3 from './components/sec3'
import Sec5 from './components/sec5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <nav className="nav"><Cnav/></nav>
        <div className="chiziq"></div>
        <section className='S1'><Sec1/></section>
        <section className='S2'><Sec2/></section>
        <section className='S3'><Sec3/></section>
        <section className='S4'><img src="assets/Features.png" alt="" /></section>
        <section className='S5'><Sec5/></section>
      </div>
    </>
  )
}

export default App
