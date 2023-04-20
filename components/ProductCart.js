import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCart({recipe}) {
  return (
    <div className=' flex flex-col items-center justify-center border-2 border-gray-500 rounded-b-md  h-[600px] '>
      <Image 
        src={`https:${recipe.fields.productImage.fields.file.url}`}
        width={280}
        height={560}
      />
      <h1 className='font-bold text-center mb-4 w-[280px]'>{recipe.fields.title}</h1>
      <div className='flex mt-4'>
        <Link href={`/products/${recipe.fields.slug}`}><button className='bg-green-400 px-5 py-3 mr-5 rounded-sm'>See Details</button></Link>
        <button className='bg-orange-400 px-5 py-3 ml-5 rounded-sm'>Add Cart</button>
      </div>
    </div>
  )
}
