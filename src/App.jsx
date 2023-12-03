import { Outlet } from "react-router-dom";
// import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Col, Container, Row } from "react-bootstrap";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SidebarComponent />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      {/* <FooterComponent /> */}
    </>
  );
}

export default App;
