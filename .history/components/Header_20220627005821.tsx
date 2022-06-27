import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/Img/Tadesse.jpg'
const Header = () => {
  return (
<header className="bg-gray-100 px-10 py-3">
   <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
       
       <Image className="rounded-full" src={Logo} alt="Taddes" width={50} height={50} />
      
        <span>Tadesse G. Wakjira</span>
      </div>
      <div>
        <nav className="flex list-none space-x-4 font-bold shadow ">
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