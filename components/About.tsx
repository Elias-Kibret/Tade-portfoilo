import Image from 'next/image'
import profileImage from '../public/Img/Tade.png'
import Link from 'next/link'
import linkedin from '../public/Img/Linkedin.svg'
import googleSchoolar from '../public/Img/googleScholara.svg'
import researchGate from '../public/Img/ResearchGate.svg'
import orcid from '../public/Img/orcid.svg'



const About = () => {
  return (
    <section className=' bg-gray-50 flex justify-between items-end  py-16 px-16 mx-auto shadow-3xl'>
        <div className=' hero-image -mt-10 ' >
      
        

        </div>
        <div className='w-3/5 bg-teal-50 p-10 mt-20 border-4 border-gray-200 rounded-lg shadow-2xl'>
           <p>
           I'm a dedicated scholar and researcher. My work has been recognized on numerous occasions. Some of the recognitions include the Emir (Prince) Gold Medal for Academic and Research Excellence, Dissertation Award, and the Graduate Research Award in Sciences in recognition of the research quality, significance, and presentation. I was also honored as a First Place Distinguished Graduate of Class 2022. [Learn more]

Currently, I am serving as an Editorial Board Member for Computational Methods in Structural Engineering, a section of the Journal of Frontiers in Built Environment.

My research interests include rehabilitation and strengthening of concrete structures, performance-based design of structures, seismic fragility assessment and resilience of structures, structural optimization, machine learning and its application in engineering, and XAI.

I am passionate and excited to work with active research groups and individuals. I welcome any kind of research collaboration.
           </p>
           <div className='grid grid-cols-3 items-center mt-14 gap-y-4'>
            <Link href="" ><a className='flex items-center hover-state'> <Image className="rounded-full spaces-x-4 transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={25} height={25} alt="Linkedin"/> <span className="px-2 text-blue-900">Linkedin</span>  </a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full ' src={googleSchoolar} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">GoogleScholar</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full  transform hover:scale-110 transition ease-out duration-400' src={researchGate} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">ResearchGate</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'> <Image className="rounded-full transform hover:scale-110 transition ease-out duration-400" src={linkedin} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">Amazon </span> </a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={googleSchoolar} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">ResearcherID</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={researchGate} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">ResearchGate</span></a></Link>
            <Link href=""><a className='flex items-center hover-state'><Image className='rounded-full transform hover:scale-110 transition ease-out duration-400' src={orcid} width={25} height={25} alt="Linkedin"/><span className="px-2 text-blue-900">Kudos</span></a></Link>

           </div>
        </div>
    </section>
  )
}

export default About