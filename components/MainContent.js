import React from 'react'
import Image from 'next/image'

export default function MainContent() {
  return (
    <div className='flex flex-col justify-center  '>
      <div className='relative flex justify-center '>
        <Image
        className=''
        src="/bg-1.png"
        width={2300}
        height={1100}
        />
        <div className='absolute m-0  sm:text-sm md:text-base xl:text-xl 2xl:text-2xl top-[24px] left-[16px] sm:top-[70px] sm:left-[70px] md:top-[100px] lg:top-[120px]  xl:top-[120px]  xl:left-[80px] 2xl:top-[160px] '>
        <p className='text-[9px] p-[1px] sm:py-[1px] sm:px-2 lg:text-[12px]   lg:py-[0px] lg:px-2  bg-white text-blue-500 ring-0 tracking-wide font-semibold  border-[1.5px]  rounded-sm border-blue-500'>Hediye serisi</p>
        </div>
        <div className='absolute top-[50px] left-[16px] max-w-[200px] sm:max-w-xl sm:top-[120px] sm:left-[70px] lg:top-[180px] lg:left-[70px] md:top-[140px] xl:top-[190px]  xl:left-[80px] 2xl:top-[220px]'>
          <p className='text-xs sm:text-l md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px]  font-light tracking-wide' >Yeni özel seri Dyson teknolojisi.</p>
          <p className='text-xs sm:text-l md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] font-light tracking-wide'>Şimdi Vinca mavisi ve Rosé renklerinde.</p>
        </div>
          
        <div className='absolute  top-[106px] left-[16px]  sm:top-[200px] sm:left-[70px] md:top-[230px] lg:top-[270px] lg:left-[70px] xl:top-[320px] xl:left-[80px] 2xl:top-[340px]'>
          <button className='bg-[#79b928] px-2 py-2  text-black text-[8px] sm:p-3  sm:text-xs md:text-sm    xl:text-lg  tracking-wide'>Satın Al</button>
        </div>
        
      </div>

      <div className='relative flex justify-center'>
        <Image
        src="/bg-2.png"
        width={2300}
        height={1100}
        />
        <div className='absolute text-sm font-semibold top-[16px] left-[32px] md:text-[22px] lg:top-[36px] lg:text-[24px] lg:left-[120px] xl:text-[30px] xl:top-[40px] 2xl:text-[40px] 2xl:left-[120px] 2xl:top-[100px] '>
          <p>dyson <span className='text-blue-500'>v15</span> <span className='text-gray-400'>detect</span></p>
        </div>

        <div className='absolute text-sm max-w-[120px] top-[40px] left-[32px] sm:max-w-[280px] md:text-[24px] md:top-[70px] lg:top-[78px] lg:leading-[26px] lg:left-[120px]  lg:text-[29px] xl:max-w-2xl  xl:text-[32px] xl:top-[90px] 2xl:left-[120px] 2xl:text-[44px] 2xl:leading-[36px] 2xl:top-[170px]'>
          <p>Evcil hayvanlı evler için tasarlandı.</p>
        </div>
        <div className='absolute top-[84px] left-[32px] md:top-[124px] lg:left-[120px] lg:top-[146px] xl:top-[146px] 2xl:top-[280px] 2xl:left-[120px]'>
          <button className='bg-gray-900 text-white p-1 text-xs md:p-3 lg:p-3 xl:p-4 2xl:px-6 2xl:text-xl 2xl:py-5'>Keşfet</button>
        </div>


      </div>
      
    </div>
  )
}
