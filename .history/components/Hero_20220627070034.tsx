import heroImage from '../public/Img/heroImage.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-96 bg-teal-50 flex justify-between">
<div className='w-4/5 mx-auto'>
<div >
      <h1>
        This header
      </h1>
      <h2>
         This is second heared
      </h2>
    </div>
    <div >
      <Image src={heroImage} className="object" width={400} height={400}/>    
      </div>
</div>

</main>
  )
}

export default Hero