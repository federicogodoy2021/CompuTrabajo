import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Widget from './Widget/Widget'

function NavBar() {
  return (
    <div className='navBar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
        <Navbar.Brand href="#home">Athom Sport Rosario</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Basquet" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pelotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tenis" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Raquetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pelotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Futbol" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Botines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pelotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"style={{ fontSize:'24px' }}>Carrito</Nav.Link>
            <Nav.Link eventKey={2} href="#miCarrito">
                <Widget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>      

  )
}

export default NavBar