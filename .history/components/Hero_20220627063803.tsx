import heroImage from '../public/Img/heroImage.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-96 bg-teal-50 flex">

    <div className=' w-40'>
      <h1>
        This header
      </h1>
      <h2>
         This is second heared
      </h2>
    </div>
    <div wi>
      <Image src={heroImage} className="object" width={500} height={550}/>    </div>
</main>
  )
}

export default Hero