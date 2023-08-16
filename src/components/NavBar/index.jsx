import Buttons from "../Buttons";
import CartWidget from "../CartWidget";
import Brand from"../Brand"
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    
        <div className=" container-fluid  mt-2 p-0 ">
        <Navbar expand="lg" className="d-flex bg-gradient bg-secondary ">
          <Container className="d-flex justify-content-evenly">
            <Navbar.Brand>
              <NavLink to="/" className="brand">
                <Brand />
              </NavLink>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown className=" fs-5 fw-bolder ps-5 pe-5" title="Menú" id="basic-nav-dropdown">
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
                <Nav.Link>
                  <Buttons
                    btn="btn btn-secondary"
                    valor="Cálculo a la romana"
                    font="sans-serif"
                    handleClick={() =>  alert("Proximamente calculadora estilo a la romana")}
                  />
                </Nav.Link>

                <Nav.Link>
                  <Buttons
                    btn="btn btn-secondary"
                    valor="Calculo equitativo"
                    font="sans-serif"
                    handleClick={() =>
                      alert("Proximamente calculadora de gastos")
                    }
                  />
                </Nav.Link>

                <Nav.Link as={NavLink} to="/Cart">
                  <CartWidget />
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
  );
}
export default NavBar;
