import Image from 'next/image'
import profileImage from '../public/Img/heroImage.png'
import Link from 'next/link'
import linkedin from '../public/Img/Linkedin.svg'
const About = () => {
  return (
    <section className='bg-teal-50 flex justify-between items-center  p-24 mx-auto '>
        <div className='w-3/4'>
        <Image  src={profileImage} width={500} height={500} alt="Tadessa G.wakjira"/>
        {/* Social media Links */}
        <div className='space-x-4'>
            <Link href=""><a> <Image src={linkedin} width={30} height={30} alt="Linkedin"/></a></Link>
            <Link href=""><a><Image src={linkedin} width={30} height={30} alt="Linkedin"/></a></Link>
            <Link href=""><a><Image src={linkedin} width={30} height={30} alt="Linkedin"/></a></Link>
            <Link href=""><a><Image src={linkedin} width={30} height={30} alt="Linkedin"/></a></Link>
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