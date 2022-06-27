import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/Img/Tadesse.jpg'
const Header = () => {
  return (
<header className=" bg-black font-semibold text-xl px-12 py-5 text-gray-200">
   <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
    <span className="text-xl">Tadesse G. Wakjira</span>
      </div>
      <div className="flex justify-between">
        <nav className="flex list-none space-x-10  hidden md:inline-flex text-black-200">
            <li >
                <Link href="">
                    <a> HOME</a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a> BLOG</a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a> PORTFOILO</a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a> ABOUT</a>
                </Link>
            </li>
           
        </nav>
  
      </div>
      <div className="mr-32 bg-white text-black px-5 py-1  rounded-full">
        <Link href=""  >
                    <a> CONTACT</a>
                </Link>
        </div>
    </div> 
</header>
  )
}

export default Header