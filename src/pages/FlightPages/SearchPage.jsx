import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SearchformComponent from "../../components/SearchformComponent";
import FlightcardComponent from "../../components/FightcardComponent";
import { useAllflightsMutation } from "../../slices/Admin/adminApiSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setFlights } from "../../slices/Flights/flightSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [flightsData, setFlightsData] = useState([]);
  console.log(flightsData);
  const [allFlightsData, { isLoading }] = useAllflightsMutation();
  const fetchAllFlights = async () => {
    try {
      const res = await allFlightsData().unwrap();
      setFlightsData([...res.data]);
      dispatch(setFlights({ ...res }));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    fetchAllFlights();
  }, []);
  return (
    <Container>
      {isLoading && <Spinner animation="grow" />}
      <Row>
        <Col>
          <SearchformComponent setFlightsData={setFlightsData} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FlightcardComponent flightsData={flightsData} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
