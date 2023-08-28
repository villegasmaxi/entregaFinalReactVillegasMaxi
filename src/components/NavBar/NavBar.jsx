import Buttons from "../Buttons/Buttons";
import CartWidget from "../CartWidget/CartWidget";
import Brand from "../Brand/Brand";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <div className=" container-fluid mt-2 p-0 ">
      <Navbar expand="lg" className="bg-gradient bg-secondary">
        <Container className="d-flex justify-content-evenly">
          <Navbar.Brand>
            <NavLink to="/" className="brand">
              <Brand />
            </NavLink>
          </Navbar.Brand>

          <NavLink className="ms-3 me-3 fs-5 text-decoration-none text-dark fw-bold" to="/">Home</NavLink>

          <NavLink className="ms-3 me-3 fs-5 text-decoration-none text-dark fw-bold">Link</NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className=" fs-5 fw-bolder ms-1"
                title="Menú"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/">
                  Menú Completo
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/category/comida">
                  Comidas
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/postre">
                  Postres
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/cafe">
                  Cafés
                </NavDropdown.Item>
              </NavDropdown>

            
            </Nav>
            <Nav.Link className="ms-1" as={NavLink} to="/Cart">
                <CartWidget />
              </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
