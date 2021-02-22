import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
 import { Github, Link45deg } from 'react-bootstrap-icons';

const styles = {
  project: {
    margin: "20px",
    backgroundColor: "#efebe9",
    padding: "3rem",
    fontFamily: "Arial",
    fontSize: "1.5rem",
    color: "blue",
  },
  row2: {
  
  }
};

function Project() {
  return (
    <Container fluid style={styles.project} className="ProjectTile">
      <Row>
        <Col xs={6} md={4}>
          <Image src="./image/Activynizer.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/Project2.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/ProgressiveBudget.png" thumbnail />
        </Col>
      </Row>
        <Row>
            <Col xs={6} md={4} spacing={4}>
            <p>Activynizer</p>
            <a href="https://github.com/AmyBaguio/ACTIVYNIZER_Project3">
               <Github />Github LInk</a>        
               <a href="https://activynizer-101.herokuapp.com/">
               <Link45deg />Deployed LInk</a>        
            </Col>
            <Col xs={6} md={4}>
            <p>Project 2</p>
            <a href="https://github.com/AmyBaguio/p2">
               <Github />Github LInk</a>        
               <a href="https://aqueous-anchorage-19621.herokuapp.com/">
               <Link45deg />Deployed LInk</a>       
            </Col>
            <Col xs={6} md={4}>
            <p>Budget Tracker</p>
            <a href="https://github.com/AmyBaguio/PWA-Online-Offline-Budget-Tracker-Wk-18">
               <Github />Github LInk</a>        
               <a href="https://money-flow-tracker.herokuapp.com/">
               <Link45deg />Deployed LInk</a>      
            </Col>
        </Row>
        <Row>
          <br></br>
        </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./image/FitnessTracker.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://raw.githubusercontent.com/AmyBaguio/Updated-Portfolio2/master/Assets/ResponsivePortfolio%20.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/BurgerApp.png" thumbnail />
        </Col>
      </Row>
      <Row>
            <Col xs={6} md={4}>
            <p>Fitness Tracker</p>
            <a href="https://github.com/AmyBaguio/FitnessTracker-Week17">
               <Github />Github LInk</a>        
               <a href="https://track-to-be-fit.herokuapp.com/?id=6032642074671b00174e5b87">
               <Link45deg />Deployed LInk</a>      
            </Col>
            <Col xs={6} md={4}>
            <p>Updated Portfolio</p>
            <a href="https://github.com/AmyBaguio/Updated-Portfolio2">
               <Github />Github LInk</a>        
               <a href="https://amybaguio.github.io/Updated-Portfolio2/">
               <Link45deg />Deployed LInk</a>      
            </Col>
            <Col xs={6} md={4}>
            <p>Burger App</p>
            <a href="https://github.com/AmyBaguio/Burger">
               <Github />Github LInk</a>        
               <a href="https://drive.google.com/file/d/1Q87JesqcHY9Sbmj34a9ALtscERo0A7Wh/view">
               <Link45deg />Deployed LInk</a>      
            </Col>
        </Row>
    </Container>
  );
}
export default Project;
