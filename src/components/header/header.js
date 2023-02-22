import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Context } from "../../context/store";

function Header({ isLoggedIn }) {
  const { store } = useContext(Context);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">To-Do App Stanescu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            {!isLoggedIn ? <Nav.Link> Welcome {store?.email}</Nav.Link> : null}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
