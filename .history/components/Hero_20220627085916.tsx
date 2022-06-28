import heroImage from '../public/Img/Hr.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-auto py-20 bg-teal-50 text-gray-400 "  >
<div className='w-4/5 mx-auto flex justify-between items-center '>
<div className='w-1/2 rounded-lg border border-gray-50 px-10 py-8 ' >
      <h1 className="text-4xl font-bold text py-4  text-left">
        I'm Tadessa G.Wakjira
      </h1>
 <div>
 <h2 className='text-xl font-semibold py-6'>Civil Engineer</h2>
 <ul className='list-disc leading-7' >
  <li>Managed 8 projects with average budgets of $3 million.</li>
  <li>Completed all jobs on time and at least 10% under budget.</li>
  <li>Found three design flaws in ongoing projects</li>
  <li>Used AutoCAD and creative materials sourcing </li>
 </ul>
 </div>
    </div>
    <div  className='drop-shadow-lg'>
      <Image src={heroImage}  className="shadow" width={400} height={400}/>    
      </div>
</div>

</main>
  )
}

export default Hero