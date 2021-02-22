import React from "react";
import { Navbar, Container } from "react-bootstrap";

const styles = {
  navbarStyle: {
    
    fontSize: "2rem",
    fontFamily: "SansSerif",
    backgroundColor: "#bcaaa4",
    justifyContent: "center",
    display: "flex",
    width: "100%"
  },
  appName: {
    fontSize: "5rem",
    fontFamily: "Impact",
    justifyContent: "center"
  },
};

function MyNavbar() {
  return (
    <Container fluid style={styles.navbarStyle} className="MainNav">
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand style={styles.appName} className="AppName">
          Amalyn Baguio
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;