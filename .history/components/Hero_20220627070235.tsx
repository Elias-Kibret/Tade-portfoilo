import heroImage from '../public/Img/heroImage.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-auto pt-14 bg-teal-50 ">
<div className='w-3/5 mx-auto flex justify-between'>
<div >
      <h1>
        This header
      </h1>
      <h2>
         This is second heared
      </h2>
    </div>
    <div >
      <Image src={heroImage} className="object rounded-full" width={400} height={400}/>    
      </div>
</div>

</main>
  )
}

export default Hero