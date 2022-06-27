import Head from "next/head"
import Link from "next/link"
const Header = () => {
  return (
<header>
   <div className="flex">
      <div>
        <span>Tadesse G. Wakjira</span>
      </div>
      <div>
        <nav>
            <li>
                <Link href="">
                    <a> Home</a>
                </Link>
            </li>
        </nav>
      </div>
    </div> 
</header>
  )
}

export default Header