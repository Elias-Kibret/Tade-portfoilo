import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
const Header = () => {
  return (
<header>
   <div className="flex justify-between ">
      <div>
       <div>
        <img src="/Tadesse G.Wakjira.jpg" alt="Tadesse G.Wakjira"/>
       </div>
        <span>Tadesse G. Wakjira</span>
      </div>
      <div>
        <nav className="flex list-none space-x-3 ">
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