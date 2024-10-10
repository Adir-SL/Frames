import { useState } from 'react'
import './Frame.css'

function Frame(props) {

  return (
    <>
      <br />
      <br />
      <b>{props.source}</b>
      <br/>
      <iframe src={props.source} className='frame'
      // onLoad={(e) => { setInterval(function () { e.target.contentWindow.scrollTo(0, 1200) }, 300) }}
      ></iframe>
    </>
  )
}

export default Frame