import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">GraphQL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={'nav-link'}>Posts</NavLink>
            <NavLink to="/users" className={'nav-link'}>Users</NavLink>
            <NavLink to="/add-user" className={'nav-link'}>Add User</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Menu };
