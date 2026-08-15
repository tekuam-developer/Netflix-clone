import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Open / close mobile menu
  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  // Close menu when a navigation link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when ESC is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="header-outer-wrapper">
      <div className="header-container">
        <div className="logo-wrapper">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Netflix logo" className="my-logo" />
          </Link>
        </div>

        <nav
          className={`navigation-links ${menuOpen ? "show-mobile-menu" : ""}`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/tvshows" onClick={closeMenu}>
            TV Shows
          </Link>

          <Link to="/movies" onClick={closeMenu}>
            Movies
          </Link>

          <Link to="/latest" onClick={closeMenu}>
            Latest
          </Link>

          <Link to="#" onClick={closeMenu}>
            My List
          </Link>

          <Link to="#" onClick={closeMenu}>
            Browse By Languages
          </Link>
        </nav>

        <div className="header-icons">
          <button className="header-icon" aria-label="Search">
            <SearchIcon />
          </button>

          <button className="header-icon" aria-label="Notifications">
            <NotificationsIcon />
          </button>

          <button className="header-icon" aria-label="Account">
            <AccountBoxIcon />
          </button>

          <button className="header-icon" aria-label="Account menu">
            <ArrowDropDownIcon />
          </button>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
