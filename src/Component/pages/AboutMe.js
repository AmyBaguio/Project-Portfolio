import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const styles = {
  project: {
    margin: "20px",
    backgroundColor: "#efebe9",
    padding: "3rem",
    fontFamily: "Arial",
    fontSize: "1.25rem",
  },
};
export default function AboutMe() {
  return (
    <Container fluid style={styles.project} className="AboutMe">
      <Row>
        <Col xs={6} md={4}>
          <Image
            src="./image/Profilepic.png"
            height="500px"
            width="300px"
            thumbnail
          />
        </Col>
        <Col xs={6} md={8}>
          <h3>Email Address: amalynlaquinta@yahoo.com</h3>
          <h3>Mobile Number: +61-0466 429 484</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rhoncus massa tincidunt sapien fringilla ullamcorper. Duis ut
            imperdiet enim. Nullam at fermentum libero. Donec suscipit enim
            purus, ac mattis nisi facilisis at. Quisque a justo ac neque
            consequat congue. Aliquam posuere ut lacus fermentum bibendum. Sed
            nec tellus luctus, dapibus nisi quis, tempor nulla. Cras tellus
            neque, ullamcorper vitae ornare id, pretium ac orci. Etiam imperdiet
            lacinia odio nec finibus. Quisque facilisis ultrices augue. Fusce
            urna sapien, interdum ac diam sed, varius bibendum tortor. Duis
            blandit et nunc et blandit. Proin rutrum nulla et ex hendrerit,
            accumsan placerat odio mattis. Praesent et ante commodo, varius
            tortor ac, consectetur odio. Nullam in elementum ante. Quisque dolor
            turpis, finibus non semper eu, commodo at lectus. Donec molestie
            libero in auctor tristique. Curabitur eget felis nec ligula
            ultricies convallis nec at tortor. Pellentesque suscipit at est ac
            fringilla. Nam eu sapien eu nisl volutpat aliquet non eget leo.
            Vivamus ac cursus lectus, quis eleifend urna. In lectus odio,
            elementum eu ullamcorper at, tempus ac sapien. Donec tempus ligula
            ut ante varius, sit amet elementum dolor sodales. Morbi tincidunt
            dui sit amet laoreet sagittis. Maecenas iaculis tempus dui, at
            auctor justo. Nunc ultrices nisi tellus, nec maximus dolor blandit
            id. Proin lobortis nec augue non malesuada. Nullam malesuada
            pharetra sem non bibendum. Quisque a augue vel tellus molestie
            consequat quis non ipsum. Sed pulvinar sollicitudin facilisis. Etiam
            molestie cursus odio a congue. Sed rhoncus risus at sapien viverra,
            eget facilisis ipsum dictum. Vestibulum nec ex non ligula efficitur
            viverra. In hac habitasse platea dictumst. Phasellus mollis mauris
            quam, sagittis porttitor nisl auctor ut. Duis ut nibh nec nisl
            suscipit maximus. Aenean et maximus ex. Aliquam eget quam metus.
            Fusce a neque facilisis, accumsan eros nec, ultrices odio. Aliquam
            in sem et nunc congue placerat lobortis vitae libero. Mauris aliquam
            viverra orci ut convallis. Nullam aliquet finibus ante lacinia
            cursus. Sed rutrum feugiat sem, a pulvinar libero condimentum in.
            Vivamus non odio finibus, egestas mi a, suscipit nibh. Integer sit
            amet tortor vel eros fringilla dapibus. Aliquam lacinia blandit
            dignissim. Morbi blandit blandit lacus ut placerat. Proin imperdiet
            metus vel lectus imperdiet finibus. Aenean nisi mi, luctus ut nibh
            eget, venenatis sollicitudin metus. Vestibulum euismod viverra nulla
            eleifend porttitor. Etiam a sollicitudin urna.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
