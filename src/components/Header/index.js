import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import NavItem from "../NavItem";

function Header(props) {
    return (
        <Navbar className="navbar-dark bg-dark py-0" expand="lg">
            <Navbar.Brand className="py-5" href="/">Matthew Palomo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavItem text={"Home"} tagName={'home'} current={props.current}/>
                    <NavItem text={"Services"} tagName={'services'} current={props.current}/>
                    <NavItem text={"Credentials"} tagName={'credentials'} current={props.current}/>
                    <NavItem text={"Contact"} tagName={'contact'} current={props.current}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;