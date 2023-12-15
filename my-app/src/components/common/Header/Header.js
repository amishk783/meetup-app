import { Link, useNavigate } from "react-router-dom";

import loginActions from "../../../Store/loginSlice"
import NavBar from "./NavBar";
import { useSelector,useDispatch } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.login.isAuthenthicated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isLogin);
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(loginActions.logout());
    navigate('/home');
    
  }
  return (
    <header className="padding-x py-3 bg-[#f5deb3] hover:bg-transparent absolute z-10 w-full text-white shadow-md">
      <nav className="flex justify-between items-center max-container">
        <div className="mx-auto flex items-center justify-start">
          <h1 className=" text-slate-950 text-3xl font-semibold">Meetup</h1>
        </div>
        <NavBar></NavBar>

        <div className="flex ">
          {
            <Link
              to={`/${!isLogin ? "login" : "#"}`}
              onClick={handleLogout}
              className="mr-4 text-blue-600 bg-white px-4 py-2 rounded-full"
            >
              {`${!isLogin ? "Log In" : "Log Out"}`}
            </Link>
          }
          {
            <button className="mr-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2  rounded-full">
              <Link to={`/${!isLogin ? "signup" : "book-ticket"}`}>
                {`${!isLogin ? "Sign Up" : "Book Ticket"}`}
              </Link>
            </button>
          }
        </div>
      </nav>
    </header>
  );
};
export default Header;
