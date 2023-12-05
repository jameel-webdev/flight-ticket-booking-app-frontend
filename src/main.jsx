import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./slices/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage.jsx";
import LoginPage from "./pages/UserPages/LoginPage.jsx";
import RegistrationPage from "./pages/UserPages/RegistrationPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProfilePage from "./pages/UserPages/ProfilePage.jsx";
import SearchPage from "./pages/FlightPages/SearchPage.jsx";
import BookingPage from "./pages/BookingPages/BookingPage.jsx";
import FlightPage from "./pages/FlightPages/FlightPage.jsx";
import AdminBookingsPage from "./pages/BookingPages/AdminBookingsPage.jsx";
import AdminFlightPage from "./pages/FlightPages/AdminFlightPage.jsx";
import AdminUsersPage from "./pages/UserPages/AdminUsersPage.jsx";
import AdminPrivateRoute from "./components/AdminPrivateRoute.jsx";
import FlightformPage from "./components/FlightformPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<HeroPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/signin" element={<LoginPage />} />
            {/*PRIVATE ROUTE*/}
            <Route path="" element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/searchresult" element={<SearchPage />} />
              <Route path="/flights" element={<FlightPage />} />
              <Route path="/mybookings" element={<BookingPage />} />
            </Route>
            <Route path="" element={<AdminPrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/flightform" element={<FlightformPage />} />
              <Route path="/allusers" element={<AdminUsersPage />} />
              <Route path="/allbookings" element={<AdminBookingsPage />} />
              <Route path="/allflights" element={<AdminFlightPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
