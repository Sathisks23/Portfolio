import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {

  const linkstyle ={}

  return (
    <div className='flex justify-evenly gap-40 items-center border-b-2'>
     {/* <Link href='/'> <Image src='/logos.png' width={200} height={150} alt='Sathish Diaries'/></Link> */}
     <Link href='/'>Sathish Diaries</Link>
     <div className='flex  items-center gap-5'>
        <Link href='/About'>About</Link>
        <Link href='/Blog'>Blog</Link>
        <Link href='/Contact'>Contact</Link>
        <Link href='/Project'>Project</Link>
     </div>
    </div>
  )
}

export default Header
