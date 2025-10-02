import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function CDA_Navbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="/">
          <img
            src="/logo.jpeg" // path relative to public folder
            alt="Creative Dance Academy"
            height="40" // adjust height as needed
            className="d-inline-block align-top"
          />{" "}
          Creative Dance Academy
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="cda-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="cda-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/classes">Classes</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            <NavDropdown title="Programs" id="programs-dropdown">
              <NavDropdown.Item href="/kids-dance">Kids Dance</NavDropdown.Item>
              <NavDropdown.Item href="/adult-dance">
                Adult Dance
              </NavDropdown.Item>
              <NavDropdown.Item href="/wedding-dance">
                Wedding Dance
              </NavDropdown.Item>
              <NavDropdown.Item href="/zumba">Zumba Class</NavDropdown.Item>
              <NavDropdown.Item href="/yoga">Yoga Class</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/events">Special Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CDA_Navbar;
