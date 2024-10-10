import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Frame from './components/Frame';
import ReactIframe from 'react-iframe';
import './components/Frame.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Frames</h1>
      <button>Click me</button>

      <ReactIframe url="https://www.google.com" className='frame' />
      <ReactIframe url="https://adir.dev" className='frame' />
      <ReactIframe url="https://github.com/Adir-SL"  className='frame'/>
      <ReactIframe url="https://adir.dev" className='frame' />
      
      {/* <Frame source="https://www.google.com" />
      <Frame source="https://adir.dev" />
      <Frame source="https://github.com/Adir-SL" />
      <Frame source="https://adir.dev" /> */}
    </>
  )
}

export default App
