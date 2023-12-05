import { Link, useLocation } from "react-router-dom";
import './index.css'
import '../index.css'
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import {BsFillSignIntersectionFill} from "react-icons/bs";
import {BsSignIntersectionFill} from "react-icons/bs";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Signin", "Signup"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text" />,
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
    Signin: <BsFillSignIntersectionFill className="fs-1 text" />,
    Signup: <BsSignIntersectionFill className="fs-1 text" />,
  };
  const { pathname } = useLocation();
  return (
    <div className=" wd-kanbas-navigator list-group " style={{ width: 150 }}>
        <img width="60px" src="../../images/northeastern-logo.jpg"></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;