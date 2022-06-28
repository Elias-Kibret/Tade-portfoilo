import Image from 'next/image'
import profileImage from '../public/Img/Tade.png'
import Link from 'next/link'
import linkedin from '../public/Img/Linkedin.svg'
import googleSchoolar from '../public/Img/googleScholara.svg'
import researchGate from '../public/Img/ResearchGate.svg'
import orcid from '../public/Img/orcid.svg'



const About = () => {
  return (
    <section className='bg-teal-50 flex justify-between items-center  p-24 mx-auto '>
        <div className='w-3/4'>
        <Image  src={profileImage} className="object-cover" width={550} height={500} alt="Tadessa G.wakjira"/>
        {/* Social media Links */}
        <div className='space-x-6 flex justify-center mt-6'>
            <Link href=""><a> <Image className="rounded-full transform hover:scale-110 transition ease-out duration-300" src={linkedin} width={40} height={40} alt="Linkedin"/></a></Link>
            <Link href=""><a><Image className='rounded-full transform hover:scale-110 transition ease-out duration-300' src={googleSchoolar} width={40} height={40} alt="Linkedin"/></a></Link>
            <Link href=""><a><Image className='rounded-full transform hover:scale-110 transition ease-out duration-300' src={researchGate} width={40} height={40} alt="Linkedin"/></a></Link>
            <Link href=""><a><Image className='rounded-full transform hover:scale-110 transition ease-out duration-300' src={orcid} width={40} height={40} alt="Linkedin"/></a></Link>
        </div>
        </div>
        <div className='w-4/5'>
           <p>
           I'm a dedicated scholar and researcher. My work has been recognized on numerous occasions. Some of the recognitions include the Emir (Prince) Gold Medal for Academic and Research Excellence, Dissertation Award, and the Graduate Research Award in Sciences in recognition of the research quality, significance, and presentation. I was also honored as a First Place Distinguished Graduate of Class 2022. [Learn more]

Currently, I am serving as an Editorial Board Member for Computational Methods in Structural Engineering, a section of the Journal of Frontiers in Built Environment.

My research interests include rehabilitation and strengthening of concrete structures, performance-based design of structures, seismic fragility assessment and resilience of structures, structural optimization, machine learning and its application in engineering, and XAI.

I am passionate and excited to work with active research groups and individuals. I welcome any kind of research collaboration.
           </p>
        </div>
    </section>
  )
}

export default About