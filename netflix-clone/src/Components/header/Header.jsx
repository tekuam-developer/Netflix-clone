import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Header() {
  return (
    <>
      <div className="container-fluid header-outer-wraper">
        <div className="row align-items-center">
          <div className="col-md-2 logo-wraper">
            <Link to="/">
              <img src={logo} alt="Netflix-logo" className="My-logo" />
            </Link>
          </div>
          <div className="col-md-7 links">
            <Link to="#home" className="col-md">
              Home
            </Link>
            <Link to="#features" className="col-md">
              TVShows
            </Link>
            <Link to="#pricing" className="col-md">
              Movies
            </Link>
            <Link to="#home" className="col-md">
              Latest
            </Link>
            <Link to="#features" className="col-md">
              MyList
            </Link>
            <Link to="#pricing" className="col-md">
              Browse By Languages
            </Link>
          </div>
          <div className="My-menu col-5 text-center">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="icons col-md-2">
            <li className="col-md">
              <SearchIcon />
            </li>
            <li className="col-md">
              <NotificationsIcon />
            </li>
            <li className="col-md">
              <AccountBoxIcon />
            </li>
            <li className="col-md">
              <KeyboardArrowDownIcon />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
