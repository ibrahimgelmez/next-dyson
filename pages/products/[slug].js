import Product from '@/components/Product'
import React, { useState } from 'react'
import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ImageSlider from '@/components/ImageSlider';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticPaths(){
  const res = await client.getEntries({ content_type:"eCommerce" })

  const paths = res.items.map(item =>{
    return {
      params: { slug:item.fields.slug }
    }
  } )

  return {
    paths,
    fallback:true
  }
}

export async function getStaticProps( { params } ){
  const { items } = await client.getEntries({
    content_type:"eCommerce",
    'fields.slug':params.slug  //yani tüm entryler içerisinde sadece slugu bizim tıkladığımız sluga eşit olanı çek demek.
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return{
    props:{ product: items[0] },
    revalidate: 1

  }
}

export default function ProductDetails({ product }) {
  const [images , setImages] = useState([])
  console.log("builded succesfully")

  const {description , title , rating} = product.fields

  const urlMap = product.fields.productImages.map((image)=> 
   `https:${image.fields.file.url}` 
  )


  return (  
    <div className='flex '>
      <div className='ml-28'>
        <ImageSlider product={product} urlMap={urlMap}/>
      </div>
      <div className='mt-24 ml-10 max-w-[750px]'>
        <h1 className='mb-2 font-bold text-2xl'>{title}</h1>
        <h3>{`${rating === 5 ? "⭐⭐⭐⭐⭐":"⭐⭐⭐⭐"} (${rating})`}</h3>
        <p className='py-20'>{documentToReactComponents(description)}</p>
        <button>Add Cart</button>
      </div>
    </div> 
  )
}
