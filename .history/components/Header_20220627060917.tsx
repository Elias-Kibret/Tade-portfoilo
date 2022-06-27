import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/Img/Tadesse.jpg'
const Header = () => {
  return (
<header className="bg-teal-100 px-12 py-3 shadow border  border-b-gray-100">
   <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
       
       <Image className="rounded-full" src={Logo} alt="Taddes" width={55} height={55} />
      
        <span>Tadesse G. Wakjira</span>
      </div>
      <div className="mr-20">
        <nav className="flex list-none space-x-4 font-bold hidden md:inline-flex">
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
            <li>
                <Link href="">
                    <a> CONTACT</a>
                </Link>
            </li>
        </nav>
      </div>
    </div> 
</header>
  )
}

export default Header