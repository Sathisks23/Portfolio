import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {

  const linkstyle ={}

  return (
    <div className='flex justify-evenly gap-40 items-center border-b-2 p-2 py-4'>
     {/* <Link href='/'> <Image src='/logos.png' width={200} height={150} alt='Sathish Diaries'/></Link> */}
     <Link href='/'>Sathish Diaries</Link>
     <div className='flex  items-center gap-5'>
        {/* <Link href='#about'>About</Link> */}
        <Link  href='/blog'>Blog</Link>
        <Link href='/contact'>Contact</Link>
        {/* <Link href='/projects'>Project</Link> */}
        {/* <Link href='/services'>Services</Link> */}
     </div>
    </div>
  )
}

export default Header
