import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            MERN Boilerplate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ms-auto' style={{ marginRight: "0px" }}>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
              <NavDropdown title='Functions' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.2'>
                  <Nav.Link as={Link} to='/function1'>
                    Func
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  <Nav.Link as={Link} to='/function2'>
                    Func 2
                  </Nav.Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href='#action/3.4'>
                  <Nav.Link as={Link} to='/function3'>
                    Func 3
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </header>
  );
};

export default Header;
