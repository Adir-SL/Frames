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
      <br />
      <Frame source="https://www.google.com/" />
    </>
  )
}

export default App
