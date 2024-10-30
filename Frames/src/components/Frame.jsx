import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar';
import Header from "./Header";

function Frame(props) {

  return (
    <div className='frame' flex-num={props.flexNum}>
      <Header></Header>
      <ReactIframe url={url} className='frame'/>
    </div>
  )
}

export default Frame