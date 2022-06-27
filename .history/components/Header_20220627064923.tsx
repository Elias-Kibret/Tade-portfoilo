import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/Img/Tadesse.jpg'
const Header = () => {
  return (
<header className="font-semibold  px-12 py-3 shadow border ">
   <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
    <span className="text-xl">Tadesse G. Wakjira</span>
      </div>
      <div className="mr-32 flex justify-between">
        <nav className="flex list-none space-x-6  hidden md:inline-flex text-black-200">
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
        <div>
        <Link href="">
                    <a> CONTACT</a>
                </Link>
        </div>
      </div>
    </div> 
</header>
  )
}

export default Header