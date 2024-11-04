// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ReactIframe from 'react-iframe';
// import './Frames.css';
// import Github from "./components/Github";
// import Frame from "./components/Frame";


// function App() {

//   return (
//     <>
//       <div className="content list">
//         <h1 flex-num="0">Frames</h1>
//         <Github user="adir-sl" flexNum="100"></Github>
//         <Frame url="https://adir.dev" flexNum="200"></Frame>
//         <Frame url="https://en.wikipedia.org/wiki/MacOS" flexNum="300"></Frame>
//         {/* <ReactIframe url="https://adir.dev" className='frame' data-swapy-slot="b" flex-num="200" />
//         <ReactIframe url="https://en.wikipedia.org/wiki/MacOS" className='frame' data-swapy-slot="c" flex-num="300" />
//         <ReactIframe url="https://adir.dev" className='frame' flex-num="400" />
//         <ReactIframe url="https://en.wikipedia.org/wiki/MacOS" className='frame' flex-num="500" /> */}
//       </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css'
import './Frames.css';
import Github from "./components/Github";
import Frame from "./components/Frame";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, content: <Github user="adir-sl" flexNum="100"></Github> },
    { id: 2, content: <Frame url="https://adir.dev" flexNum="200"></Frame> },
    { id: 3, content: <Frame url="https://en.wikipedia.org/wiki/MacOS" flexNum="300"></Frame> },
    { id: 4, content: <Frame url="https://adir.dev" flexNum="200"></Frame> },
  ]);
  const [draggingId, setDraggingId] = useState(null);

  const handleDragStart = (id) => {
    setDraggingId(id);
  };

  const handleDragOver = (event, id) => {
    event.preventDefault();

    if (id === draggingId) return;

    const draggingIndex = items.findIndex(item => item.id === draggingId);
    const hoverIndex = items.findIndex(item => item.id === id);

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggingIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);

    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
  };

  const handleTouchStart = (id) => {
    setDraggingId(id);
  };

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevents scrolling on mobile during drag
    const touch = event.touches[0];
    const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);

    if (elementUnderTouch) {
      const hoverItem = elementUnderTouch.closest('.item');
      if (hoverItem && hoverItem.dataset.id) {
        handleDragOver(event, parseInt(hoverItem.dataset.id));
      }
    }
  };

  const handleTouchEnd = () => {
    setDraggingId(null);
  };

  return (
    <>
      <h1 flex-num="0">Frames</h1>
      <div className="content list">
        {items.map(item => (
          <div
            key={item.id}
            className="item"
            data-id={item.id}
            draggable
            onDragStart={() => handleDragStart(item.id)}
            onDragOver={(event) => handleDragOver(event, item.id)}
            onDragEnd={handleDragEnd}
            onTouchStart={() => handleTouchStart(item.id)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
