import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/Img/Tadesse.png'
const Header = () => {
  return (
<header className=" bg-black font-semibold  pl-32 py-5 text-gray-300  ">
   <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
    <Image src={Logo}   className="rounded-full" width={50} height={50}/>
    <span>Tadesse G. Wakjira</span>
      </div>
      <div className="flex justify-between">
        <nav className="flex list-none space-x-12  hidden md:inline-flex text-black-200">
            <li className="">
                <Link href="/">
                    <a className="hover-state flex space-x-2"><svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg> Home</a>
                </Link>
            </li>
            <li>
                <Link href="/" className="relative">
                    <a className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <a className="hover-state"> Publications <span></span></a>
                        <div className="absolute hidden top-24 -mx-10 p-6 -mt-3 space-y-3 w-96 h-32 bg-black">
                            <div className="text-gray-400 flex flex-col">
                               <Link href=""><a>Journal Papers</a></Link>
                               <Link href=""><a>Conferance Papers</a></Link>
                               <Link href=""><a>Acadamic Theses</a></Link> 
                            </div>

                        </div>
                    </a>

                </Link>
            </li>
            <li>
                <Link href="">
                    <a className="hover-state"> What's New</a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a className="hover-state"> Awards</a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a className="hover-state"> Research</a>
                </Link>
            </li>
           
        </nav>
  
      </div>
      <div className="mr-24 bg-white text-black px-5 py-1  rounded-full">
        <Link href=""  >
                    <a> Contact</a>
                </Link>
        </div>
    </div> 
</header>
  )
}

export default Header