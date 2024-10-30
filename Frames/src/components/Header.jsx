import { useState } from 'react'

function Header(props) {

    return (
        <header>
            <button onClick={(e) => e.target.parentNode.parentNode.setAttribute("flex-num", Number(e.target.parentNode.parentNode.getAttribute("flex-num")) + 100)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <button onClick={(e) => e.target.parentNode.parentNode.setAttribute("flex-num", e.target.parentNode.parentNode.getAttribute("flex-num") - 100)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </header>
    )
}

export default Header