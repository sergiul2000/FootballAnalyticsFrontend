import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaFish, FaPizzaSlice, FaBeer, FaGuitar } from "react-icons/fa";
import { GiRooster } from "react-icons/gi";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
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
              <NavDropdown.Item href="#action/3.2">
                Simple Pythagorean
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Extended Pythagorean
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                <FaBeer />
                Bundensliga
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                <FaPizzaSlice />
                Serie A
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Players" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/playerStats">
                Players stats
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/playerStats">
                La liga
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/playerStats">
                Ligue 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/playerStats">
                Serie A
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/playerStats">
                Bundesliga
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
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
