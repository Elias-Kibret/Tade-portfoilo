import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/Img/Tadesse.png'
const Header = () => {
  return (
<header className=" bg-black font-semibold  pl-32 py-4 text-gray-300  ">
   <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
    <Image src={Logo}   className="rounded-full" width={50} height={50}/>
    <span>Tadesse G. Wakjira</span>
      </div>
      <div className="flex justify-between">
        <nav className="flex list-none space-x-10  hidden md:inline-flex text-black-200">
            <li className="">
                <Link href="/">
                    <a className="hover-state"> Home</a>
                </Link>
            </li>
            <li>
                <Link href="" className="relative">
                    <a className="hover-state"> Publications <span></span></a>
                    <div className="absolute">
                        
                    </div>
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