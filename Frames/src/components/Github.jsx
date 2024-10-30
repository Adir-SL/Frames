import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar';
import Header from "./Header";

function Github(props) {

  return (
    <div className='github-frame'>
      <Header></Header>
      <GitHubCalendar username={props.user} className='frame' data-swapy-slot="a" />
    </div>
  )
}

export default Github