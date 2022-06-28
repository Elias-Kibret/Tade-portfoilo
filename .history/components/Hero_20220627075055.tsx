import heroImage from '../public/Img/Hr.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-auto py-10 bg-slate-900">
<div className='w-3/5 mx-auto flex justify-between items-center'>
<div >
      <h1>
        This header
      </h1>
      <h2>
         This is second heared
      </h2>
    </div>
    <div  className='drop-shadow-lg'>
      <Image src={heroImage}  className="shadow" width={400} height={400}/>    
      </div>
</div>

</main>
  )
}

export default Hero