import React from 'react'
import { createClient } from 'contentful'
import Image from 'next/image'
import ProductCart from '@/components/ProductCart'

export const getStaticProps = async () => {
  const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type:"eCommerce" })

  return {
    props:{
      recipes:res.items
    }
  }
}

export default function Products( {recipes} ) {
  console.log(recipes)
  return (
  
  <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center py-12 px-36'>
    {recipes.map((recipe,i)=>(
      <ProductCart recipe={recipe} key={i} />
    ))}
    
  </div>
  
    
  )
}
