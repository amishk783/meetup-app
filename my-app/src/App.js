import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import MeetUp from "./components/Meetup/Meetup";
import HomeLogin from "./pages/HomeLogin";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import UserEvent from "./pages/UserEvent";

function App() {
  const isLogin = useSelector((state) => state.login.isAuthenthicated);
  console.log(isLogin);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={isLogin ? <HomeLogin /> : <Home />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {isLogin && <Route path="/add-meetup" element={<MeetUp />}></Route>}
        {<Route path="/your-meetup" element={<UserEvent/>}></Route>}
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
