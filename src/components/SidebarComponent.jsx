import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { TiHome } from "react-icons/ti";
import { FaSuitcase, FaUser, FaHotel, FaBus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdFlight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const { userInfo } = useSelector((state) => state.auth);

  const mainMenu = [
    {
      title: "Flight",
      icon: <MdFlight />,
      link: "/",
    },
    {
      title: "Hotels",
      icon: <FaHotel />,
      link: "/",
    },
    {
      title: "Bus",
      icon: <FaBus />,
      link: "/",
    },
    {
      title: "My Trips",
      icon: <FaSuitcase />,
      link: "/",
    },
    {
      title: "Support",
      icon: <BiSupport />,
      link: "/",
    },
  ];
  const userMenu = [
    {
      title: "Home",
      icon: <TiHome />,
      link: "/search",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      link: "/profile",
    },
    {
      title: "Bookings",
      icon: <FaSuitcase />,
      link: "/mybookings",
    },
    {
      title: "Support",
      icon: <BiSupport />,
      link: "/search",
    },
  ];
  const adminMenu = [
    {
      title: "Home",
      icon: <TiHome />,
      link: "/search",
    },
    {
      title: "My Trips",
      icon: <FaUser />,
      link: "/mybookings",
    },
    {
      title: "Flights",
      icon: <MdFlight />,
      link: "/allflights",
    },
    {
      title: "Users",
      icon: <FaUser />,
      link: "/allusers",
    },
    {
      title: "Bookings",
      icon: <FaSuitcase />,
      link: "/allbookings",
    },
  ];
  const menuToBeRendered = userInfo?.data?.isAdmin ? adminMenu : userMenu;
  const noUser = userInfo ? menuToBeRendered : mainMenu;
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="my-3">
      <Container className="fs-4">
        {windowWidth >= 768 && (
          <Row>
            {noUser.map((item, index) => {
              return (
                <Col xs={12} className="p-2 m-2" key={index}>
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
        )}

        {windowWidth < 768 && (
          <Row>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Menus
              </Dropdown.Toggle>

              <Dropdown.Menu key={noUser.title}>
                {noUser.map((item, index) => {
                  return (
                    <>
                      <Dropdown.Item
                        key={index}
                        href={item.link}
                        className="text-decoration-none text-secondary"
                      >
                        {item.icon} {item.title}
                      </Dropdown.Item>
                    </>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default SidebarComponent;
