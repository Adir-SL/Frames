import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Frame from './components/Frame';
import ReactIframe from 'react-iframe';
import './components/Frame.css'
import GitHubCalendar from 'react-github-calendar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <h1>Frames</h1>
        <GitHubCalendar username="adir-sl" className='frame' />
        <ReactIframe url="https://adir.dev" className='frame' />
        <ReactIframe url="https://adir.dev" className='frame' />
      </div>

      {/* <ReactIframe url="https://www.google.com" className='frame' />
      <ReactIframe url="https://adir.dev" className='frame' />
      <ReactIframe url="https://github.com/Adir-SL"  className='frame'/>
      <ReactIframe url="https://adir.dev" className='frame' /> */}

      {/* <Frame source="https://www.google.com" />
      <Frame source="https://adir.dev" />
      <Frame source="https://github.com/Adir-SL" />
      <Frame source="https://adir.dev" /> */}
    </>
  )
}

export default App
