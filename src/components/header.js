import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-4 p-2 justify-around items-center border-b-2 h-14'>
        <Link href='/'>Sathish Diaries</Link>
        <div className='flex gap-4 justify-evenly'>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Header
