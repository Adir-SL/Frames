import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactIframe from 'react-iframe';
import './Frames.css';
import Github from "./components/Github";


function App() {
  return (
    <>
      <div className="content">
        <h1>Frames</h1>
        <Github user="adir-sl" flexNum="100"></Github>
        <ReactIframe url="https://adir.dev" className='frame' data-swapy-slot="b" />
        <ReactIframe url="https://en.wikipedia.org/wiki/MacOS" className='frame' data-swapy-slot="c" />
        <ReactIframe url="https://adir.dev" className='frame' />
        <ReactIframe url="https://en.wikipedia.org/wiki/MacOS" className='frame' />
      </div>
    </>
  )
}

export default App