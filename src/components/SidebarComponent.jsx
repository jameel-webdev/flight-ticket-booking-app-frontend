import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { TiHome } from "react-icons/ti";
import { FaSuitcase, FaUser, FaHotel, FaBus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaUnlock } from "react-icons/fa6";
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
  ];
  const adminMenu = [
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
      title: "Flights",
      icon: <MdFlight />,
      link: "/flights",
    },
    {
      title: "Users",
      icon: <FaUser />,
      link: "/users",
    },
    {
      title: "Bookings",
      icon: <FaSuitcase />,
      link: "/bookings",
    },
  ];
  const menuToBeRendered = userInfo?.isAdmin ? adminMenu : userMenu;
  const noUser = userInfo ? menuToBeRendered : mainMenu;
  useEffect(() => {
    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount
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

              <Dropdown.Menu>
                {menuToBeRendered.map((item, index) => {
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
