import { useState } from 'react'
import ReactIframe from 'react-iframe';
import Header from "./Header";

function Frame(props) {

  return (
    <div className='frame item' flex-num={props.flexNum} draggable="true">
      {/* <Header></Header> */}
      <ReactIframe url={props.url}/>
    </div>
  )
}

export default Frame