import Buttons from "../Buttons";
import Cartwidget from "../CartWidget";
import Brand from "../Brand";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./index.css";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <> 
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/" className="brand">
                <Brand />
              </NavLink>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/category/comida">
                    Comida
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/category/postre">
                    Postres
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/category/cafe">
                    Cafés
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/">
                    Menú Completo
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Buttons
                    valor="Cálculo a la romana"
                    font="sans-serif"
                    handleClick={() => alert("Proximamente estará en servicio")}
                  />
                </Nav.Link>
                <Nav.Link>
                  <Buttons
                    valor="Calculo equitativo"
                    handleClick={() =>
                      alert("proximamente calculadora de gastos")
                    }
                  />
                </Nav.Link>
                <Nav.Link>
                  <Cartwidget valor="0" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}
export default NavBar;
