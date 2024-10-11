import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Nav from "../Navbar/Nav"



function Layout() {
  return (<>
    <Nav/>
        <Outlet/>
    <Footer/>
  </>)
}

export default Layout