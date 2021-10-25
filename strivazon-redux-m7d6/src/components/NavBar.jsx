import {Navbar, Nav} from "react-bootstrap"
import Favorites from "./Favorites"

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home" className="text-white"><h3>Strive Jobs </h3></Navbar.Brand>
  
    <Nav className="ml-auto">
    <Favorites/>
    </Nav>
    
  
</Navbar>
    )
}

export default NavBar 