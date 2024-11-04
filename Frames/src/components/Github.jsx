import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar';
import Header from "./Header";

function Github(props) {

  return (
    <div className='github-frame item' flex-num={props.flexNum} draggable="true">
      <Header></Header>
      <GitHubCalendar username={props.user} className='frame' data-swapy-slot="a" />
    </div>
  )
}

export default Github