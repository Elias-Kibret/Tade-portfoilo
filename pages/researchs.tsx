import Image from "next/image"
import orcid from '../public/Img/orcid.svg'
import google_scholars from '../public/Img/googleScholara.svg'
import research from '../public/Img/ResearchGate.svg'
import Link from "next/link"
const researchs = () => {
  const icons=[orcid,google_scholars,research]
  const link=['elias', 'elias','elias']
  return (
    <div>
        <div className="bg-sky-900  w-full relative py-2 h-96 ">
        <div className=" w-9/12  absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-300 mx-auto h-1">
               <h1 className=" tracking-wider leading-relaxed text-center mt-6 text-6xl font-extrabold text-gray-200 drop-shadow-2xl">
               Publications

                and
                <p></p>
                 presentations
               </h1>
                
           </div> 
           <div className=" absolute right-10 top-80">
            {
                 icons.map((item, key)=>(
                  <Link href={link[key]} className="mr-2 ">
                    <a className="mr-4">
                    <Image src={item} className='rounded-full ' width={40} height={40}/> 
                    </a>
                    
                  </Link>
                 
                 ))
            }
            
           </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default researchs