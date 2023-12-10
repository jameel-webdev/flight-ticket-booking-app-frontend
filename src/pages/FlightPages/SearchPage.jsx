import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SearchformComponent from "../../components/SearchformComponent";
import FlightcardComponent from "../../components/FightcardComponent";
import { useGetallflightsQuery } from "../../slices/Flights/flightApiSlice";

const SearchPage = () => {
  const [flightsData, setFlightsData] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState({});
  const {
    data: flights,
    isLoading,
    isError,
  } = useGetallflightsQuery({
    search: selectedSearch,
  });
  useEffect(() => {
    if (!isLoading && flights) {
      setFlightsData(flights.data);
    }
  }, [flights, isLoading, selectedSearch]);

  return (
    <Container>
      {flights && flightsData ? (
        <>
          <Row>
            <Col>
              <SearchformComponent setSelectedSearch={setSelectedSearch} />
            </Col>
          </Row>
          <Row>
            <Col>
              {isError ? (
                <h3>No Flights Available !</h3>
              ) : (
                <FlightcardComponent flightsData={flightsData} />
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="grow" />
      )}
    </Container>
  );
};

export default SearchPage;
