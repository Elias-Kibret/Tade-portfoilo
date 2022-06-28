import heroImage from '../public/Img/Hr.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-auto py-20 bg-slate-900 text-gray-400" >
<div className='w-3/5 mx-auto flex justify-between items-center'>
<div className='' >
      <h1 className="text-4xl py-4 px-6 rounded-lg border border-gray-50 ">
        I'm Tadessa G.Wakjira
      </h1>
      <p>
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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