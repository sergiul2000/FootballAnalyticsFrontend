import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { FaFish, FaPizzaSlice, FaBeer, FaGuitar } from "react-icons/fa";
// import { GiRooster } from "react-icons/gi";

function MyNavbar() {
  return (
    <Navbar className="navbarClass" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Football-Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Leagues" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/leagueStats">
                League table
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/simplePythagorean">
                Simple Pythagorean
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/extendedPythagorean">
                Extended Pythagorean
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Players" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/playerStats">
                Players stats
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <Button variant="secondary" href="/">Rating Prediction</Button>
            </Form>
            <Nav.Link href="#deets">Sign in</Nav.Link>
            <Nav.Link href="#memes">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
