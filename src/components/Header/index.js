import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import NavItem from "../NavItem";

function Header(props) {
    return (
        <div className="overlay-image">
            <Navbar className="navbar-dark py-0" expand="lg">
                    <Navbar.Brand className="py-5" href="/">
                        <span className="brand-name">PALOMO</span>
                        <br/>
                        <span className="brand-sub">
                            S<span className="smaller-text">AFETY </span> 
                            C<span className="smaller-text">ONSULTING</span>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-4" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavItem text={"ABOUT"} tagName={'home'} current={props.current}/>
                            <NavItem text={"COVID-19"} tagName={'covid19'} current={props.current}/>
                            <NavItem text={"CREDENTIALS"} tagName={'credentials'} current={props.current}/>
                            <NavItem text={"CONTACT"} tagName={'contact'} current={props.current}/>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;