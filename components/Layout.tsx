import Header from "./Header"
import Footer from "./Footer"


type Props = {

    children: JSX.Element,
  };
const Layout = ({children}:Props) => {
  return (
    <div className="relative">
        <Header />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout