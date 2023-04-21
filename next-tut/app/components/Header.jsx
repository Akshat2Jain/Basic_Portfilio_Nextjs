import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <Link href="/">Hey Akshat</Link>
            </div>
            <div className="links">
                <Link href="/">Courses</Link>
                <Link href="/code/repos">Repos</Link>
                <Link href="/about">About</Link>
                <Link href="/about/team">Team</Link>
                {/* <Link href="/about/contact">Contact Me</Link> */}
                
            </div>
        </div>

    </header>
  )
}

export default Header