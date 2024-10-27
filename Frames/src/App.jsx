import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactIframe from 'react-iframe';
import './Frame.css'
import GitHubCalendar from 'react-github-calendar';

import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import Draggable, { DraggableCore } from 'react-draggable';
let Draggable = require('react-draggable');
let DraggableCore = Draggable.DraggableCore;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <h1>Frames</h1>
        <Draggable>
          <GitHubCalendar username="adir-sl" className='frame' />
        </Draggable>
        <Draggable>
          <ReactIframe url="https://adir.dev" className='frame' />
        </Draggable>
        <ReactIframe url="https://en.wikipedia.org/wiki/MacOS" className='frame' />
        <ReactIframe url="https://adir.dev" className='frame' />
        <ReactIframe url="https://en.wikipedia.org/wiki/MacOS" className='frame' />
      </div>
    </>
  )
}

export default App