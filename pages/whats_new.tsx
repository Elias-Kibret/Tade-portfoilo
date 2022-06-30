import React from 'react'
import image from '../public/Img/Hr.png'
import image_BG from '../public/Img/heroImage.png'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from 'react-responsive-carousel';
const whats_new = () => {
  return (
    <div className=' flex h-96 mt-40 z-0 bg-gray-200 p-20'  >
      <div className='Hero-section'>
          
      </div>
      <div className='w-3/4 h-3/4 relative ' >
         {/* <Carousel className='flex' showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
         <div>
              <Image src={image} width={300} height={200} alt="image"/>
              
          </div>
          <div>
          <Image src={image_BG} width={300} height={200} alt="image"/>
            
          </div>
          <div>
          <Image src={image} width={300} height={200} alt="image"/>
            
          </div>
         </Carousel> */}

         
      </div>
      <div >
           <h1>New!! (June 2022) My research, published in Structural Concrete (Link) is recognized as a Top Downloaded Article.</h1>
      </div>
       
    </div>
  )
}

export default whats_new