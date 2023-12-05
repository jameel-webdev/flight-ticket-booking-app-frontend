import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import SearchBox from "../components/SearchBox";
import PopularsectionComponent from "../components/PopularsectionComponent";
import { Col, Container, Row } from "react-bootstrap";

const HeroPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <SearchBox />
          </Col>
          <Col>
            <PopularsectionComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroPage;
