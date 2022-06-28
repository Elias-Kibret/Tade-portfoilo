import heroImage from '../public/Img/Hr.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-auto py-20 bg-slate-900 text-gray-400" >
<div className='w-3/5 mx-auto flex justify-between items-center'>
<div className='border border-gray-100 w-3/4' >
      <h1 className="">
        I'm Tadessa G.Wakjira
      </h1>
      <h2>
         
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