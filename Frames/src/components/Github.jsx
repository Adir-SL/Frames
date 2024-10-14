import { useState } from 'react'
import './Github.css'

function Github(props) {

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

export default Github