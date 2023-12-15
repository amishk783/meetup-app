import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const NavBar = () => {
  const isLogin = useSelector((state) => state.login.isAuthenthicated);

  return (
    <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
      <li className=" ">
        <Link
          to="/home"
          className="font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900"
        >
          Home
        </Link>
      </li>
      <li className="font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900">
        <Link to={`/${!isLogin ? "about-us" : "your-meetup"}`}>{`${
          !isLogin ? "About Us" : "Your Meetup"
        }`}</Link>
      </li>
      <li className="font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900">
        <Link to={`/${!isLogin ? "contact-us" : "add-meetup"}`}>
          {`${!isLogin ? "Contact Us" : "Add Meetup"}`}
        </Link>
      </li>
    </ul>
  );
};
export default NavBar;
