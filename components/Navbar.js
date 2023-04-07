import React from 'react'
import Image from "next/image"

export default function Navbar() {
  return (
    <div className='flex justify-between border-b-2 border-black'>
      <Image
      className='ml-11'
      src="/hamburger-menu.svg"
      width={30}
      height={30}
      />
      <Image
      className='p-2 mb-1 ' 
      src="/logo.png"
      width={157}
      height={60}
      />
      <Image
      className='mr-10'
      src="/cart.svg"
      width={30}
      height={30}
      />
    </div>
  )
}
