import React from 'react'
import Image from "next/image"

export default function Footer() {
  return (
    <div className=''>
      <div className='flex flex-row  items-center justify-between h-36 text-3xl  bg-[#333] text-white '>
        <p className='ml-20'>Bize ulaşmak çok kolay.</p>

        <div className='flex flex-row items-center pl-[130px]  '>
          <Image
          className='mr-2'
          src="./phone-icon.svg"
          width={50}
          height={50}
          />
          <div className='ml-2'>
            <p className='text-lg'>Bizi arayabilirsiniz.</p>
            <p className='text-lg'>0850 *** ** **</p>
          </div>
        </div>

        <div className='flex flex-row items-center pr-[150px] mr-24'>
          <Image 
          src="./email-icon.svg"
          width={50}
          height={50}
          />
          <p className='text-lg ml-2'>Mail atın.</p>
        </div>
        
      </div>

      <div className='text-white h-[360px] bg-black'>

          <div className='flex flex-row justify-between  mx-48  '>

            <div className='border-b-2 w-2/4 border-gray-600 mt-12 mr-2  '>
              <p>Türkiye</p>
              <p className='underline'>Dil ve bölge tercihinizi değiştirin.</p>
            </div>
            
            <div className='border-b-2 w-1/4 border-gray-600 mt-12 ml-2 mr-2'>
              <p>Kariyer</p>
            </div>

            <div className='border-b-2 w-1/4 text-gray-500 border-gray-600 mt-12 pb-4 leading-7'>
              <p>Güvenlik ve Gizlilik</p>
              <p>Kullanım Koşulları</p>
              <p>İşlem Rehberi</p>
              <p>Çerez Politikası</p>
              <p>James Dyson Vakfı</p>
            </div>
          </div>
          <div className='text-center text-sm mt-16'>
            © Dyson(Ibrahim Gelmez Clone) 2023
          </div>
      </div>
      
    </div>
  )
}





