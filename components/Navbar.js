import React from 'react'
import Image from "next/image"
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-evenly  items-center text-xs text-[13px] bg-black text-white'>
      <Image 
      className=' min-[400px]:hidden'
      src="./hamburger-menu.svg"
      width={24}
      height={24}
      
      />

      <Link href="/"> 
      <Image
      className='p-2 mb-1 min-w-[75px] min-h-[30px] ' 
      src="/logo.png"
      width={110}
      height={50}
      /> 
      </Link>
      <div className='hidden md:flex sm:justify-between md:space-x-6 lg:space-x-12 text-[13px]'>
        <p className=''>Alışveriş</p>
        <Link href="/products"><p>Ürünler</p></Link>
        <p>Profesyonel İşletmeler</p>
        <p>Dyson Demo Store</p>
        <p>Destek</p>
        <p>Newsroom</p>
      </div>
      
      <div className='flex flex-row items-center justify-center '>
        <input className='text-white text-sm .placeholder-white::placeholder ml-2 bg-black outline-none w-[150px] lg:w-[210px] border-b-[1px] border-white border-transparent focus:border-transparent  ' placeholder='Ara'></input>
        <Image 
        className='mr-2'
        src="./search-icon.svg"
        width={24}
        height={24}
        />
      </div>
      

      <Image
      className='mr-10 hidden sm:inline'
      src="/cart.svg"
      width={25}
      height={25}
      />
    </div>
  )
}
