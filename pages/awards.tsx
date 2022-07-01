import Image from 'next/image'
import Slider from 'react-slick'
import award1 from '../public/Img/awards/award-1.png'
import award2 from '../public/Img/awards/award-2.png'
import award3 from '../public/Img/awards/award-3.png'
import award4 from '../public/Img/awards/award-4.png'
import award5 from '../public/Img/awards/award-5.png'

const awards = () => {
    const image=[award1,award2,award3,award4,award5]
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div className='bg-sky-900 h-aut0 w-full relative py-2'>
         <div className=" w-9/12  absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-300 mx-auto h-1">
             <h1 className="text-center mt-6 text-7xl font-extrabold text-amber-300 drop-shadow-2xl">A w a r d s</h1>
        
         </div>  
         <div className="mt-60">
            <div className=' mx-auto'>
               
               <div className='w-4/5 mx-auto pb-10 '>
               <Slider {...settings}>
                {
                    
                    image.map((item, key)=>(
                        
                            <Image src={item} className='' width={250} height={170}/>
                        

                    ))
                }
                </Slider>
               </div>
               </div>
         </div>
    </div>
  )
}

export default awards