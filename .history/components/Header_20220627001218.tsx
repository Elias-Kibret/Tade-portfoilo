import Head from "next/head"
import Link from "next/link"
const Header = () => {
  return (
<header>
   <div className="flex justify-between">
      <div>
        <span>Tadesse G. Wakjira</span>
      </div>
      <div>
        <nav className="flex  list-style-type: none">
            <li className="list-style-type: none">
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