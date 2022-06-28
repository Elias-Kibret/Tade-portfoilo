import heroImage from '../public/Img/Hr.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-auto py-20 bg-slate-900 text-gray-400" >
<div className='w-3/5 mx-auto flex justify-between items-center'>
<div className='w-1/2 rounded-lg border border-gray-50 ' >
      <h1 className="text-4xl py-4 px-6 ">
        I'm Tadessa G.Wakjira
      </h1>
      <p className="my-10">
      when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. I
      t has survived not only five centuries,It was popularised in the 1960s with the release of 
      </p>
    </div>
    <div  className='drop-shadow-lg'>
      <Image src={heroImage}  className="shadow" width={400} height={400}/>    
      </div>
</div>

</main>
  )
}

export default Hero