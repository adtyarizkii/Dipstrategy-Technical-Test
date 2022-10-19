import React from "react";
import logo from "../assets/navbar/logo-color.png";
import fb from "../assets/navbar/fb-black.png";
import ig from "../assets/navbar/ig-black.png";
import twitter from "../assets/navbar/twit-black.png";
import linkedin from "../assets/navbar/linked-black.png";
import { Container, Nav, Navbar, NavDropdown, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const NavbarHome = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ marginTop: "3vh" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", height: "40px" }}
            />
          </Navbar.Brand>
          <div className="ms-5">
            <small className="me-1 text-muted">ID</small>
            <small className="text-muted">EN</small>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div></div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                BERANDA
              </Nav.Link>
              <NavDropdown title="TENTANG" id="collasible-nav-dropdown">
                <div className="nav-drop">
                  <Link to="/tentang/profil-perusahaan" className="drop-card">
                    <Card style={{ width: "13rem" }} className="me-3">
                      <Card.Body>
                        <Card.Header>
                          <h6>Profil Perusahaan</h6>
                        </Card.Header>
                        <small className="text-muted">
                          Inovasi dan transformasi bagi kami adalah suatu
                          keniscayaan, karena kami ingin meraih masa depan. Dari
                          perusahaan pertambangan batu bara, kami ingin menjadi
                          perusahaan energi kelas dunia yang peduli Lingkungan.
                          Itulah visi kami.
                        </small>
                        <line />
                        <Card.Footer>
                          <h6>Selengkapnya</h6>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/tentang/profil-perusahaan" className="drop-card">
                    <Card style={{ width: "13rem" }} className="me-3">
                      <Card.Body>
                        <Card.Header>
                          <h6>Profil Perusahaan</h6>
                        </Card.Header>
                        <small className="text-muted">
                          Inovasi dan transformasi bagi kami adalah suatu
                          keniscayaan, karena kami ingin meraih masa depan. Dari
                          perusahaan pertambangan batu bara, kami ingin menjadi
                          perusahaan energi kelas dunia yang peduli Lingkungan.
                          Itulah visi kami.
                        </small>
                        <line />
                        <Card.Footer>
                          <h6>Selengkapnya</h6>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/tentang/profil-perusahaan" className="drop-card">
                    <Card style={{ width: "13rem" }}>
                      <Card.Body>
                        <Card.Header>
                          <h6>Profil Perusahaan</h6>
                        </Card.Header>
                        <small className="text-muted">
                          Inovasi dan transformasi bagi kami adalah suatu
                          keniscayaan, karena kami ingin meraih masa depan. Dari
                          perusahaan pertambangan batu bara, kami ingin menjadi
                          perusahaan energi kelas dunia yang peduli Lingkungan.
                          Itulah visi kami.
                        </small>
                        <line />
                        <Card.Footer>
                          <h6>Selengkapnya</h6>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </NavDropdown>
              <NavDropdown title="BISNIS KAMI" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="TATA KELOLA" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ESG" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="HUBUNGAN INVESTOR"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar fixed="top" bg="light" variant="light" style={{ height: "5vh" }}>
        <Container>
          <Nav className="ms-auto mt-2">
            <Nav.Link as={Link} to="/" style={{ fontStyle: "italic" }}>
              LAPORAN
            </Nav.Link>
            <Nav.Link as={Link} to="/" style={{ fontStyle: "italic" }}>
              BERITA •
            </Nav.Link>
            <Nav.Link as={Link} to="/" style={{ fontStyle: "italic" }}>
              SDM •
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com" target="blank">
              <img src={fb} alt="fb" style={{ height: "1rem" }} />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com" target="blank">
              <img src={ig} alt="fb" style={{ height: "1rem" }} />
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com" target="blank">
              <img src={twitter} alt="fb" style={{ height: "1rem" }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com" target="blank">
              <img src={linkedin} alt="fb" style={{ height: "1rem" }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
