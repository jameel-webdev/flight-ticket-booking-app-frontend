import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "react-bootstrap";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Container fluid>
        <ToastContainer />
        <Row className="overflow-x-hidden overflow-y-hidden">
          <Col sm={12} md={2}>
            <SidebarComponent />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}

export default App;
