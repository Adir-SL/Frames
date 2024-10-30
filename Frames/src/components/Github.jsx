import { useState } from 'react'
import './Github.css'

function Github(props) {

  return (
    <>
      <GitHubCalendar username={props.user} className='frame' data-swapy-slot="a" />
    </>
  )
}

export default Github