import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { TiHome } from "react-icons/ti";
import { FaSuitcase, FaUser, FaHotel, FaBus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaUnlock } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  const mainMenu = [
    {
      title: "Flight",
      icon: <MdFlight />,
      link: "/flights",
    },
    {
      title: "Hotels",
      icon: <FaHotel />,
      link: "/hotels",
    },
    {
      title: "Bus",
      icon: <FaBus />,
      link: "/buses",
    },
    {
      title: "My Trips",
      icon: <FaSuitcase />,
      link: "/bookings",
    },
    {
      title: "Support",
      icon: <BiSupport />,
      link: "/contact",
    },
  ];
  const userMenu = [
    {
      title: "Home",
      icon: <TiHome />,
      link: "/",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      link: "/profile",
    },
    {
      title: "Bookings",
      icon: <FaSuitcase />,
      link: "/bookings",
    },
    {
      title: "Support",
      icon: <BiSupport />,
      link: "/support",
    },
    {
      title: "Logout",
      icon: <FaUnlock />,
      link: "/logout",
    },
  ];
  const adminMenu = [
    {
      title: "Home",
      icon: <TiHome />,
    },
    {
      title: "Flights",
      icon: <MdFlight />,
    },
    {
      title: "Users",
      icon: <FaUser />,
    },
    {
      title: "Bookings",
      icon: <FaSuitcase />,
    },
    {
      title: "Logout",
      icon: <FaUnlock />,
    },
  ];

  return (
    <div className="my-4">
      <Container className="fs-4">
        <Row>
          {mainMenu.map((item, index) => {
            return (
              <Col xs={12} className="p-2 m-2">
                <Link
                  className="text-decoration-none text-secondary"
                  to={item.link}
                >
                  {item.icon} {item.title}
                </Link>
              </Col>
            );
          })}
        </Row>
        {/* <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Menus
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {userMenu.map((item, index) => {
              return (
                <>
                  <Dropdown.Item
                    href={item.link}
                    key={index}
                    className="text-decoration-none text-secondary"
                  >
                    {item.icon} {item.title}
                  </Dropdown.Item>
                </>
              );
            })}
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </div>
  );
};

export default SidebarComponent;
