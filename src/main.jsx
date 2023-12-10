import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./slices/store.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeroPage from "./pages/HeroPage.jsx";
import LoginPage from "./pages/UserPages/LoginPage.jsx";
import RegistrationPage from "./pages/UserPages/RegistrationPage.jsx";
import ProfilePage from "./pages/UserPages/ProfilePage.jsx";
import SearchPage from "./pages/FlightPages/SearchPage.jsx";
import BookingPage from "./pages/BookingPages/BookingPage.jsx";
import FlightformPage from "./pages/FlightPages/FlightformPage.jsx";
import MybookingsPage from "./pages/BookingPages/MybookingPage.jsx";
import CommonRoute from "./components/Routes/CommonRoute.jsx";
import PrivateRoute from "./components/Routes/PrivateRoute.jsx";
import AdminPrivateRoute from "./components/Routes/AdminPrivateRoute.jsx";
import AdminBookingsPage from "./pages/AdminPages/AdminBookingsPage.jsx";
import AdminUsersPage from "./pages/AdminPages/AdminUsersPage.jsx";
import AdminFlightPage from "./pages/AdminPages/AdminFlightPage.jsx";
import PaymentsuccessPage from "./pages/BookingPages/PaymentsuccessPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<HeroPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/signin" element={<LoginPage />} />
            {/*COMMON ROUTE*/}
            <Route path="" element={<CommonRoute />}>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/booknow/:_id" element={<BookingPage />} />
              <Route path="/mybookings" element={<MybookingsPage />} />
              <Route path="/paymentsuccess" element={<PaymentsuccessPage />} />
            </Route>
            {/*PRIVATE ROUTE*/}
            <Route path="" element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/booknow/:_id" element={<BookingPage />} />
              <Route path="/mybookings" element={<MybookingsPage />} />
            </Route>
            {/*ADMIN PRIVATE ROUTE*/}
            <Route path="" element={<AdminPrivateRoute />}>
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
