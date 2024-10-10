import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frame from './components/Frame';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Frames</h1>
      <button>Click me</button>
      
      <Frame source="https://www.google.com" />
      <Frame source="https://adir.dev" />
      <Frame source="https://github.com/Adir-SL" />
      <Frame source="https://adir.dev" />
    </>
  )
}

export default App
