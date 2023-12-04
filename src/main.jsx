import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
              <Route path="/bookings" element={<BookingPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
