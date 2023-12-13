import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeroPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo ? (
        <div>
          <Container md={12} className="d-flex justify-content-center">
            <Card className="mt-4 p-4 d-flex flex-column align-items-center">
              <h1 className="text-center mb-4">
                MERN - Flight Ticket Booking WebApp
              </h1>
              <p className="text-center mb-4 fs-5">
                Project focusing on a flight ticket booking app involves
                designing and implementing a comprehensive solution for users to
                seamlessly book and manage their air travel.
              </p>
              <p>
                <strong>Frontend :</strong> Vite-React , React-bootstrap ,
                Bootstrap , React-router-dom , React-toastify ,
                React-redux-toolkit
              </p>
              <p>
                <strong>Backend :</strong> Express , MongoDb(mongoose) , dotenv
                , jsonwebtoken , bcryptjs , cookie-parser
              </p>
              <p>You in Main Homepage</p>
              <strong>
                Find your way to search flights or bookings through menus on the
                left
              </strong>
            </Card>
          </Container>
        </div>
      ) : (
        <div>
          <Container className="d-flex justify-content-center">
            <Card className="mt-4 p-4 d-flex flex-column align-items-center">
              <h1 className="text-center mb-4">
                MERN - Flight Ticket Booking WebApp
              </h1>
              <p className="text-center mb-4 fs-5">
                Project focusing on a flight ticket booking app involves
                designing and implementing a comprehensive solution for users to
                seamlessly book and manage their air travel.
              </p>
              <p>
                <strong>Frontend :</strong> Vite-React , React-bootstrap ,
                Bootstrap , React-router-dom , React-toastify ,
                React-redux-toolkit
              </p>
              <p>
                <strong>Backend :</strong> Express , MongoDb(mongoose) , dotenv
                , jsonwebtoken , bcryptjs , cookie-parser
              </p>
              <p>This is sample home page with dummy menus</p>
              <strong>
                Kindly Signin or SignUp for any search and booking flights
              </strong>
              <i>
                *** for admin signin use this credentials{" "}
                <strong>email: </strong>
                admin123@gmail.com <strong>password: </strong>admin123 ***
              </i>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
};

export default HeroPage;
